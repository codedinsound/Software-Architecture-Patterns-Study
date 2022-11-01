import Animal from '../../Creational Design Patterns/Factory Pattern/Animal';

class Tiger implements Animal {
  eat(): void {
    console.log('Tiger is eating...');
  }
}

export default Tiger;
