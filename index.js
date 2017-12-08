#!/usr/bin/env node
'use strict'

const program = require('commander')
const chalk = require('chalk')
const pkg = require('./package.json')

program
  .version(pkg.version)
  .command('test')
  .description('scaffold up')
  .action(() => {
    console.log(chalk.blue('whats good'))
    require('./scaffold')
  })

program.parse(process.argv)
