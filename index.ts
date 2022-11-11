import './style.css';

import CreationalDesignTesting from './CreationalDesignTesting';
import BehavioralDesignTesting from './Behavioral Design Patterns';
import StructuralDesignTesting from './Structural Design Patterns';
import { TestServiceLocator } from './Service Locator Pattern';
// import PatternsTester from './PatternsTester';

function main() {
  // -------------------------------------------------------------------------------------
  // MARK: Creational Design Patterns
  // -------------------------------------------------------------------------------------
  // PatternsTester.singleTontTest();
  // PatternsTester.openClosedPrincipleTesting();
  // PatternsTester.liskovTesting();
  // PatternsTester.interfaceSegregationTest();
  // PatternsTester.dependencyInversionTest();
  // MARK: Creational Design Patterns
  // CreationalDesignTesting.singletonTesting();
  // CreationalDesignTesting.factoryTesting();
  // CreationalDesignTesting.builderPatternTesting();
  // CreationalDesignTesting.prototypePatternTesting();
  // -------------------------------------------------------------------------------------
  // MARK: Behavioral Design Patterns
  // -------------------------------------------------------------------------------------
  // BehavioralDesignTesting.testStrategyPattern();
  // BehavioralDesignTesting.testObserverPattern();
  // BehavioralDesignTesting.testCommandPattern();
  // BehavioralDesignTesting.testIteratorPattern();
  // BehavioralDesignTesting.testNullPattern();
  // BehavioralDesignTesting.testVisitorPattern();
  // -------------------------------------------------------------------------------------
  // MARK: Structural Design Patterns
  // -------------------------------------------------------------------------------------
  // StructuralDesignTesting.testDecoratorPattern();
  // StructuralDesignTesting.testFacadePattern();
  // StructuralDesignTesting.testFlyweightPattern();
  // StructuralDesignTesting.testAdapterPattern();
  // -------------------------------------------------------------------------------------
  // MARK: Service Locator Pattern
  // -------------------------------------------------------------------------------------
  TestServiceLocator.test();
}

main();
