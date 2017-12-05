const driftrock = require('./driftrock')

describe("test single page requesets", () => {
  test("can retrieve users", async function() {
    const resp = await driftrock.singlePage('users', 1, 10)
    expect(resp).toHaveProperty('data')
    expect(resp.data).toHaveLength(10)
  })

  test("can retrieve purchases", async function() {
    const resp = await driftrock.singlePage('purchases', 1, 10)
    expect(resp).toHaveProperty('data')
    expect(resp.data).toHaveLength(10)
  })
})

describe("test multi-page requests", () => {
  test("can fetch multiple pages", async function() {
    const resp = await driftrock.pages('users', 5, 10)

    expect(resp).toHaveLength(5)

    for (let page of resp) {
      expect(page).toHaveProperty('data')
      expect(page.data).toHaveLength(10)
    }
  })
})