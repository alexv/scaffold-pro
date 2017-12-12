const fs = require('fs')
const generator = require('../utils/generator.js')

const makeFolder = newComponentPath => {
  console.log('HEY', newComponentPath)
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
      .catch(console.error)
  })
}
