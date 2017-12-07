const fetch = require('node-fetch')

const endpoint = "https://driftrock-dev-test-2.herokuapp.com"

const constructURI = (coll, page, pageSize) =>
  `${endpoint}/${coll}?page=${page}&per_page=${pageSize}`


// type User = {...}
// type Page = [User]

// String -> Number -> Number -> Page
const singlePage = (collection, page = 1, pageSize = 500) =>
  fetch(constructURI(collection, page, pageSize))
  .then(resp => resp.json())
  .then(p => p.data)
  .catch(console.error)


// String -> Number -> Number -> [Page]
const pages = (collection, pages = 1, pageSize = 500) => {
  const promises = Array(pages)
    .fill()
    .map((_, index) => index)
    .map(page => singlePage(collection, page, pageSize))

  // run the page queries in parallel and await all results
  return Promise.all(promises)
}

  module.exports = {
    singlePage,
    pages
  }