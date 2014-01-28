#!/usr/bin/env node

const Workshopper = require('workshopper-jlord'),
      path = require('path')

Workshopper({
  name: 'git-it',
  title: 'GIT + GITHUB : VERSION CONTROL + SOCIAL CODING',
  appDir: __dirname,
  helpFile: path.join(__dirname, 'help.txt'),
  menu: {
    bg: 'cyan',
    fg: 'white'
  }
}).init()
