/*
Visitor Pattern 
-------------------------
- we would like to do some specific operation (saving the data) on different entities...
                          Photoshop or Illustrator 

                          we may have several geometric shapes on the canvas 

                          what if we want to save all of these geometric shapes into a file?

- we have to consider the shapes one by one and save them accordingly 

        BUT IT IS NOT A FLEXIBLE SOLUTION 

- violates the single responsibility principle. 
- these shapes have nothing to do with how to save them. 
- it may violates the open / closed principle as well 
- what if we want to change the way we save the shapes? We have to change the code we have already implemented. 

"The visitor design pattern is a way of seperating an algorithm from an object structure on which it operates"

---------------------------
- so we have a visitor class that will do the save operations 
- but again there is a problem: we need different save operations for different shapes. 

- ExportVistor 
      saveRectangle(Rectangle object);                    how to call these differnet methods? 
      saveCircle(Circle object); 
      saveTriangle(Triangle object);  -------------------> THE DOUBLE DISPATCH TECHNIQUE CAN SOLVE THIS PROBLEM 

                                                - we delegate the problem to the object because the object 
                                                  knows exactly how to save the shape 
                                                  (ok we have to change the class but just once!!!!);
===========================================================================================================      
*/

interface ShoppingItem {
  accept(visitor: ShoppingCartVisitor): number;
}

interface ShoppingCartVisitor {
  visit(table: Table): number;
  visit(chair: Chair): number;
}

class ShoppingCart implements ShoppingCartVisitor {
  visit(table: Table): number;
  visit(chair: Chair): number;
  visit(type: ShoppingItem): number {
    if (type instanceof Table) return type.getPrice;
    if (type instanceof Chair) {
      return (type as Chair).getPrice;
    }

    return -1;
  }
}

class Table implements ShoppingItem {
  private type: string;
  private price: number;

  constructor(type: string, price: number) {
    this.type = type;
    this.price = price;
  }

  get getType(): string {
    return this.type;
  }

  set setType(type: string) {
    this.type = type;
  }

  get getPrice(): number {
    return this.price;
  }

  set setPrice(price: number) {
    this.price = price;
  }

  accept(visitor: ShoppingCartVisitor): number {
    return visitor.visit(this);
  }
}

class Chair implements ShoppingItem {
  private type: string;
  private price: number;

  constructor(type: string, price: number) {
    this.type = type;
    this.price = price;
  }

  get getType(): string {
    return this.type;
  }

  set setType(type: string) {
    this.type = type;
  }

  get getPrice(): number {
    return this.price;
  }

  set setPrice(price: number) {
    this.price = price;
  }
  accept(visitor: ShoppingCartVisitor): number {
    return visitor.visit(this);
  }
}

class TestVistorPattern {
  static test() {
    console.log('visitor pattern');
    const items = [];

    items.push(new Table('desk', 20));
    items.push(new Chair('chair1', 30));
    items.push(new Chair('chair2', 25));
    items.push(new Chair('chair3', 105));

    let sum = 0;
    const shoppingCart: ShoppingCartVisitor = new ShoppingCart();

    items.forEach((shoppingItem) => {
      sum = sum + shoppingItem.accept(shoppingCart);
    });

    console.log(sum);
  }
}

export default TestVistorPattern;
