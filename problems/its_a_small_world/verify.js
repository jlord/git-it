#!/usr/bin/env node

var request = require('request')
var exec = require('child_process').exec

// var url = "http://localhost:5563/collab?username="
var url = 'http://reporobot.jlord.us/collab?username='

exec('git config user.username', function(err, stdout, stdrr) {
  var username = stdout.trim()
  collaborating(username)
})

// check that they've added RR as a collaborator

function collaborating(username) {
  request(url + username, {json: true}, function (error, response, body) {
    if (error) console.log(error)
    if (!error && response.statusCode == 200) {
      if (body.collab = true) console.log("Reporobot has been added!")
      else console.log("Reporobot doesn't have access to the fork")
      if (body.error) console.log(body)
    }
  })
}
