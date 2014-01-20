#!/usr/bin/env node

var request = require('request')
var spawn = require('child_process').spawn
var concat = require('concat-stream')

// var url = "http://localhost:5563/pr?username="
var url = 'http://reporobot.jlord.us/pr?username='
var user = spawn('git', ['config', 'user.name'])

user.stdout.pipe(concat(onUser))

function onUser(output) {
  var username = output.toString().trim()
  pullrequest(username)
}

// check that they've submitted a pull request
// to the original repository jlord/patchwork

function pullrequest(username) {
  request(url + username, {json: true}, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var pr = body.pr
      if (pr) console.log(true) 
      else console.log("No pull request found for " + username)
    }
  })
}