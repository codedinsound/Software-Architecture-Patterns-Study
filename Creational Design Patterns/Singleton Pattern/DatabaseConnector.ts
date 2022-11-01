class DatabaseConnector {
  // MARK: eager version
  // static INSTANCE: DatabaseConnector = new DatabaseConnector();

  // MARK: more private version
  // private static INSTANCE: DatabaseConnector = new DatabaseConnector();

  // MARK: lazy version
  private static INSTANCE: DatabaseConnector;

  // "Reflection Attack"
  private constructor() {}

  // public static getInstance(): DatabaseConnector {
  //   return this.INSTANCE;
  // }

  // MARK: Lazy Version Function Call
  public static getInstance(): DatabaseConnector {
    // we just instantiate the class if necessary
    if (this.INSTANCE === undefined || this.INSTANCE === null) {
      this.INSTANCE = new DatabaseConnector();

      // In Java if multiple threads want to access this function
      // without creating a new instance and it being the same
      // instance

      // This block can be entered by a single thread
      // PROBLEM: it is too slow (100x); How to use singleton pattern in Multithreaded enviroments.
      // synchronized(DatabaseConnector.class) {
      //     this.INSTANCE = new DatabaseConnector;
      // }
    }

    return this.INSTANCE;
  }

  connect(): void {
    console.log('SINGLETON:', 'Connecting to the database...');
  }

  disconnect() {
    console.log('SINGLETON', 'Disconnecting to the database...');
  }
}

export default DatabaseConnector;
