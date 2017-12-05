const fetch = require('node-fetch')

const endpoint = "https://driftrock-dev-test-2.herokuapp.com"

const constructURI = (coll, page, pageSize) =>
  `${endpoint}/${coll}?page=${page}&per_page=${pageSize}`

const singlePage = (collection, page=1, pageSize=10) =>
  fetch(constructURI(collection, page, pageSize))
    .then(resp => resp.json())
    .catch(console.error)

module.exports = {
  singlePage
}