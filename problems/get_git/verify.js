#!/usr/bin/env node

var exec = require('child_process').exec

// check that Git is installed

exec('git --version', function(err, stdout, stdrr) {
  var gitOutput = stdout.trim()
  
  if (gitOutput.match("git version"))
    console.log("Found Git installed.")   
  else console.log("Found no Git installed.")
})
