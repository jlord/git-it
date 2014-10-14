#!/usr/bin/env node

var exec = require('child_process').exec
var fs = require('fs')
var path = require('path')
var username = ""

// get their username
// verify branch matches username, case too.
// verify they've pushed
// check the file is in contributors directory

exec('git config user.username', function(err, stdout, stdrr) {
  if (err) return console.log(err)
  username = stdout.trim()

  exec('git rev-parse --abbrev-ref HEAD', function(err, stdout, stderr) {
    if (err) return console.log(err)
    var actualBranch = stdout.trim()
    var expectedBranch = "add-" + username
    if (actualBranch.match(expectedBranch)) {
      console.log("Found branch as expected!")
      checkPush(actualBranch)
    } else {
      console.log("Branch name expected: " + expectedBranch)
      checkPush(actualBranch)
    }
  })
})

function checkPush(branchname) {
  exec('git reflog show origin/' + branchname, function(err, stdout, stderr) {
    if (err) return console.log(err)
    if (stdout.match("update by push")) console.log("Changes have been pushed!")
    else console.log("Changes not pushed")
    findFile()
  })
}

function findFile() {
  // see if user is already within /contributors
  if (process.cwd().match("contributors")) {
    check(process.cwd())
  } else {
    check(path.join(process.cwd(), "/contributors/"))
  }

  function check(userspath) {
    fs.readdir(userspath, function(err, files) {
      if (err) return console.log(err)
      var allFiles = files.join()
      if (allFiles.match(username)) console.log("File in contributors folder!")
      else console.log("File NOT in contribs.. folder!")
    })
  }
}
