#!/usr/bin/env node

var http = require('request')

request('http://reporobot.jlord.us/collab', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var issueLength = body.issueLength
    if (issueLength > 1) console.log(true)
  }
})

// get their username
// verify branch matches username
// verify they've pushed

var username = spawn('git', ['config', 'user.name'])
var branch = spawn('git', ['status'])
var ref = spawn('git', ['reflog', 'show', 'origin/master'])

username.stdout.pipe(concat(onUsername))

function onUsername(output) {
  var userOutput = output.toString().trim()
  branch.stdout.pipe(concat(onBranch))
  
  function onBranch(output) {
    var branchOutput = output.toString().trim()
    if (branchOutput.match("add-" + username) {
      ref.stdout.pipe(concat(onRef))
    }
    else console.log("branch name was not 'add='" + username)
  }
}

// check that they've made a push

function onRef(output) {
  var ref = output.toString().trim()
  if (ref.match("update by push"))
    console.log(true)
  else console.log("Changes not pushed")
}