#!/usr/bin/env node

var spawn = require('child_process').spawn
var concat = require('concat-stream')

var show = spawn('git', ['show'])

show.stdout.pipe(concat(onShow))

function onShow(output) {
  var show = output.toString().trim()
  if (show.match("new file mode") && show.match("commit"))
  console.log(true)
  else console.log(false)
}
