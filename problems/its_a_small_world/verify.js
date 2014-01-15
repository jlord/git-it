#!/usr/bin/env node

var request = require('request')
var url = 'http://reporobot.jlord.us/collab?username='
var username = spawn('git', ['config', 'user.name'])

// check that they've added RR as a collaborator

request(url + username, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    if (body) {
      console.log(true)
    }
    else console.log("reporobot doesn't have access to the fork")
  }
})