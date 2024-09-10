class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  getTotal() {
    return this.items.reduce((acc, item) => acc + item.getTotalPrice(), 0);
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    this.items = this.items.filter((i) => i !== item);
  }

  displayItems() {
    console.log("Shopping Cart Items:");
    this.items.forEach((item) =>
      console.log(
        `Product: ${item.product.name}, Quantity: ${
          item.quantity
        }, Total: ${item.getTotalPrice()}`
      )
    );
  }
}

// Create products
const product1 = new Product(1, "Product A", 10.99);
const product2 = new Product(2, "Product B", 5.99);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(new ShoppingCartItem(product1, 2));
cart.addItem(new ShoppingCartItem(product2, 3));

// Display the cart
cart.displayItems();
console.log(`Total: ${cart.getTotal()}`);

// Remove an item from the cart
cart.removeItem(cart.items[0]);

// Display the cart again
cart.displayItems();
console.log(`Total: ${cart.getTotal()}`);
