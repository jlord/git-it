# Git-it

![ss](https://raw.githubusercontent.com/jlord/git-it/master/git-it-ss.png)

Git-it 是一個帶領你學習 Git 和 GitHub 的 [workshopper](https://github.com/rvagg/workshopper) 程式。在終端機中執行，帶領使用者經過一個一個的關卡。[nodeschool.io](http://nodeschool.io) 有更多相關的資訊。

---

**開發者文件在請看 [CONTRIBUTING.md](https://github.com/jlord/git-it/blob/master/CONTRIBUTING.md)。**

**將要在一個使用 Git-it 的活動當教練嗎？ 先用用看 Git-it，然後到 [TROUBLESHOOT.md](https://github.com/jlord/git-it/blob/master/TROUBLESHOOT.md) 可以看到一些學員們常會碰到的問題。**

---

## 哈囉！

這個程式會在你的終端機（Mac）或提示指令字元（Windows）中執行。Git-it 中包含很多關卡，每一個關卡會一步步帶領你學習 Git 和 GitHub。這個程式用的是真正現實生活中在寫程式時會用到的「終端機指令」、「Git」、和「GitHub」，中間完全沒有「模擬器」，代表你過程中安裝的軟體、學到的指令、開啟的專案，都將會是立刻就可以使用的技術，而且讓你的[貢獻圖表](https://github.com/blog/1360-introducing-contributions)上真的有個小綠方塊！

![contributions](https://raw.githubusercontent.com/jlord/git-it/master/ghcc.png)

你可以到 [Git-it 的挑戰列表](http://jlord.github.io/git-it/index-zhtw.html)中看到全部的關卡以及說明。

---

#### 你將需要這些程式才能執行 Git-it:

_這是一些程式開發的必需品，全部都是免費的，並且大部分是開源的軟體。_

- **Git**，記錄下所有的修改！
 - 如果你用的是 **Windows，下載 [GitHub for Windows](http://windows.github.com)**，它裡頭就包含了 Git。你可以用 **Git Shell** 作為你的終端機。
 - 如果你用的是 **Mac，下載 [GitHub for Mac](http://mac.github.com)**，它裡頭就包含了 Git，另外你需要到 Preferences > Advanced > 點選 Install Command Line Tools 來安裝指令程式。
- **Node.js** 是 Git-it 程式撰寫所使用的語言，所以必須要安裝了它才有辦法使用 Git-it。Node.js 是一個伺服端的 JavaScript 引擎（你的電腦就是一個伺服器！），而且它會默默的在背景執行，不需要特別啟動。你可以**[在這裡下載 Node](http://nodejs.org/download/)**（直接選擇 **Windows `.msi`** 或是 **Mac `.pkg`** 的選項）。
 - 如果你本來就有安裝 Node 和 npm，記得要把 npm 更新到 v1.4.3 以上的版本。
- **文字編輯器** 如果你還沒有這樣的程式，最好安裝一個特別用來寫程式的文字編輯器。這邊提供大家一些選項：[Atom](http://www.atom.io)、[Sublime Text 2](http://www.sublimetext.com/2)、[Textmate](http://macromates.com/download)、[Brackets](http://brackets.io/)。
- **英文設定**，因為 Git-it 內容目前還是以英文為主，如果沒有特別設定為英文可能造成程式無法運行。如果你電腦的設定不是英文，請到 [TROUBLESHOOT.md](https://github.com/jlord/git-it/blob/master/TROUBLESHOOT.md#system-with-non-english-locale)，頁面最下方有說明該如何設定 Git-it 的語言為英文。

_*Git-it 其實沒有任何關卡需要你「寫程式」，所以如果不想安裝文字編輯器也是沒關係的。每台電腦都有的 TextEdit（Mac）或 Nodepad（Windows）就很足夠了。_

#### 安裝 Git-it

以上的程式都安裝完後，就可以來安裝 Git-it 了。

- 打開你的終端機/Terminal（Mac）或指令提示字元/Cmd（Windows），並把 Git-it 安裝到你的電腦上。[NPM](http://www.npmjs.org)（**包含在 Node.js 裡頭**） 讓你可以用很簡單的指令安裝 Node.js 的各種模組（Git-it 就是一個這樣的模組），像這樣：

```bash
$ npm install -g git-it
```
- _如果這個指令出現「權限不足」之類的錯誤，**試著在指令之前加上 'sudo'**:_ `sudo npm install -g git-it`
- 顯示安裝成功之後，你就可以試著執行 Git-it：

```bash
$ git-it
```
- 這個指令應該會顯示出一個關卡的列表。一切準備就緒囉！你可以選擇第一個關卡，按下 enter，接著就按照提示開始挑戰吧！

#### 運作方式

- 執行 `git-it` 後，就會出現關卡列表，按上下鍵頭 ↑↓ 來選擇關卡，然後按 'enter' 進入關卡。
- 關卡內容出現後，可以看到視窗最下面有個提示可以把教學網頁打開。 _也有一個網頁版本的[教學網頁](http://jlord.github.io/git-it/index-zhtw.html)._

![img](https://raw.githubusercontent.com/jlord/git-it/master/guide-ss.png)

- 跟著教學網頁上面的步驟，在終端機中執行一個個的指令來破關。
- 當你完成一個關卡，在終端機中打上 `git-it verify` 來確認一切正確。
- 如果關卡中有步驟沒有達成，Git-it 會出現一些錯誤訊息來告訴你錯在哪邊。
- 破關後，在執行一次 `git-it` 就會回到關卡列表，進入下一個關卡吧！

**如果你在途中碰到任何問題，[開啟一個 issue](https://github.com/jlord/git-it/issues/new) 問我們，或是看看 [troubleshooting doc](https://github.com/jlord/git-it/blob/master/TROUBLESHOOT.md) 可能已經有解答了。**

---

#### 初學者小提示

**語法段落** 通常長這樣：`$ some code-stuff --here`。前面的 $ 金錢符號意思是這行指令是要輸入在終端機裡頭的，但在輸入指令的時候**不要**包含 $ 的符號。照這個例子來說，你實際上輸入的指令會是 `some code-stuff --here`。

**變數** 會在語法段或中用 `<變數名稱>` 來表示。當你要輸如一行指令的時候，把變數名稱，包含 `<>` 用對的內容取代掉。比如說，一個用來新增資料夾的指令是 `mkdir <資料夾名稱>`，你想要新增一個叫做 'octocat' 的資料夾，那叫要打 `mkdir octocat`。

**終端機、命令提示字元** 指的都是同一個東西，就是你在電影上常常看到的黑黑的、滿是數字和英文字的視窗。你可以透過文字指令，用它來和電腦溝通。

透過終端機可以叫電腦做非常多事情，像是刪除、重新命名、複製、新增檔案和資料夾；來回傳送檔案到各個不同的主機（像是把東西傳上 GitHub.com）或是你的電腦（也是一個主機！）。
