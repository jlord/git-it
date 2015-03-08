#!/usr/bin/env node

const Workshopper = require('workshopper-jlord'),
      path = require('path')

process.env.LANG = 'en_US.UTF-8'

Workshopper({
  name: 'git-it',
  title: 'GIT + GITHUB : VERSION CONTROL + SOCIAL CODING',
  appDir: __dirname,
  helpFile: path.join(__dirname, 'help.txt'),
  menu: {
    fg: /^win/.test(process.platform) ? 'white' : 231,
    bg: /^win/.test(process.platform) ? 'blue'  : 33
  }
}).init()
