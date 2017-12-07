const driftrock = require('./driftrock'),
      { users } = require('./testUtil')

describe("test single page requesets", () => {
  test("can retrieve users", async function() {
    const resp = await driftrock.singlePage('users', 1, 10)
    expect(resp).toHaveLength(10)
    expect(resp[0]).toEqual(users)
  })

  test("can retrieve purchases", async function() {
    const resp = await driftrock.singlePage('purchases', 1, 10)
    expect(resp).toHaveLength(10)
  })
})

describe("test multi-page requests", () => {
  test("correct number of pages and page sizes", async function() {
    const resp = await driftrock.pages('users', 5, 10)

    expect(resp).toHaveLength(5)

    for (let page of resp) {
      expect(page).toHaveLength(10)
    }
  })
})