# Git-it

![ss](https://raw.githubusercontent.com/jlord/git-it/master/git-it-ss.png)

Git-it 是一个带领你学习 Git 和 GitHub 的 [workshopper](https://github.com/rvagg/workshopper) 程序。Git-it 在终端中运行，并带领使用着经过一个个关卡的挑战。查看 [nodeschool.io](http://nodeschool.io) 有更多相关的资讯。

---

**开发者文档请看 [CONTRIBUTING.md](https://github.com/jlord/git-it/blob/master/CONTRIBUTING.md)。**

**将要在一个使用 Git-it 的活动当教练吗？ 先自己用用看 Git-it，然后在 [TROUBLESHOOT.md](https://github.com/jlord/git-it/blob/master/TROUBLESHOOT.md) 里面可以看到一些初学者经常会碰到的问题。**

---

## 哈喽，未来的伟大程序员！

这个程序会在你的终端（Mac）或命令提示符（Windows）中运行。Git-it 中包含很多关卡，每一个关卡会一步步带领你学习 Git 和 GitHub。Git-it 用的是在现实生活中写程序时会用到的「终端命令」、「Git」和「GitHub」，这意味当你完成所有的挑战之后，你将在GitHub上拥有真实的代码仓库，而且让你的[贡献日志](https://github.com/blog/1360-introducing-contributions)上真的有个小绿方块！

![contributions](https://raw.githubusercontent.com/jlord/git-it/master/ghcc.png)

你可以在 [Git-it 的挑战列表](http://jlord.github.io/git-it/index-zhtw.html)中看到全部的关卡以及说明。

---

#### 你将需要这些程序才能执行 Git-it:

_这是一些程序开发的必需品，全部都是免费的，并且大部分是开源软件。_

- **Git**，记录下所有的修改！
 - 如果你用的是 **Windows，下载 [GitHub for Windows](http://windows.github.com)**，它里面包含了 Git。你可以用 **Git Shell** 作为你的终端。
 - 如果你用的是 **Mac，下载 [GitHub for Mac](http://mac.github.com)**，它里面包含了 Git，另外你需要到 Preferences > Advanced > 勾选 Install Command Line Tools 来安装命令行工具。
- **Node.js** 是撰写 Git-it 所使用的语言，所以必须要安装了它才有办法使用 Git-it。Node.js 是一个服务端的 JavaScript 引擎（你的电脑就是一个服务器！），而且它会默默的在后台执行。你可以**[在这里下载 Node](http://nodejs.org/download/)**（大部分情况下直接选择 **Windows `.msi`** 或是 **Mac `.pkg`** 的选项即可）。
 - 如果你本来就有安装 Node 和 npm，记得要把 npm 更新到 v1.4.3 以上的版本。
- **文本编辑器** 如果你还没有这样的程序，最好安装一个特别用来写程序的文本编辑器。这里为大家提供一些选项：[Atom](http://www.atom.io)、[Sublime Text](http://www.sublimetext.com)、[Textmate](http://macromates.com/download)或者[Brackets](http://brackets.io/)。
- **英文设置**，因为 Git-it 内容目前还是以英文为主，如果没有将系统语言设置为英文可能会造成程序无法运行。如果你电脑的设置不是英文，请查看 [TROUBLESHOOT.md](https://github.com/jlord/git-it/blob/master/TROUBLESHOOT.md#system-with-non-english-locale)，页面最下方有说明该如何设置语言为英文。

_*Git-it 其实没有任何关卡需要你「写程序」，所以如果不想安装文本编辑器也是没关系的。每台电脑都有的 TextEdit（Mac）或 Nodepad（Windows）就已经足够了。_

#### 安装 Git-it

以上的程序都安装完后，就可以来安装 Git-it 了。

- 打开你的终端/Terminal（Mac）或命令提示符/Cmd（Windows），并把 Git-it 安装到你的电脑上。[NPM](http://www.npmjs.org)（**包含在 Node.js 里面**） 让你可以用很简单的命令来安装 Node.js 程序（Git-it 就是一个这样的程序），像这样：

```bash
$ npm install -g git-it
```
- _如果这个命令出现「权限不足」之类的错误，**试着在指令之前加上 'sudo'**:_ `sudo npm install -g git-it`。如果是Windows用户，试着以`管理员权限`打开命令提示符/Cmd。
- 提示安装成功之后，你就可以试着运行 Git-it：

```bash
$ git-it
```
- 这个指令应该会显示出一个关卡的列表。一切准备就绪咯！你可以选择第一个关卡，按下 enter，接着就按照提示开始挑战吧！

#### 运作方式

- 运行 `git-it` 后，会出现关卡列表，按上下箭头 ↑↓ 来选择关卡，然后按 `enter` 来进入关卡。
- 关卡内容出现后，可以根据屏幕最下面的提示把教学页面打开。 _也有一个网页版本的[教学页面](http://jlord.github.io/git-it/index-zhtw.html)._

![img](https://raw.githubusercontent.com/jlord/git-it/master/guide-ss.png)

- 跟着教学页面上面的步骤，在终端中执行一个个的命令来通关。
- 当你完成一个关卡，在终端中打上 `git-it verify` 来确认一切正确。
- 如果关卡中有步骤没有完成，Git-it 会出现一些错误信息来告诉你错在哪里。
- 通关后，再执行一次 `git-it` 就会回到关卡列表，进入下一个关卡吧！

**如果你在使用中遇到任何问题，尽管[开启一个 issue](https://github.com/jlord/git-it/issues/new) 问我们，或是看看 [troubleshooting doc](https://github.com/jlord/git-it/blob/master/TROUBLESHOOT.md) 可能已经有解答了。**

---

#### 初学者小提示

**代码语法** 通常长这样：`$ some code-stuff --here`。前面的 $ 符号意思是这行命令是要输在命令行里面执行的，但在实际输入命令的时候**不要**包含 $ 的符号。以这个例子来说，你实际上输入的指令是 `some code-stuff --here`。

**参数** 在语法段落中用 `<参数名称>` 来表示。当你要输入一行命令的时候，把参数名称，包含 `<>` 用正确的内容替换掉。比如说，一个用来新建文件夹的命令是 `mkdir <文件夹名称>`，你想要新建一个叫做 'octocat' 的文件夹，那就要输入 `mkdir octocat`。

**终端、命令提示符** 指的都是同一个东西，就是你在电影上常常看到的黑黑的、满是数字和英文字的窗口。它非常强大，以致你可以通过文字命令来和电脑沟通。

通过终端可以叫电脑做非常多的事情，像是删除，重命名，复制，新增文件和文件夹；运行脚本，在不同的主机和你的电脑（也是一个主机！）之间来回传送文件（像是把东西上传到 GitHub.com）。
