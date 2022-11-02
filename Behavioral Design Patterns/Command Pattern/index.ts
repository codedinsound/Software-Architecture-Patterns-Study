/**
 *  THE COMMAND PATTERN
 *
 *  - what is the motivation behind command pattern?
 *  - the aim is to achieve seperation of concerns.
 *
 *
 *
 *   APPLICATION <----------C------------- Save Button
 *                          o
 *   business logic <---------m------------- Update Button
 *                  <---------m------------- Delete Button
 *                            a
 *                            n
 *                            d
 *   - bacause of the abstract layer we can achieve loosely coupled design
 *   - the user interface components know nothing about the underlaying
 *   - and we can change the sender's behaviour at run-time.
 *
 *   ADVANTAGES OF COMMAND PATTERN
 *  - We do not have to execute the commands immediately - we can store these commands in a data structure
 *  - we can implement undo / redo operations
 *
 *   COMMAND - it knows about receiver and invokes a method of the receiver. The values for paramenters of the
 *             receiver method are stored in the command
 *
 *   RECEIVER - it does the work iteself
 *
 *   INVOKER - knows how to execute a command and optionally does bookeeping about the command execution
 *             The invoker does not know anything about a concrete command it knows only about command interface.
 *
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

  addCommand(command: Command): void {
    this.commands.set(command, command);
  }

  public executeCommands(): void {
    for (const command of this.commands.values()) {
      command.execute();
    }
  }
}

export { Command, Light, TurnOffCommand, TurnOnCommand, Switcher };
