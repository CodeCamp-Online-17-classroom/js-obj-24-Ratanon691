class Sale {
  constructor(name) {
    this.name = name
  }
  calcPrice() {   
    return 0
  }
}

class Beverage extends Sale {
  constructor(name, amount, price, discount) {
    super(name)
    this.amount = amount
    this.price = price
    this.discount = discount
  }
  calcPrice() {
    const totalPrice = this.amount * this.price
    const discountedPrice = totalPrice * (1 - this.discount)
    return discountedPrice
  }
}

const beverage = new Beverage('Pepsi', 3, 19, 0.1)

const finalPrice = beverage.calcPrice();
console.log(`The discounted price for ${beverage.amount} ${beverage.name}(s) after ${beverage.discount * 100}% discount is: ${finalPrice}`);

