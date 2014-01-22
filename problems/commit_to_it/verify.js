#!/usr/bin/env node

var exec = require('child_process').exec

// check that they've commited changes

exec('git config user.username', function(err, stdout, stdrr) {
  var show = stdout.trim()
  
  if (show.match("new file mode") && show.match("commit"))
    console.log("Changes have been committed!")
  else console.log("Seems no changes \nhave been committed.")
})
