#!/usr/bin/env node

var request = require('request')
var spawn = require('child_process').spawn
var concat = require('concat-stream')

var url = "http://localhost:5563/collab?username="
// var url = 'http://reporobot.jlord.us/collab?username='
var user = spawn('git', ['config', 'user.name'])

user.stdout.pipe(concat(onUser))

function onUser(output) {
  var username = output.toString().trim()
  collaborating(username)
}

// check that they've added RR as a collaborator

function collaborating(username) {
  request(url + username, {json: true}, function (error, response, body) {
    console.log(body)
    if (!error && response.statusCode == 200) {
      if (body.collab = true) console.log(true)
      else console.log("reporobot doesn't have access to the fork")
    }
  })
}