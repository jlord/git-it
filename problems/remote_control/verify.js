#!/usr/bin/env node

var spawn = require('child_process').spawn
var concat = require('concat-stream')

var ref = spawn('git', ['reflog', 'show', 'origin/master'])

ref.stdout.pipe(concat(onRef))

// check that they've made a push

function onRef(output) {
  var ref = output.toString().trim()
  if (ref.match("update by push"))
  console.log(true)
  else console.log(false)
}