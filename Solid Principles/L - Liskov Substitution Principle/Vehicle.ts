class Vehicle {
  protected type: string;
  protected age: number;

  constructor(type: string, age: number) {
    this.type = type;
    this.age = age;
  }

  protected speedUp(): void {
    console.log('Vehicle is speeding up...');
  }

  protected slowDown(): void {
    console.log('Vehicle is slowing down...');
  }

  protected fuel(): void {
    console.log('Vehicle fuel method....');
  }
}

export default Vehicle;
