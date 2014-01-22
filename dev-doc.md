# Developer Documentation

_Since Git-it is intended as an app for those new to Git and GitHub, the README.md focuses on those running the app itself. This document is for all the techy details of the app's guts._

- Git-it is a terminal app built in the [nodeschoo.io](http://www.nodeschool.io) style with a [fork](http://www.github.com/jlord/workshopper) of the [workshopper module](https://github.com/rvagg/workshopper). I've forked it to make changes due to the fact that unlike the other workshopper apps, users aren't creating code to be tested. They are, instead, doing things with Git which can be verified through Git.

- For the most part, challenges are verified using Git itself and comparing the output to the expected output. 

- The verifiying of some challenges (that require the GitHub API) and the similated collaborator parts of Git-it are done via @reporobot, who lives on a server running this code: [jlord/reporobot](http://www.github.com/jlord/reporobot).

- The some of the challenges require users to work with a repository that they fork and pull request against. That repository is [jlord/patchwork](http://www.github.com/jlord/patchwork) (named after [teaching night](https://github.com/blog/1747-introducing-patchwork) I host at GitHub HQ with Git-it.).

- The [jlord/patchwork](http://www.github.com/jlord/patchwork) is a site hosted through [GitHub Pages](pages.github.com) that is rebuilt by @reporobot each time a new user completes the challenges with their pull request merged. The site: [jlord.github.io/patchwork](http://jlord.github.io/patchwork)

### To Install

```bash
npm install -g git-it
git-it
```

### To Run from Source

```bash
git clone https://github.com/jlord/git-it.git
cd git-it
npm link
```