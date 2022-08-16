const { createTSFN } = require('bindings')('addon');

const test = async (callback) => {
  const result = await createTSFN(callback)
  console.log('Result:', result)
}

test((...args) => {
  console.log(...args)
})

module.exports = test