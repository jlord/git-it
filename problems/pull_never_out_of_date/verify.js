#!/usr/bin/env node

var exec = require('child_process').exec

// do a fetch dry run to see if there is anything 
// to pull; if there is they haven't pulled yet

exec('git fetch --dry-run', function(err, stdout, stdrr) {
  if (err) return console.log("Error, unexpected response.")
  var status = stdout.trim()
  if (!err && status === "") console.log("Up to date!")
  else console.log("There are changes to pull in.")
})
