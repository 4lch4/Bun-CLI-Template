#!/usr/bin/env bun

import { program } from 'commander'
import pkg from '../package.json'
import { commands } from './cmd'
import { BaseCmd } from './lib'

async function setup() {
  try {
    const CLI = BaseCmd.addVerboseOption(program)
      .name(pkg.name)
      .description(pkg.description)
      .version(pkg.version)

    for (const cmd of commands) CLI.addCommand(await cmd.build())

    return CLI.parse(process.argv)
  } catch (error) {
    throw error
  }
}

setup().catch(console.error)
