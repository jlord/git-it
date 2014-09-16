#!/usr/bin/env node

var exec = require('child_process').exec
var request = require('request')

// verify they set up git config
// verify that user exists on GitHub (not case sensitve)
// compare the two to make sure cases match

exec('git config user.username', function(err, stdout, stderr) {
  var user = stdout.trim()
  if (user === "") console.error("No username found.")
  else {
    console.log("Username added to Git config!")
    checkGitHub(user)
  }
})

function checkGitHub(user) {
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
    console.log("Username same on GitHub and\nGit config!")
  } else console.log("GitHub & Git config usernames\ndo not match")
}
