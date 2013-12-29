#!/usr/bin/env node

// should have them type in the path of their
// repo OR have them create a new folder from 
// the start.

var spawn = require('child_process').spawn
var concat = require('concat-stream')

var show = spawn('git', ['show'])

show.stdout.pipe(concat(onShow))

function onShow(output) {
  var show = output.toString().trim()
  if (show.match("new file mode"))
  console.log(true)
  else console.log(false)
}
