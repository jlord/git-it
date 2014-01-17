#!/usr/bin/env node

var request = require('request')
var url = 'http://reporobot.jlord.us/pr?username='
var username = spawn('git', ['config', 'user.name'])

// check that they've submitted a pull request
// to the original repository jlord/patchwork

request(url + username, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var pr = body.pr
    if (pr) console.log(true) 
    else console.log("No pull request found for " + username)
  }
})
