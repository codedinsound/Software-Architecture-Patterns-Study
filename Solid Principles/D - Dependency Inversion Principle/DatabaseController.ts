import MySQLDatabase from '../Dependency Inversion Principle/MySQLDatabase';

// The High Level Module
class DatabaseController {
  // we program to an interface - so we can achieve loosely coupled architecture.
  private database: Database;

  constructor(database: Database) {
    // Tight Binding when we program to a class (instead of an interface).
    // this.database = new MySQLDatabase();
    // this.database.connect();
    // this.database.disconnect();

    this.database = database;
  }

  public connect(): void {
    this.database.connect();
  }

  public disconnect(): void {
    this.database.disconnect();
  }
}

export default DatabaseController;
