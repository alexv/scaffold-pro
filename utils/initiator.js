const fs = require('fs')
const path = require('path')
const generator = require('../utils/generator.js')

const makeFolder = newComponentPath => {
  return new Promise((resolve, reject) => {
    fs.mkdir(newComponentPath, resolve)
  })
}

module.exports = componentPath => {
  return new Promise((resolve, reject) => {
    makeFolder(componentPath)
      .then(() =>
        generator(
          { name: 'Example', state: true, redux: true, tests: true },
          componentPath
        )
      )
      .then(() => {
        return new Promise((resolve, reject) => {
          let err = false
          let read = fs.createReadStream(
            path.resolve(__dirname, '../templates/allComponents.js')
          )
          console.log(componentPath)
          let write = fs.createWriteStream(
            path.resolve(componentPath, 'index.js')
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
              write.write(
                chunk
                  .toString()
              )
            })
          })

          read.on('end', () => {
            if (!err) {
              resolve()
            }
          })
        })
      })
      .catch(console.error)
  })
}
