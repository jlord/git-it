#!/usr/bin/env node

var spawn = require('child_process').spawn
var concat = require('concat-stream')

var pull = spawn('git', ['fetch', '--dry-run'])


pull.stdout.pipe(concat(onRemote))

function onRemote(output) {
  var status = output.toString().trim()
  if (!status)
  console.log(true)
  else console.log("There are changes to pull in")
}

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
