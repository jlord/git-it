#!/usr/bin/env node

var exec = require('child_process').exec
var request = require('request')

// var url = "https://api.github.com/users/"

// verify they set up git config

exec('git config user.username', function(err, stdout, stderr) {
  var user = stdout.trim()
  if (user === "") console.error("No username found.")
  else {
    console.log("Username added to Git config!")
    checkGitHub(user)
  }
})

function checkGitHub(user, callback) {
  var options = {
        url: "https://api.github.com/users/" + user,
        json: true,
        headers: { 'User-Agent': 'jlord'}
      }

  request(options, function (error, response, body) {
    if (error) return console.log(error)
    if (!error && response.statusCode == 200) {
      console.log("You're on GitHub!")
      checkCapitals(body.login, user)
    }
    else if (response.statusCode == 404) {
      return console.log("GitHub account matching Git config\nusername wasn't found.")
    }
  })
}

function checkCapitals(githubUsername, configUsername) {
  if (configUsername.match(githubUsername)) {
    console.log("Username is same on GitHub and in Git config!")
  } else console.log("GitHub username doesn't match\nthe one set in Git config\n"
      + githubUsername +" on GitHub, " + configUsername + " in Git Config" )
}
