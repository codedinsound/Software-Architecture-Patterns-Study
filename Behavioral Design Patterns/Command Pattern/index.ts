/**
 *  THE COMMAND PATTERN
 *
 *  - what is the motivation behind command pattern?
 *  - the aim is to achieve seperation of concerns.
 *
 *
 *
 *     APPLICATION <----------C------------- Save Button
 *                            o
 *   business logic <---------m------------- Update Button
 *                  <---------m------------- Delete Button
 *                            a
 *                            n
 *                            d
 *   - bacause of the abstract layer we can achieve loosely coupled design
 *   - the user interface components know nothing about the underlaying
 *   - and we can change the sender's behaviour at run-time.
 *
 *   - change
 */

interface Command {
  execute(): void;
}

// Receiver
class Light {
  public turnOn() {
    console.log('Lights On.......');
  }

  public turnOff() {
    console.log('Lights Off......');
  }
}

class TurnOnCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.turnOn();
  }
}

class TurnOffCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.turnOff();
  }
}

class Switcher {
  public commands: Map<Command, Command>;

  constructor() {
    this.commands = new Map<Command, Command>();
  }

  public executeCommands(): void {
    for (const command in this.commands.values()) {
      command.execute();
    }
  }
}
