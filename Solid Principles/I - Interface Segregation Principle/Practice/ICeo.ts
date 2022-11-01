import IEmployee from '../../Interface Segregation Principle/Practice/IEmployee';

interface ICEO extends IEmployee {
  makeDecisions(): void;
  addStocks(): void;
  addBonus(): void;
}
