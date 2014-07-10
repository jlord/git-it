# Git-it

<!-- ![ss](https://raw2.github.com/jlord/git-it/master/git-it-ss.png) -->
![ss](git-it-ss.png)

A [workshopper](https://github.com/rvagg/workshopper) module for learning Git and GitHub - Social coding, y'all.

These modules run a little app in your terminal and users work their way through the challenges. See [nodeschool.io](http://nodeschool.io) for more.

**For developer documentation, see [dev-doc.md](#).**

## Hello, future Forkers, Branchers and Pull Requesters!

This app runs in your Terminal (Mac) or Bash (Windows) and has challenges for learning Git and GitHub. It uses the _real_ terminal (so you'll be learning the awesome command line), it uses _real_ Git and GitHub which means when you finish all of the challenges you'll have _real_ repositories on your GitHub account and green squares on your [contribution chart](https://github.com/blog/1360-introducing-contributions).

![contributions](https://raw2.github.com/jlord/git-it/master/ghcc.png)

#### What you'll need to run this:

_A few development essentials, all are free and/or free and open source._

- **Git**, this is your tracker of changes!
 - If you're on Windows, download the free [GitHub for Windows](http://windows.github.com), which includes Git, and use the **Git Shell** for your terminal.
 - If you're on a Mac you can download [GitHub for Mac](http://mac.github.com) (from Preferences, install the command line tool), which comes with Git or you can download  [Git](http://git-scm.com/downloads) by itself.
- **Node.js**, this is what this app is written in so you'll need this to run it. It's an engine for running JavaScript on servers (your computer is a server!) and will live quietly in the background. You can download it [here](http://nodejs.org/download/) (For most, you can just pick the Windows `.msi` or Mac `.pkg` option).
- **Text Editor**, if you don't have one already, you may want one for editing code*. A few options: [Atom](http://www.atom.io), [Sublime Text](http://www.sublimetext.com/2), [Textmate](http://macromates.com/download), [Brackets](http://brackets.io/).

_*There actually isn't code in this workshop so you're fine to use the default Notepad or TextEdit that come with Mac/PC_

#### Install Git-it

Once you have the essentials above, install Git-it.

- Open up a terminal window and install Git-it globally on your computer (so that you can run it from anywhere). [NPM](http://www.npmjs.org) (which comes with Node.js) delivers Node.js modules (that's what this app is) to your computer from the command line, real easy like:

```bash
$ npm install -g git-it
```
- _If you run into trouble with this command it may be due to permissions on your computer, try adding 'sudo':_ `sudo npm install -g git-it`
- Once it's done installing components, you can run it:

```bash
$ git-it
```
- This should load the menu. You're ready to go! Select the first challenge, hit enter and you're on your way!

#### How it Works

- Use the arrows ↑↓ to select the first challenge and press 'enter'.
- Open the guide with challenge instructions by using the options listed at the bototm of the challenge.

![img](guide-ss.png)

- Read the instructions in the guide and use your terminal to complete the tasks.
- When you're done with a challenge, type 'git-it verify' in terminal.
- If the challenge components were not completed correctly, Git-it returns some text to help you know what went wrong.
- For some challenges you'll need to open new terminal windows and then run Git-it inside the window you've just opened. Git-it can run from any  (or mutiple) terminal windows and always saves your completed status. You'll need to run it from where you're doing your Git work, so it's OK to move around like that.


**If you have any questions about something, just create a [new issue](https://github.com/jlord/git-it/issues/new).**

#### Tips

**Code snippets** often times look like `$ some code-stuff --here`. The dollar sign identifies the line as one a user would enter into the the command line, but you don't actually include it when you type it into terminal. In this case, you'd actually just type `some code-stuff --here`.

**Variables** are indicated by `<VARIABLENAME>` in code snippets. When you actually use the line of code, replace it, including the <>, with your variable. For instance to make a new folder in terminal the format is, `mkdir <FOLDERNAME>`, so if you wanted to make a folder named 'octocat', you'd type: `mkdir octocat`.

**Command line, terminal, bash** all basically mean the same thing: the MS-DOS, Doogie Howser looking screen full of words and numbers. It's awesomely powerful. You can do a lot of things from your terminal like delete, rename, copy or create files and folders; run scripts and send things back and forth between servers (like the ones storing things on GitHub.com) and your computer (also a server!).


#### Topics Covered in Git-it

- Basic **command line** such as: cd, mkdir
- Creating a **local repository**
- Checking **status**, **adding** and **committing** changes
- Creating **remote repositories** on GitHub.com
- **Forking** repositories
- **Connecting local repositories to remote ones** on GitHub.com
- **Pushing** and **pulling** to sync changes to GitHub.com
- Creating **branches** for features/changes
- Adding and working with a **collaborator** (Hi, @reporobot!)
- Creating a **pull request**
- **Merging** and **deleting** branches
