#!/usr/bin/env node

const Workshopper = require('workshopper-jlord'),
      path = require('path')

Workshopper({
  name: 'git-it',
  title: 'GIT + GITHUB : VERSION CONTROL + SOCIAL CODING',
  appDir: __dirname,
  helpFile: path.join(__dirname, 'help.txt'),
  menu: {fg: 231 || 'white' , bg: /^win/.test(process.platform) ? 'cyan' : 33}
}).init()
