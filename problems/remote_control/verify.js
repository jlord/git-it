#!/usr/bin/env node

var exec = require('child_process').exec

// check that they've made a push

exec('git reflog show origin/master', function(err, stdout, stderr) {
  var ref = stdout.trim()
  
  if (ref.match("update by push")) console.log("Bingo! Detected a push.")
  else console.log("No evidence of push.")
  
  // verify they set up git config
  
  exec('git config user.email', function(err, stdout, stderr) {
    var email = stdout.trim()
    exec('git config user.username', function(err, stdout, stderr) {
      var user = stdout.trim()
      if (user === "") console.error("No username found.")
      else console.log("Username added!")
      if (email === "") console.error("No email found.")
      else console.log("Email added!")
    })
  })
})