### Not Finished Yet! Under Construction! Will Exist in Near Future! WIP

_I'm actively working on this and will redo this readme when it's ready to use. For now, below is plan._

# Git-it

![ss](https://github.com/jlord/git-it/blob/master/git-it-ss.png)

A [workshopper](https://github.com/rvagg/workshopper) module for learning Git and GitHub - Social coding, y'all.

These modules run a little app in your terminal and users work their way through the challenges. See [nodeschool.io](http://nodeschool.io) for more.

## The Rough Plan

This workshopper takes workshoppees on a journey through Git and GitHub (and with all that, a little basic command line, too). The screenshot above shows the current menu.

Workshoppees will complete the first few challenges locally with Git on a new repository they create. Then they push that repository to Git. Next they'll fork a repository and learn the bits about setting up remotes and contributing and such. I'd like this forked repository (specifically for this workshopper) to be a little more interactive (see Repo-Bot Future below) and be kind of neat. Each PR would be a needed contribution to something bigger. See [this issue](https://github.com/jlord/git-it/issues/1) for more thoughts on this.

#### Exciting Repo-Bot Future

I also intend on building a bot that listens to events on a repo (the one given as the repo to fork in this workshop) so that workshops can do things like pull in changes, or possible handle a merge conflict! Eek!

##### Other Things

I want to throw in GitHub Pages into this, too, because it's so great. How nice to end up with your own website at the end of this workshop?

### Running the Under Construction Version Locally

Eventually this will run like a global node module and will be available on NPM. Until then, if you want to install it anyway (remember, it doesn't work yet) you can:

```bash
git clone https://github.com/jlord/git-it.git
cd git-it
npm link
git-it
```

_notes to self_
- add intro to terminal/bash/shell
- something about text editors
- add git diff in challenge
