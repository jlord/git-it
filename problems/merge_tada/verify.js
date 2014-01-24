#!/usr/bin/env node

var exec = require('child_process').exec

// check that they performed a merge
// check there is not username named branch

exec('git reflog -10', function(err, stdout, stdrr) {
  var ref = stdout.trim()
  var user = ""
  
  if (ref.match("merge")) console.log("Branch has been merged!")
  else console.log("No merge in the history.")
  
  exec('git config user.username', function(err, stdout, stdrr) {
    user = stdout.trim()
    
    exec('git branch', function(err, stdout, stdrr) {
      branches = stdout.trim()
      
      if (branches.match(user)) console.log("Uh oh, branch is still there.")
      else return console.log("Branch deleted!")
    })
  })
})