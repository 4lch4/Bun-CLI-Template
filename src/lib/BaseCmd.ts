import { Command, Option, program } from 'commander'

/** A class to be extended by all commands. */
export abstract class BaseCmd {
  abstract build(): Promise<Command>

  public static addVerboseOption(command: Command = program) {
    return command.addOption(new Option('-v, --verbose', 'Print verbose output.'))
  }

  protected initCommand(name: string) {
    return BaseCmd.addVerboseOption(new Command(name))
  }
}
