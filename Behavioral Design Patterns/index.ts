import {
  Light,
  Switcher,
  TurnOffCommand,
  TurnOnCommand,
} from '../Behavioral Design Patterns/Command Pattern';
import {
  IteratorPattern,
  NameRepository,
} from '../Behavioral Design Patterns/Iterator Pattern';
import NullTester from '../Behavioral Design Patterns/NULL Object Pattern';
import {
  BuyStockListener,
  SellStockListener,
  StockExchange,
  WeatherObserver,
  WeatherStation,
} from '../Behavioral Design Patterns/Observer Pattern';
import {
  Addition,
  Division,
  Multiplication,
  OperationsManager,
  Subtraction,
} from '../Behavioral Design Patterns/Strategy Pattern';
import TestVistorPattern from '../Behavioral Design Patterns/Visitor Pattern';

class BehavioralDesignTesting {
  // --------------------------------------------------------------------------------
  // MARK: Strategy Pattern
  // --------------------------------------------------------------------------------
  static testStrategyPattern(): void {
    const manager: OperationsManager = new OperationsManager();
    manager.setStrategy(new Addition());
    manager.setStrategy(new Multiplication());
    manager.setStrategy(new Subtraction());
    manager.setStrategy(new Division());
    manager.execute(10, 5);
  }
  // --------------------------------------------------------------------------------
  // MARK: Observer Pattern
  // --------------------------------------------------------------------------------
  static testObserverPattern(): void {
    const station = new WeatherStation();
    const observer = new WeatherObserver(station);

    station.setHumidity(100);
    station.setPressure(200);
    station.setTemperature(300);

    // Test the Stock Market
    const stockExchange = new StockExchange();
    // stockExchange.addObserver(new BuyStockListener());
    // stockExchange.addObserver(new SellStockListener());
    // stockExchange.start();
  }
  // --------------------------------------------------------------------------------
  // MARK: Command Pattern
  // --------------------------------------------------------------------------------
  static testCommandPattern(): void {
    const switcher = new Switcher();

    const light = new Light();
    const onCommand = new TurnOnCommand(light);
    const offCommand = new TurnOffCommand(light);

    switcher.addCommand(onCommand);
    switcher.addCommand(offCommand);

    switcher.executeCommands();
  }
  // --------------------------------------------------------------------------------
  // MARK: Iterator Pattern
  // --------------------------------------------------------------------------------
  static testIteratorPattern(): void {
    let repo = new NameRepository();

    for (let it: IteratorPattern = repo.getIterator(); it.hasNext(); ) {
      console.log(it.next());
    }
  }

  // --------------------------------------------------------------------------------
  // MARK: NULL Object Pattern
  // --------------------------------------------------------------------------------
  static testNullPattern(): void {
    NullTester.testNullPattern();
  }

  // --------------------------------------------------------------------------------
  // MARK: Visitor Patthern
  // --------------------------------------------------------------------------------
  static testVisitorPattern(): void {
    TestVistorPattern.test();
  }
}

export default BehavioralDesignTesting;
