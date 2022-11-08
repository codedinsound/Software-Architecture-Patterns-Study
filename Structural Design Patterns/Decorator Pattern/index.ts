/*
DECORATOR PATTERN 
-------------------------
  - we could like to add one or more behaviours dynamically? 

                        / Milk & Sugar 
                       /
            / Expresso 
          /            \   
                        Milk 
      Coffee             /   
          \            /
            \ Americano - Sugar 

  - we can use inheritance to change the behaviour of a given compnent 
  - the main problem with inheritance is that it is static 

    "Inhertitance is unfortunetly static!!!"

  - we can not change the behaviours at run-time 
  - the second disadvantage is that in several programming languages every class may have just single parent class. 
  - this is why we should favor composition over inhertance. 

  Advantages of Decorator Pattern 
  -----------------------------
  - we can attach additional responsbilities to an object dynamically 
  - decorators provide a flexible alternative to subclassing and for extending functionality 
    
*/

interface Beverage {
  getCost(): number;
  getDescription(): string;
}

class PlainBeverage implements Beverage {
  getCost(): number {
    return 5;
  }
  getDescription(): string {
    return '';
  }
}

// Decorator
abstract class BeverageDecorator implements Beverage {
  protected beverage: Beverage;

  constructor(beverage: Beverage) {
    this.beverage = beverage;
  }

  getCost(): number {
    return this.beverage.getCost();
  }
  getDescription(): string {
    return this.beverage.getDescription();
  }
}

class Milk extends BeverageDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }

  public getCost(): number {
    return this.beverage.getCost() + 3;
  }

  public getDescription(): string {
    return this.beverage.getDescription() + 'milk ';
  }
}

class Sugar extends BeverageDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }

  getCost(): number {
    return this.beverage.getCost() + 1;
  }

  getDescription(): string {
    return this.beverage.getDescription() + 'sugar ';
  }
}

class Cappuccino extends BeverageDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }

  getCost(): number {
    return this.beverage.getCost() + 6;
  }

  getDescription(): string {
    return this.beverage.getDescription() + 'cappucino ';
  }
}

class TestDecoratorPattern {
  static test() {
    console.log('Test Decorator Pattern');

    const beverage = new Cappuccino(
      new Sugar(new Sugar(new Milk(new PlainBeverage())))
    );
    console.log(beverage.getCost());
    console.log(beverage.getDescription());
  }
}

export { TestDecoratorPattern, Beverage, PlainBeverage };
