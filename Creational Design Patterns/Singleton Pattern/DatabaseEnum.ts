// Enums are constant time complexity at run time. Guarenteed Thread Safe VS synchronize which is slow and threads fighting each other for system resources.

// Only works in threaded enviroments such as in java
// public enum DatabaseEnum {
// // aquiring the instance is thread safe.
//   INSTANCE,
//   public void connect() {
//      System.out.println("Connecting to the database");
// }
//   public void disconnect() {
//      System.out.println("disconnecting to the database");
// }
// }

// int main() { DatabaseEnum.INSTANCE.connect() }
