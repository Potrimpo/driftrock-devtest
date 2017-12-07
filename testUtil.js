const users = expect.objectContaining({
  id: expect.any(String),
  email: expect.any(String),
  first_name: expect.any(String),
  last_name: expect.any(String),
  phone: expect.any(String)
})

module.exports = {
  users
}