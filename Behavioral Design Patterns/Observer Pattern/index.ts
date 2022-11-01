/**
 *  THE OBSERVER PATTERN
 *
 *  - the observer pattern defines a one-to-many dependancy between given objects or entities.
 *
 *  - so that when one object changes state all of it's dependents are notified and updated
 *    automatically.
 *
 *  - the subject is the object that is being monitored.
 *
 *  - observers (or listeners) are depending on the subject.
 *
 *                                          - Listener #1 - the objects that are watching and
 *                                                          monitoring the state changes are
 *                                                          observers or listeners.
 *      SUBJECT --------------------------  - Listener #2
 *                                                  ......
 *      which is being observed                     ......
 *                                          - Listener #N
 *
 *  - this is how we can achieve loosely coupled software systems.
 *  - when two objects are loosely coupled they can interact but they have little knowledge
 *    of each other
 *  - the only thing the subject knows about an observer is that it implements a certain
 *    interface
 *  - we can add observers whenever we want - just have to implement the Observer interface.
 *  ==============================================================
 *
 *  - do not have to modify the subject to add new type of observers
 *  - we can independently reuse objects or observers
 *  - we can change the subject or observer independently
 *  - so loosely coupled design is very good - we can build flexible systems that can handle change
 *  - because the interdependency between objects is minimal.
 *
 *     WHAT IS A LOOSELY COUPLED SOFTWARE SYSTEM?
 *
 *    - A loosely coupled system is when the software components has very little or no knowledge of the
 *      definitions of other seperate components.
 */

import Utils from '../../Utils';

interface Observer {
  update(pressure: number, temperature: number, humidity: number): void;
}

interface Subject {
  addObserver(o: Observer): void;
  removeObserver(o: Observer): void;
  notifyAllObservers();
}

class WeatherStation implements Subject {
  private pressure: number;
  private temperature: number;
  private humidity: number;
  private observerList: Map<Observer, Observer>;

  constructor() {
    this.observerList = new Map<Observer, Observer>();
  }

  addObserver(o: Observer): void {
    this.observerList.set(o, o);
  }

  removeObserver(o: Observer): void {
    this.observerList.delete(o);
  }

  notifyAllObservers() {
    for (let o of this.observerList.values()) {
      o.update(this.pressure, this.temperature, this.humidity);
    }
  }

  setPressure(pressure: number): void {
    this.pressure = pressure;
    this.notifyAllObservers();
  }

  setTemperature(temperature: number): void {
    this.temperature = temperature;
    this.notifyAllObservers();
  }

  setHumidity(humidity: number): void {
    this.humidity = humidity;
    this.notifyAllObservers();
  }
}

class WeatherObserver implements Observer {
  private pressure: number;
  private temperature: number;
  private humidity: number;
  private subject: Subject;

  constructor(subject: Subject) {
    this.subject = subject;
    this.subject.addObserver(this);
  }

  update(pressure: number, temperature: number, humidity: number): void {
    this.pressure = pressure;
    this.temperature = temperature;
    this.humidity = humidity;

    this.showData();
  }

  showData(): void {
    console.log(
      `Pressure: ${this.pressure} Temperature: ${this.temperature} Humidity: ${this.humidity}`
    );
  }
}

// ==========================================================================================
// EXAMPLE 2: THE BASICS OF ALGORITHMIC TRADING
// ==========================================================================================
/**
 * ALGORITHMIC TRADING
 *
 * we simulate the S(t) stock price and we use observer pattern to buy or sell stocks.
 *
 * RSI (Relative Strength Indicator) is a frequently used value [0, 100] in technical analysis.
 *
 * we can decide whether the stock is overbought or oversold.
 *
 *  */

interface StockObserver {
  update(price: number): void;
}

interface StockSubject {
  addObserver(o: StockObserver): void;
  notifityAllObservers(): void;
}

class StockExchange implements StockSubject {
  // S(0) = $100 - and we do a random walk
  private price: number = 100;
  private observers: Map<StockObserver, StockObserver>;

  // Use observer pattern
  // monitor the stock prices at time t S(t)
  // < 95 - buy the given stock
  // > 105 - sell the given stock

  constructor() {
    this.observers = new Map<StockObserver, StockObserver>();
  }

  public async start() {
    while (true) {
      await Utils.pause(500);

      this.price = this.price + 2 * Math.random() - 1;
      this.notifityAllObservers();
      console.log(this.price);
    }
  }

  addObserver(o: StockObserver): void {
    this.observers.set(o, o);
  }
  notifityAllObservers(): void {
    for (let observer of this.observers.values()) {
      observer.update(this.price);
    }
  }
}

class BuyStockListener implements StockObserver {
  update(price: number): void {
    if (price < 95) console.log('Buying Stock because the S(t) price is low..');
  }
}

class SellStockListener implements StockObserver {
  update(price: number): void {
    if (price > 105)
      console.log('Selling Stock because the S(t) price is high..');
  }
}

export {
  Observer,
  Subject,
  WeatherStation,
  WeatherObserver,
  StockExchange,
  BuyStockListener,
  SellStockListener,
};
