``#!/usr/bin/env node

var spawn = require('child_process').spawn
var concat = require('concat-stream')

var ref = spawn('git', ['reflog', 'show', 'origin/master'])

ref.stdout.pipe(concat(onRef))

// check that they've made a push

function onRef(output) {
  var ref = output.toString().trim()
  if (ref.match("update by push"))
    console.log(true)
  else console.log(false)
}

// verify they set up git config

var username = spawn('git', ['config', 'user.name'])
var email =  spawn('git', ['config', 'user.email'])

username.stdout.pipe(concat(onUsername))

function onUsername(output) {
  var userOutput = output.toString().trim()
  if (userOutput == "") console.error("error")
  else email.stdout.pipe(concat(onEmail))
}

function onEmail(output) {
  var emailOutput = output.toString().trim()
  if (emailOutput == "") console.error("error")
  else console.log(true)
}