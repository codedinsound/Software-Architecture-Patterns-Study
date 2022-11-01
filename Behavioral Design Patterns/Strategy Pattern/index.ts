// Strategy Pattern
// -----------------------------------------------
// - Strategy Pattern (or policy pattern) enable selecting an algorithm at run-time
// - define a family of algorithms, put each of them into seperate class, and make their objects
//   interchangable

// > Encapsulation is an important concept in OOP
//        - Consider the classes and methods that varies and encapsulate it

//   later we can change or update parts of the application that change frequently without
//   affecting the static parts.

/**
 *     PROGRAM TO A SUPERTYPE
 *
 *                CLASS  <------------------------> INTERFACE
 *
 *      -> the actual run-time object should not be locked into the code.
 *
 *      -> the type of a variable should be abstract (interface or abstract class) -
 *         can be of any concrete implementation
 *
 *
 *      -> The dependency inversion principle handles this problem
 *      -> we should seperate behaviours from implementations
 *      -> it is easier to reuse software components like these
 *      -> we can add new behaviour without modifying any of the existing classes or modules.
 *
 * FAVOR COMPOSITION OVER INHERITANCE
 *
 *      INHERITANCE <------------------------------> COMPOSITION
 *
 *   is a relationship ever class                 Has a relationship every class can have
 *   can extend a single class in java            several instance encapsulated variables
 *
 *                                                + gives more flexibility
 *
 *                                                YOU CAN CHANGE BEHAVIOUR AT RUN-TIME
 *
 *  Open / Closed Principle: ,,Software entities should be open for extension, but closed for      modification"
 */

// abstraction
interface Strategy {
  execute(num1: number, num2: number): void;
}

class Addition implements Strategy {
  execute(num1: number, num2: number): void {
    console.log(num1 + num2);
  }
}

class Multiplication implements Strategy {
  execute(num1: number, num2: number): void {
    console.log(num1 * num2);
  }
}

class Subtraction implements Strategy {
  execute(num1: number, num2: number): void {
    console.log(num1 - num2);
  }
}

class Division implements Strategy {
  execute(num1: number, num2: number): void {
    console.log(num1 / num2);
  }
}

// abstract layer in between the high level modules and the low level modules
class OperationsManager {
  // we have to use composition
  // BECAUSE THE BEHAVIOUR CAN BE CHANGED AT RUN-TIME
  private strategy: Strategy;

  public setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  public execute(num1: number, num2: number): void {
    this.strategy.execute(num1, num2);
  }
}

export {
  Strategy,
  Addition,
  Multiplication,
  Division,
  Subtraction,
  OperationsManager,
};
