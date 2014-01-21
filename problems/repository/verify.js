#!/usr/bin/env node

var spawn = require('child_process').spawn
var concat = require('concat-stream')

var status = spawn('git', ['status'])

// check that the current directory is a git
// repository

status.stdout.pipe(concat(onStatus))

function onStatus(output) {
  var status = output.toString().trim()
  if (status != "fatal: Not a git repository (or any of the parent directories): .git")
  console.log("This is a Git repository!")
  else console.log("This folder isn't being tracked by Git." 
    + "Re-run this challenge verify in a folder using Git" 
    + "or `git init` to initialize Git in this folder.")
}