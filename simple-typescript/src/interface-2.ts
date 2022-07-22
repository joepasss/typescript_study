// Implementing Interfaces

export interface IOrder {
  calculateTotal(): number;
}

export function calculateTotalAmount(order: IOrder) {
  let total = order.calculateTotal();
  const discount = total * 0.1;
  const tax = total * 0.2;

  total -= discount;
  total += tax;

  return total;
}

export class Order implements IOrder {
  calculateTotal(): number {
    return 100;
  }
}

export class ShoppingCart implements IOrder {
  calculateTotal(): number {
    return 100;
  }
}
