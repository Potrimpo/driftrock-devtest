const users = expect.objectContaining({
  id: expect.any(String),
  email: expect.any(String),
  first_name: expect.any(String),
  last_name: expect.any(String),
  phone: expect.any(String)
})

const mockPurchases = [
  [{
    "user_id": "ZG4M-5KKB-O1HH-JM0W",
    "item": "Synergistic Aluminum Shoes",
    "spend": "27.78"
  }, {
    user_id: 'HTNF-7RJY-YFCU-GUN2',
    item: 'Awesome Rubber Watch',
    spend: '27.46'
  }],
  [{
    "user_id": "6NGH-GKBP-MYRZ-3F0J",
    "item": "Aerodynamic Copper Bench",
    "spend": "3.21"
  }, {
    "user_id": "Y0E9-RIFB-U5BR-RFLV",
    "item": "Heavy Duty Bronze Bottle",
    "spend": "75.23"
  }],
  [{
    user_id: 'HTNF-7RJY-YFCU-GUN2',
    item: 'Rustic Bronze Bottle',
    spend: '22.32'
  }, {
    "user_id": "WNYD-TUCX-Q8IZ-GAQQ",
    "item": "Gorgeous Marble Lamp",
    "spend": "91.65"
  }]
]

const mockUsers = [
  [{
    "id": "KZHR-1H35-2IH8-JXYN",
    "first_name": "Quincy",
    "last_name": "Schimmel",
    "phone": "186.301.6921 x948",
    "email": "schimmel_quincy@ernser.io"
  }, {
    "id": "S27G-8UMJ-LDSL-UOPN",
    "first_name": "Henry",
    "last_name": "Terry",
    "phone": "636-387-6074 x690",
    "email": "terry_henry@doyle.io"
  }],
  [{
    "id": "HTNF-7RJY-YFCU-GUN2",
    "first_name": "Tierra",
    "last_name": "Langosh",
    "phone": "570-113-3234 x7287",
    "email": "langosh.tierra@erdman.co"
  }, {
    "id": "ZZLB-4HCN-OA3N-LGWB",
    "first_name": "Jack",
    "last_name": "Lakin",
    "phone": "(620) 104-0175",
    "email": "jack_lakin@rodriguezschuppe.io"
  }]
]

module.exports = {
  users,
  mockUsers,
  mockPurchases
}