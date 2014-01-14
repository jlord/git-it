#!/usr/bin/env node

var spawn = require('child_process').spawn
var concat = require('concat-stream')
var http = require('request')

var remote = spawn('git', ['remote', '-v'])
var username = spawn('git', ['config', 'user.name'])


remote.stdout.pipe(concat(onRemote))

function onRemote(output) {
  var show = output.toString().trim()
  if (show.match("upstream") && show.match("github.com/jlord/"))
  console.log(true)
  else console.log("no upstream remote")
}

request('http://reporobot.jlord.us/collab=' + username, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var issueLength = body.issueLength
    if (issueLength > 1) console.log(true)
  }
})

// check via the github api? would need username
// and repo name (repo name could be assumed/gotten
// via the name of the current directory locally)

// git show-branch origin/master

// var remote = spawn('git', ['show-branch', 'origin/master'])

// If commits but no remote pushes
//
// jlord:test jessicalord$ git show-branch origin/master
// fatal: bad sha1 reference origin/master

// If empty git repo, no commits
//
// jlord:test jessicalord$ git show-branch master
// fatal: bad sha1 reference master
//
// git remote returns nothing

// If no pushes
//
// jlord:test jessicalord$ git reflog show origin/master
// fatal: ambiguous argument 'origin/master': unknown revision or path not in the working tree.
// Use '--' to separate paths from revisions, like this:
// 'git <command> [<revision>...] -- [<file>...]'

// jlord:git-it jessicalord$ git reflog show origin/master
// c63d2bc refs/remotes/origin/master@{0}: update by push
// c11f47a refs/remotes/origin/master@{1}: update by push