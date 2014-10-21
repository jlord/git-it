# Git-it

![ss](https://raw2.github.com/jlord/git-it/master/git-it-ss.png)

これはGitとGithubを学ぶための [workshopper](https://github.com/rvagg/workshopper) のモジュールです。

ターミナル上に問題が表示され、それらを解くことで、自分自身で学習することができます。  
詳細は[nodeschool.io](http://nodeschool.io)をご覧ください。

---

**For developer documentation, see [CONTRIBUTING.md](https://github.com/jlord/git-it/blob/master/CONTRIBUTING.md).**

**Mentoring at an event with Git-it? Run through Git-it yourself and review [TROUBLESHOOT.md](https://github.com/jlord/git-it/blob/master/TROUBLESHOOT.md) for common things users run into**.

---

## 未来のForker, Brancher, そしてPull Requesterの皆さんこんにちは！

これはGitとGithubを問題をとくことで学習できるアプリです。  
MacのターミナルまたはWindowsのBash上でします。実際の_ターミナルと、実際の_GitとGithubを使って学習を進めます。  
すごいコマンドラインや、あなたの実際のGitHub.com上のアカウントににリポジトリを作成し、[contribution chart](https://github.com/blog/1360-introducing-contributions) に貢献の証である緑の貢献印を埋めることができます。

![contributions](https://raw2.github.com/jlord/git-it/master/ghcc.png)

学習できる項目を確認したい場合は、Git-itガイド内の [challenge table of contents](http://jlord.github.io/git-it) をご覧ください。

---

#### 必要要件:

`Git-it`を動かすためには事前にセットアップ必要です。  
しかし必要なものは全て無料もしくはオープンソースで提供されています。

- **Git**：これはあなたの変更を追う（トラックする）ものです
 - Windowsをお使いの場合は、[GitHub for Windows](http://windows.github.com)をダウンロードして下さい。  
   Gitと、ターミナルである**Git Shell**をインストールできます。
 - Macをお使いの場合は、[GitHub for Mac](http://mac.github.com)をダウンロードして下さい。  
   その後、Preferences > Advanced > Install Command Line Toolsを選択して、Gitをインストールしましょう。
- **Node.js**：`Git-it`はNode.jsで作成されています。  
  これはJavascriptをサーバで動かすためのエンジンで、バックグラウンドで動作します。  
  [ここ](http://nodejs.org/download/)からNode.jsをダウンロードして下さい。Windowsの場合は`.msi`、Macの場合は`.pkg`を選択してください
 - すでにNodeとnpmをインストールしている場合は、バージョンがv1.4.3以上であることを確認して下さい。```npm -v```のコマンドで確認できます。
- **テキストエディタ**：コードを編集するためにとても便利です。  
  [Atom](http://www.atom.io), [Sublime Text](http://www.sublimetext.com/2), [Textmate](http://macromates.com/download), [Brackets](http://brackets.io/)などがあります。
 - Git-itを行う際"コーディング"は行いません。  
   Mac/PCにデフォルトでインストールされている「メモ帳」や「テキストエディット」でも問題ありません。

#### Git-itをインストールする

必要要件を揃えたら、Git-itをインストールしましょう。

- ターミナルウィンドを開き、Git-itをグローバルにインストールします。グローバルにインストールすることにより、どこのディレクトリでも使えるようにします。  
  Node.jsに付属している[NPM](http://www.npmjs.org)を用いて、Node.jsのモジュールである`Git-it`を下記コマンドでインストールしましょう。

```bash
$ npm install -g git-it
```

- 権限不足によるエラーが出た場合は`sudo`をコマンドの先頭に追加してください：`sudo npm install -g git-it`
- `Git-it`のインストールが完了したら下記コマンドで実行できるようになっています。

```bash
$ git-it
```
- これで準備は完了です！最初の課題を選んで、エンターキーを押してはじめましょう！

#### 操作方法

- `git-it`
- git-itが起動し、メニューが表示されたら、矢印キー（↑↓）を使って最初の問題をエンターキーで選択しましょう。
- 問題が表示されたら、画面下に表示される指示に従ってガイドを開きましょう。  
ウェブ版のガイドは[ここ](http://jlord.github.io/git-it)を参照してください。
![img](https://raw.githubusercontent.com/jlord/git-it/master/guide-ss.png)

- ガイドにある指示に従って問題を進めて課題を解きましょう。
- 問題が終了したら`git-it verify`を実行しましょう。
- もし問題が正しく回答されていない場合は、Git-itがどこが間違っているかを指摘し、解説します。
- 問題が終わったら、`git-it`をもう一度起動して次の問題に進みましょう！

**もし何か質問がある場合は[issue](https://github.com/jlord/git-it/issues/new)を作成するか、[troubleshooting doc](https://github.com/jlord/git-it/blob/master/TROUBLESHOOT.md)をご覧ください。

---

#### 始めるためのヒント

コマンド解説では、`$ some code-stuff --here`のように、表記されています。  
先頭のドルマーク_($)_は"ユーザが入力するコマンド"という意味で使用されています。  
実際にコマンドを実行する際は、`some code-stuff --here`のように、先頭にドルマークを付ける必要はありません。

コマンド解説での表記内にある、`<VARIABLENAME>`は変数を表しています。  
実際にコマンドを実行する場合は適切な値に置き換えてください。例えば、新しいディレクトリを作成する  
`mkdir <FOLDERNAME>`というコマンドがあります。'octocat'というディレクトリを作成したい場合は  
`mkdir octocat`のようになります。

「コマンドライン」「ターミナル」「bash」、これらは全てMS-DOSや、ｽｰﾊﾟｰﾊｶｰが使っているような  
黒い画面に文字だけが表示さている画面のことです。コンピュータをコマンドでコントロールできるとても強力なツールです。

ターミナルを使って、ファイルの削除、リネーム、ファイルやフォルダの作成やコピー、  
スクリプトの実行、GitHub.comなどへのサーバ間の通信など、いろいろなことができます。
