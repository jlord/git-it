#!/usr/bin/env node

var child = require('child_process')
var spawn = child.spawn
var concat = require('concat-stream')

var ref = spawn('git', ['reflog', 'show', 'origin/master'])

ref.stdout.pipe(concat(onRef))

// check that they've made a push

function onRef(output) {
  var ref = output.toString().trim()
  if (ref.match("update by push")) console.log("Bingo! Detected a push.")
  else console.log("No evidence of a push, please try again!")
}

// verify they set up git config

child.exec('git config user.email', function(err, stdout, stderr) {
  var email = stdout.trim()
  child.exec('git config user.username', function(err, stdout, stderr) {
    var user = stdout.trim()
    if (user === "") console.error("No username found.")
    else console.log("Username added!")
    if (email === "") console.error("No email found.")
    else console.log("Email added!")
  })
})
