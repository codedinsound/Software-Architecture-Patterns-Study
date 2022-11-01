class MySQLDatabase implements Database {
  connect(): void {
    console.log('Connecting to a MySQL database...');
  }

  disconnect(): void {
    console.log('Disconnecting the MySQL database...');
  }
}

export default MySQLDatabase;
