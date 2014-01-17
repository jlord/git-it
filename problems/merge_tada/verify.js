#!/usr/bin/env node

var spawn = require('child_process').spawn
var concat = require('concat-stream')

var ref = spawn('git', ['reflog', '-10'])
var username = spawn('git', ['config', 'user.name'])

var user = ""

ref.stdout.pipe(concat(onRef))
username.stdout.pipe(concat(onUser))

// check that they performed a merge
// check there is not username named branch

function onRef(output) {
  var ref = output.toString().trim()
  if (ref.match("merge")) 
    console.log(true)
  else return console.log("no upstream remote")
}

function onUser(output) {
  user = output.toString().trim()
  getBranches(onBranch)
}

function getBranches(callback) {
  var branches = spawn('git', ['branch'])
   branches.stdout.pipe(concat(callback))
}

function onBranch(output) {
  var branch = output.toString().trim()
  if (branch.match(user)) {
    console.log(false)
  }
  else return console.log(true)
}