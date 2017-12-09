#!/usr/bin/env node
'use strict'

const program = require('commander')
const pkg = require('./package.json')

program
  .version(pkg.version)
  .command('build')
  .description('make components')
  .action(() => {
    require('./scaffold')
  })

program
  .version(pkg.version)
  .command('init')
  .description('initialize scaffold project')
  .action(() => {
    // create components directory
    // add components.js to components directory
    // maybe create example component/container
    console.log('legoo')
  })

program.parse(process.argv)
