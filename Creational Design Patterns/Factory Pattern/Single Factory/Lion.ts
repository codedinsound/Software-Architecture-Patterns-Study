import Animal from '../../Creational Design Patterns/Factory Pattern/Animal';

class Lion implements Animal {
  public eat(): void {
    console.log('Lion is eating...');
  }
}

export default Lion;
