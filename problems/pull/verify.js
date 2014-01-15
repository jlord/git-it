#!/usr/bin/env node

var spawn = require('child_process').spawn
var concat = require('concat-stream')
var pull = spawn('git', ['fetch', '--dry-run'])

// do a fetch dry run to see if there is anything 
// to pull; if there is they haven't pulled yet

pull.stdout.pipe(concat(onPull))

function onPull(output) {
  var status = output.toString().trim()
  if (!status)
  console.log(true)
  else console.log("There are changes to pull in")
}