import IEmployee from '../../Interface Segregation Principle/Practice/IEmployee';

interface IManager extends IEmployee {
  hire(): void;
  train(): void;
  addBonus(): void;
}
