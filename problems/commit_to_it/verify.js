#!/usr/bin/env node

var spawn = require('child_process').spawn
var concat = require('concat-stream')

var show = spawn('git', ['show'])

show.stdout.pipe(concat(onShow))

// check that they've commited changes

function onShow(output) {
  var show = output.toString().trim()
  if (show.match("new file mode") && show.match("commit"))
  console.log("Changes have been committed!")
  else console.log("Seems no changes \nhave been committed.")
}
