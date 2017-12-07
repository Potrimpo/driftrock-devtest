const driftrock = require('./driftrock'),
  rx = require('rxjs')


// yikes do i feel a fool!
// turns out rxjs doesn't actually have backpressure!!
// https://github.com/ReactiveX/RxJS/issues/71
// monkey language

// retrieve individual pages of size n
// emitting each to the observer & closing the stream once the API runs out of data for us
const pageIterator = (observer, collection, pageNumber, chunkSize) =>
  driftrock.singlePage(collection, pageNumber, chunkSize)
  .then(page => {
    if (page.length > 0) {
      observer.next(page)
      return pageIterator(observer, collection, pageNumber + 1, chunkSize)
    } else {
      return observer.complete()
    }
  })


// type Page = [User || Purchase]

// String -> Number -> Observable[Page]
const everything = (collection, chunkSize = 1000) =>
  rx.Observable.create(observer => pageIterator(observer, collection, 1, chunkSize))

// String -> Observable[String] // length 1
const idFromEmailPrivate = stream => email => 
  stream
  .filter(page =>
    page.filter(user => user.email === email).length > 0 ? true : false)
  .map(page =>
    page.filter(user => user.email === email)[0])
  .map(user => user.id)
  .take(1)

const idFromEmail = idFromEmailPrivate( everything('users') )

// Number -> Observable[Page]
const purchasesById = stream => id =>
  stream
  .map(page =>
    page.filter(purchase => purchase.user_id === id))

// [Purchase] -> Number
const spend = page => page.reduce((acc, purchase) => acc + parseInt(purchase.spend), 0)


// String -> Observable[Number] // length 1
const totalSpendPrivate = usersStream => purchasesStream => email =>
  idFromEmailPrivate(usersStream)(email)
  .concatMap( purchasesById(purchasesStream) ) // concatMap on a stream that will always be length 1
  .reduce((acc, page) => acc + spend(page), 0)

const totalSpend = totalSpendPrivate( everything('users') )( everything('purchases') )


// String -> Observable[Number] // length 1
const averageSpendPrivate = usersStream => purchasesStream => email =>
  idFromEmailPrivate(usersStream)(email)
    .concatMap( purchasesById(purchasesStream) )
    .reduce((acc, page) =>
      ({ count: acc.count + page.length, spend: acc.spend + spend(page) }),
      { count: 0, spend: 0})
    .map(log => log.spend / log.count)

const averageSpend = averageSpendPrivate( everything('users') )( everything('purchases') )

module.exports = {
  everything,
  idFromEmailPrivate,
  idFromEmail,
  totalSpendPrivate,
  totalSpend,
  averageSpendPrivate,
  averageSpend
}