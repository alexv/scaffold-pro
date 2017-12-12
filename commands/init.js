const path = require('path')
const chalk = require('chalk')

const initiator = require('../utils/initiator.js')

const componentPath = path.resolve(process.cwd(), './src/components/')

console.log(chalk.gray('Project will be initialized at:'))
console.log(chalk.gray(componentPath))
console.log('')

initiator(componentPath)
  .then(args => {
    console.log(
      chalk.green(
        chalk.bold('Finished!'),
        'Project initialized successfully'
      )
    )
  })
  .catch(err => {
    console.log(chalk.red('Error'), err)
  })
