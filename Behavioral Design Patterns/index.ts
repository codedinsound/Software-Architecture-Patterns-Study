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
}

export default BehavioralDesignTesting;
