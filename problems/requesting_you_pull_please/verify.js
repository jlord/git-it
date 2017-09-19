#!/usr/bin/env node

var exec = require('child_process').exec
var request = require('request')

// var url = "http://localhost:5563/pr?username="
var url = 'http://reporobot.jlord.us/pr?username='

// check that they've submitted a pull request
// to the original repository jlord/patchwork

exec('git config user.username', function(err, stdout, stdrr) {
  var username = stdout.trim()
  pullrequest(username)
})

function pullrequest(username) {
  request(url + username, {json: true}, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var pr = body.pr
      if (pr) console.log("Found your pull request!")
      else console.log("No merged pull request found\nfor " + username
                       + ". If you did make a\npull request, return to "
                       + "its\nwebsite to see comments." )
    }
  })
}
