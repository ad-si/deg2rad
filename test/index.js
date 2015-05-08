var assert = require('assert'),
    deg2rad = require('../source/index.js')


assert.equal(
    deg2rad(0),
    0
)

assert.equal(
    deg2rad(90),
    Math.PI/2
)

assert.equal(
    deg2rad(180),
    Math.PI
)

assert.equal(
    deg2rad(360),
    2 * Math.PI
)
