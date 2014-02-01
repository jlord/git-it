#!/usr/bin/env node

var exec = require('child_process').exec

// get their username
// verify branch matches username
// verify they've pushed

exec('git config user.username', function(err, stdout, stdrr) {
  var username = stdout.trim().toLowerCase()
  
  exec('git status', function(err, stdout, stderr) {
    var branch = stdout.trim().toLowerCase()
    var branchName = "add-" + username
    exec('git reflog show origin/' + branchName, function(err, stdout, stderr) {
      
      var ref = stdout.trim()
      if (branch.match(branchName)) console.log("Found the branch as expected!")
      else console.log("branch name was not:\n'" + branchName + "'")
      
      if (ref.match("update by push")) console.log("Changes have been pushed!")
      else console.log("Changes not pushed")
      
    })
  })
})
