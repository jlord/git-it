#!/usr/bin/env node

var child = require('child_process')
var spawn = child.spawn
var concat = require('concat-stream')

var ref = spawn('git', ['reflog', 'show', 'origin/master'])

ref.stdout.pipe(concat(onRef))

// check that they've made a push

function onRef(output) {
  var ref = output.toString().trim()
  if (ref.match("update by push")) console.log(true)
  else console.log(false)
}

// verify they set up git config

child.exec('git config user.email', function(err, stdout, stderr) {
  var email = stdout.trim()
  child.exec('git config user.username', function(err, stdout, stderr) {
    var user = stdout.trim()
    if (user === "") console.error(false)
    else console.log(true)
    if (email === "") console.error(false)
    else console.log(true)
  })
})
