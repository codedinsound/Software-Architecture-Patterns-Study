// Low Level Module
class OracleDatabase implements Database {
  // @Override
  connect(): void {
    console.log('Connecting to an Oracle Database');
  }

  // @Override
  disconnect(): void {
    console.log('Disconnecting the Oracle Database');
  }
}

export default OracleDatabase;
