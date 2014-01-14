#!/usr/bin/env node

var spawn = require('child_process').spawn
var concat = require('concat-stream')

// Change to just check that Git is installed

//var username = spawn('git', ['config', 'user.name'])
//var email =  spawn('git', ['config', 'user.email'])
//
//username.stdout.pipe(concat(onUsername))
//
//function onUsername(output) {
//  var userOutput = output.toString().trim()
//  if (userOutput == "") console.error("error")
//  else email.stdout.pipe(concat(onEmail))
//}
//
//function onEmail(output) {
//  var emailOutput = output.toString().trim()
//  if (emailOutput == "") console.error("error")
//  else console.log(true)
//}

var git = spawn('git', ['--version'])

git.stdout.pipe(concat(onGit))

function onGit(output) {
  var gitOutput = output.toString().trim()
  if (gitOutput.match("git version")) {
    console.log(true)    
  }
}



