#!/usr/bin/env node

var spawn = require('child_process').spawn
var concat = require('concat-stream')

// check that Git is installed

var git = spawn('git', ['--version'])

git.stdout.pipe(concat(onGit))

function onGit(output) {
  var gitOutput = output.toString().trim()
  if (gitOutput.match("git version")) {
    console.log("Found Git installed.")   
  }
  else console.log("Found no Git installed.")
}



