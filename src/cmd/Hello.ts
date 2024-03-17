import { BaseCmd } from '~/lib'

export class HelloCommand {
  private async action() {
    console.log('Hello, world!')
  }

  public async build() {
    const cmd = BaseCmd.addVerboseOption()

    cmd.description('Prints a greeting.')
    cmd.action(this.action)

    return cmd
  }
}
