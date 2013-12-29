#!/usr/bin/env node

var spawn = require('child_process').spawn
var concat = require('concat-stream')

var status = spawn('git', ['status'])

status.stdout.pipe(concat(onStatus))

function onStatus(output) {
  var status = output.toString().trim()
  if (status != "fatal: Not a git repository (or any of the parent directories): .git")
  console.log(true)
}