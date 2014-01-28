#!/usr/bin/env node

var exec = require('child_process').exec

// check that they've made a push

exec('git reflog show origin/master', function(err, stdout, stderr) {
  var ref = stdout.trim()
  
  if (ref.match("update by push")) console.log("Bingo! Detected a push.")
  else console.log("No evidence of push.")
})
