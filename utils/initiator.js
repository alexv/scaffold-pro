const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const generator = require('../utils/generator.js')

const makeFolder = newComponentPath => {
  return new Promise((resolve, reject) => {
    fs.mkdir(newComponentPath, resolve)
  })
}

module.exports = componentPath => {
  return new Promise((resolve, reject) => {
    console.log(
      chalk.green('Creating ') +
        chalk.yellow.bold('Components') +
        chalk.green(' folder')
    )
    console.log('')
    makeFolder(componentPath)
      .then(() => {
        console.log(
          chalk.green('Creating ') +
            chalk.yellow.bold('components.js') +
            chalk.green(' at ') +
            chalk.yellow(componentPath)
        )
        return new Promise((resolve, reject) => {
          let err = false
          let read = fs.createReadStream(
            path.resolve(__dirname, '../templates/allComponents.js')
          )
          let write = fs.createWriteStream(
            path.resolve(componentPath, 'components.js')
          )
          let rejectCleanup = e => {
            err = true
            read.destroy()
            write.end()
            reject(e)
          }
          read.on('error', rejectCleanup)
          write.on('error', rejectCleanup)

          write.on('open', () => {
            read.on('data', chunk => {
              write.write(chunk.toString())
            })
          })

          read.on('end', () => {
            if (!err) {
              resolve()
            }
          })
        })
      })
      .then(() =>
        generator(
          { name: 'Example', state: true, redux: true, tests: true },
          componentPath
        )
      )
      .catch(console.error)
  })
}
