#!/usr/bin/env node

var exec = require('child_process').exec
var request = require('request')

var url = "http://www.github.com/"
  
  // verify they set up git config
  
  exec('git config user.username', function(err, stdout, stderr) {
    var user = stdout.trim()
    if (user === "") console.error("No username found.")
    else {
      console.log("Username added!")
      checkGitHub(user)
    }
  })

function checkGitHub(user, callback) {
  request(url + user + '.json', {json: true}, function (error, response, body) {
    if (error) return console.log(error)
    if (!error && response.statusCode == 200) {
      if (body.error) return console.log("GitHub account matching Git\n username wasn't found.")
      else console.log("You're on GitHub!")
    }
  })
}

