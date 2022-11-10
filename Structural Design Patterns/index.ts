import { TestAdapterPattern } from '../Structural Design Patterns/Adapter Pattern';
import { TestDecoratorPattern } from '../Structural Design Patterns/Decorator Pattern';
import { TestFacadePattern } from '../Structural Design Patterns/Facade Pattern';
import { TestFlyweightPattern } from '../Structural Design Patterns/Flyweight Pattern';

class StructuralDesignTesting {
  // --------------------------------------------------------------------------------
  // MARK: Decorator Pattern
  // --------------------------------------------------------------------------------
  static testDecoratorPattern() {
    TestDecoratorPattern.test();
  }
  // --------------------------------------------------------------------------------
  // MARK: Facade Pattern
  // --------------------------------------------------------------------------------
  static testFacadePattern() {
    TestFacadePattern.test();
  }
  // --------------------------------------------------------------------------------
  // MARK: Flyweight Pattern
  // --------------------------------------------------------------------------------
  static testFlyweightPattern() {
    TestFlyweightPattern.test();
  }

  // --------------------------------------------------------------------------------
  // MARK: Adapter Pattern
  // --------------------------------------------------------------------------------
  static testAdapterPattern() {
    TestAdapterPattern.test();
  }
}

export default StructuralDesignTesting;
