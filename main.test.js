const rx = require('rxjs'),
  main = require('./main'),
  {
    users,
    mockUsers,
    mockPurchases
  } = require('./testUtil')

describe("test helper functions", () => {
  test("`everything` returns pages of correct length & user shape", done => {
    main.everything('users', 3)
      .take(2)
      .map(page => {
        expect(page).toHaveLength(3)
        expect(page[0]).toEqual(users)
        done()
      })
      .subscribe()
  })

  test("idFromEmail returns correct ID", done => {
    main.idFromEmailPrivate(rx.Observable.from(mockUsers))("langosh.tierra@erdman.co")
      .map(id => {
        expect(id).toEqual("HTNF-7RJY-YFCU-GUN2")
        done()
      })
      .subscribe()
  })
})

describe("test public API", () => {
  jest.setTimeout(40000)
  test("totalSpend returns correct number", done => {
    main.totalSpendPrivate(rx.Observable.from(mockUsers))(rx.Observable.from(mockPurchases))("langosh.tierra@erdman.co")
      .map(spend => {
        expect(spend).toEqual(expect.any(Number))
        expect(spend).toBe(49) // rounded from 49.98
        done()
      })
      .subscribe()
  })

  test("averageSpend returns correct number", done => {
    main.averageSpendPrivate(rx.Observable.from(mockUsers))(rx.Observable.from(mockPurchases))("langosh.tierra@erdman.co")
      .map(av => {
        expect(av).toEqual(expect.any(Number))
        expect(av > 0).toBe(true)
        done()
      })
      .subscribe()
  })
})


module.exports = {
  users
}