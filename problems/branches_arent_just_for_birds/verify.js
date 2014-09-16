#!/usr/bin/env node

var exec = require('child_process').exec

// get their username
// verify branch matches username, case too.
// verify they've pushed

exec('git config user.username', function(err, stdout, stdrr) {
  var username = stdout.trim()

  exec('git rev-parse --abbrev-ref HEAD', function(err, stdout, stderr) {
    var actualBranch = stdout.trim()
    var expectedBranch = "add-" + username
    if (actualBranch.match(expectedBranch)) {
      return console.log("Found branch as expected!")
      checkPush(actualBranch)
    } else {
      console.log("Branch name expected: " + expectedBranch)
      checkPush(actualBranch)
    }
  })
})

function checkPush(branchname) {
  exec('git reflog show origin/' + branchname, function(err, stdout, stderr) {
    if (stdout.match("update by push")) console.log("Changes have been pushed!")
    else console.log("Changes not pushed")
  })
}
