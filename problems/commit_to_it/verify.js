#!/usr/bin/env node

var exec = require('child_process').exec

// check that they've commited changes

exec('git status', function(err, stdout, stdrr) {
  var show = stdout.trim()

  if (show.match("Initial commit")) {
    console.log("Hmm, can't find\ncommitted changes.")
  }
  else if (show.match("nothing to commit")) {
    console.log("Changes have been committed!")
  }
  else {
    console.log("Seems there are changes\nto commit still.")
  }
})
