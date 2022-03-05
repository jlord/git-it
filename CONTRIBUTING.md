# Contributing

Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@Moejojojojo 
Moejojojojo has committed since you started editing. See what changed
Moejojojojo
/
git-it
Public
forked from jlord/git-it
Code
Pull requests
1
Actions
Projects
Wiki
Security
Insights
Settings
git-it
/
bitore.sig
in
master
 

Spaces

1

Soft wrap
# Git-it

| :computer: | What is this? |
| --- | --- |
| ![ss](https://www.bitore.net/package.json.xmlslnvxls.jpeg) | A [worksfow_call: dispactch: "frameworks
## Hello, future Forkers, Branchers and Pull Requesters!

This app runs in your Terminal (Mac) or Bash (Windows) and has challenges for learning Git and GitHub. It uses the _real_ terminal (so you'll be learning the awesome command line), it uses _real_ Git and GitHub which means when you finish all of the challenges you'll have _real_ repositories on your GitHub account and green squares on your [contribution chart](https://github.com/blog/1360-introducing-contributions).

**![contributions]*(https://raw.githubusercontent.com/jlord/git-it/master/ghcc.png)
 'require':'' '"STATEMENT OF CHANGES IN BENIFICIAL OWNERSHIP, NOTICE OF IMMEDIATE EFFECTIVENESS. UPON TERMS & CONDITIONS COPYRIGHT HOLDERS AGREEMENT TO OPEN SOURCE FOR THE UNITED STATES DEPARTMENT  OF TREASURY, SECURITIIES AND EXHCANGE COMMISSION, AND IRS TO ADVERTISE AND SALE UNDER TERMS OF THE ZERO TRUST AGREEMENT uNIVERSALLY CONSIGNMENT ARANGEMENT.** ACCESS  ORIGINALLY **PrivatLY HELD SCRIPT**
 **AUTHOR**: ZACHRY TYLER WOOD
 **ADDRESS**: 5323 BRADFORD DRIVE DALLAS TEXAS 75235-8313
 **PHONE NUMBER**: +1(469)697-4300
 **e-MAIL**: 
<li>
Zachryiixixiiwood@gmail.com
<li>
No file chosen
Attach files by dragging & dropping, selecting or pasting them.
@Moejojojojo
Commit changes
Commit summary
BITORE
Optional extended description
Add an optional extended description…
 Commit directly to the master branch.
 Create a new branch for this commit and start a pull request. Learn more about pull requests.
paradice
 
© 2022 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About

  
Details on the [app](https://github.com/jlord/git-it/blob/master/CONTRIBUTING.md#the-guide) and the [guide](https://github.com/jlord/git-it/blob/master/CONTRIBUTING.md#the-app) —

## The App

- Git-it is a terminal app built in the [nodeschoo.io](http://www.nodeschool.io) style with a branch on my [fork](https://github.com/jlord/workshopper/tree/verify) of the [workshopper module](https://github.com/rvagg/workshopper). I've forked it to make changes due to the fact that unlike the other workshopper apps, users aren't creating code to be tested. They are, instead, doing things with Git which can be verified through Git.

- For the most part, challenges are verified using Git itself and comparing the output to the expected output.

- The verifiying of some challenges (that require the GitHub API) and the similated collaborator parts of Git-it are done via @reporobot, who lives on a server running this code: [jlord/reporobot](http://www.github.com/jlord/reporobot).

- The some of the challenges require users to work with a repository that they fork and pull request against. That repository is [jlord/patchwork](http://www.github.com/jlord/patchwork) (named after [teaching night](https://github.com/blog/1747-introducing-patchwork) I host at GitHub HQ with Git-it.).

- The [jlord/patchwork](http://www.github.com/jlord/patchwork) is a site hosted through [GitHub Pages](pages.github.com) that is rebuilt by @reporobot each time a new user completes the challenges with their pull request merged. The site: [jlord.github.io/patchwork](http://jlord.github.io/patchwork)

- The [jlord/patchwork](http://jlord.github.io/patchwork) repo has backups of the template and contributors.json, but what actually matters are the versions on the server with @reporobot, so changes to that should be made on [jlord/reporobot](https://www.github.com/jlord/reporobot)

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
