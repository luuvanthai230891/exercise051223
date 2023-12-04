// cau tao va khai bao

function User(userId, userName, email, password, createdAt) {
  this.userId = userId;
  this.userName = userName;
  this.email = email;
  this.password = password;
  this.createdAt = createdAt;
}
const users = [];

const formatDate = new Intl.DateTimeFormat("en", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour12: false,
});

users.push(
  new User(
    1,
    "Thai",
    "thai@gmail.com",
    "123",
    formatDate.format(new Date("12/12/2022"))
  )
);
users.push(
  new User(
    2,
    "Lam",
    "lam@gmail.com",
    "123",
    formatDate.format(new Date("12/12/2022"))
  )
);
users.push(
  new User(
    3,
    "Hung",
    "hung@gmail.com",
    "123",
    formatDate.format(new Date("12/12/2022"))
  )
);
users.push(
  new User(
    4,
    "Quy",
    "quy@gmail.com",
    "123",
    formatDate.format(new Date("2/12/2022"))
  )
);

// ====================================================================================
function Product(productId, productName, image, price, description, createdAt) {
  this.productId = productId;
  this.productName = productName;
  this.image = image;
  this.price = price;
  this.description = description;
  this.createdAt = createdAt;
}
const products = [];
products.push(
  new Product(1, "Xe dap", "http://image", 1000, "Xep dap dom"),
  formatDate.format(new Date("12/12/2022"))
);
products.push(
  new Product(2, "Xe may", "http://image", 2000, "Xep dap dom"),
  formatDate.format(new Date("12/12/2022"))
);
products.push(
  new Product(3, "O to", "http://image", 1200, "Xep dap dom"),
  formatDate.format(new Date("12/12/2022"))
);
products.push(
  new Product(4, "Tau thuy", "http://image", 1100, "Xep dap dom"),
  formatDate.format(new Date("12/12/2022"))
);

// ==================================================================
function Cart(cartId, userId, productId, quantity) {
  this.cartId = cartId;
  this.userId = userId;
  this.productId = productId;
  this.quantity = quantity;
}

const cartUser1 = [];
const cartUser2 = [];
const cartUser3 = [];
const cartUser4 = [];

cartUser1.push(new Cart(1, 1, 3, 2));
cartUser1.push(new Cart(2, 1, 2, 3));

cartUser2.push(new Cart(1, 2, 1, 5));

cartUser3.push(new Cart(1, 3, 3, 2));

// tinh toan
function totalMoney(carts) {
  let total = 0;
  for (let i = 0; i < carts.length; i++) {
    const infoProduct = products.find(
      (product) => product.productId == carts[i].productId
    );
    total += carts[i].quantity * infoProduct.price;
  }
  return total;
}

console.log(totalMoney(cartUser1));
console.log(totalMoney(cartUser2));
console.log(totalMoney(cartUser3));
