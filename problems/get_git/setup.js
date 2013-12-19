#!/usr/bin/env node

var spawn = require('child_process').spawn
var concat = require('concat-stream')

var username = spawn('git', ['config', 'user.name'])
var email =  spawn('git', ['config', 'user.email'])

username.stdout.pipe(concat(onUsername))
email.stdout.pipe(concat(onEmail))

var pending = 2

function onUsername(output) {
  var userOutput = output.toString().trim()
  if (userOutput == "") console.error("error")
  else console.log("Awesome", userOutput, "!" )
}

function onEmail(output) {
  var emailOutput = output.toString().trim()
  if (emailOutput == "") console.error("error")
  else console.log("cool")
}

