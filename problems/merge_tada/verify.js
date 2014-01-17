#!/usr/bin/env node

var spawn = require('child_process').spawn
var concat = require('concat-stream')

var remote = spawn('git', ['remote', '-v'])

remote.stdout.pipe(concat(onRemote))

// check that there is no longer a feature branch
// here is what i added to test branch

function onRemote(output) {
  var show = output.toString().trim()
  if (show.match("upstream") && show.match("github.com/jlord/"))
  console.log(true)
  else return console.log("no upstream remote")
}