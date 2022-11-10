/*
ADAPTER PATTERN 
-------------------------
- what is the motivation behind adapter pattern? 
- there are several incomptible classes and interfaces in software engineering 
- because of legacy code and frequently chaning API's 

"The adapter pattern allows objects with imcompatible interfaces to collaborate and work together. It is often used
to make existing classes work with others without modifying their source code"


              Application <-----------------------------> API or Framework Using XML
                |
                |
                |
                |
                |
            Legacy Code 
            with CSV ------------------------------   there are several applications out there relying heavily on legacy
                                                      code 
                                                      there may be several features that can not be used in the exact 
                                                      way.

                                                      we need adapter pattern to make these compatible. 
    
*/

interface Vehicle {
  accelerate(): void;
}

class Car implements Vehicle {
  accelerate(): void {
    console.log('Car is accelerating....');
  }
}

class Bus implements Vehicle {
  accelerate(): void {
    console.log('Bus is accelerating....');
  }
}

// API or incompatible
class Bicycle {
  go(): void {
    console.log('Using bicycle....');
  }
}

class BicycleAdapter implements Vehicle {
  private bicycle: Bicycle;

  constructor(bicycle: Bicycle) {
    this.bicycle = bicycle;
  }

  accelerate(): void {
    this.bicycle.go();
  }
}

class TestAdapterPattern {
  static test() {
    const bus: Vehicle = new Bus();
    const car: Vehicle = new Car();
    const bicycle: Vehicle = new BicycleAdapter(new Bicycle());

    bus.accelerate();
    car.accelerate();
    bicycle.accelerate();
  }
}

export { TestAdapterPattern };
