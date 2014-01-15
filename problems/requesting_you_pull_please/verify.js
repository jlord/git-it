#!/usr/bin/env node

var http = require('request')

request('http://reporobot.jlord.us/pr', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var issueLength = body.issueLength
    if (issueLength > 1) console.log(true)
  }
})