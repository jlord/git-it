# Contributing

Details on the [app](https://github.com/jlord/git-it/blob/master/CONTRIBUTING.md#the-app) and the [guide](https://github.com/jlord/git-it/blob/master/CONTRIBUTING.md#the-guide) —

## The App

- Git-it is a terminal app built in the [nodeschool.io](http://www.nodeschool.io) style with a branch on my [fork](https://github.com/jlord/workshopper/tree/verify) of the [workshopper module](https://github.com/rvagg/workshopper). I've forked it to make changes due to the fact that unlike the other workshopper apps, users aren't creating code to be tested. They are, instead, doing things with Git which can be verified through Git.

- For the most part, challenges are verified using Git itself and comparing the output to the expected output.

- The verifiying of some challenges (that require the GitHub API) and the similated collaborator parts of Git-it are done via @reporobot, who lives on a server running this code: [jlord/reporobot](http://github.com/jlord/reporobot).

- The some of the challenges require users to work with a repository that they fork and pull request against. That repository is [jlord/patchwork](http://github.com/jlord/patchwork) (named after [teaching night](https://github.com/blog/1747-introducing-patchwork) I host at GitHub HQ with Git-it.).

- The [jlord/patchwork](http://github.com/jlord/patchwork) is a site hosted through [GitHub Pages](pages.github.com) that is rebuilt by @reporobot each time a new user completes the challenges with their pull request merged. The site: [jlord.github.io/patchwork](http://jlord.github.io/patchwork)

- The [jlord/patchwork](http://jlord.github.io/patchwork) repo has backups of the template and contributors.json, but what actually matters are the versions on the server with @reporobot, so changes to that should be made on [jlord/reporobot](https://github.com/jlord/reporobot)

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

## The Guide

- The guide is a static site within `/guide` in the repository on the **master** branch.
- Edits to the text for challenges should be made to the files within `/raw-content`, as those are turned into `/challenges` by the build script.
- Right now I copy the `/guide` folder and move it to the 'gh-pages' branch. (plans to automate that at some point).
- **So all guide edits should be made off of master and in `/raw-content`**

### To Build the Site

```bash
$ cd git-it
$ npm run build
$ git-it server
# or open files
$ open guide/index.html
```

### Thank you!! :octocat:
