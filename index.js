#!/usr/bin/env node
'use strict'

const program = require('commander')
const chalk = require('chalk')
const pkg = require('./package.json')

const scaffold = require('./scaffold')

program
  .version(pkg.version)
  .command('')
  .description('scaffold up')
  .action(() => {
    console.log(chalk.blue('whats good'))
    scaffold()
  })

program.parse(process.argv)
