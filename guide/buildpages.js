var Handlebars = require('handlebars')
var fs = require('fs')
var glob = require('glob')

var layout = fs.readFileSync(__dirname + '/layout.hbs').toString()
var thefiles = []
var lang = process.argv[2]

// I can probably use glob better to avoid
// finding the right files within the files
var rawFiles = __dirname + (lang ? '/raw-content-' + lang + '/' : '/raw-content/')
var builtContent = __dirname + (lang ? '/challenges-' + lang + '/' : '/challenges/')
console.log(rawFiles, builtContent)

glob("*.html", {cwd: rawFiles}, function (err, files) {
  thefiles = files
  if (err) return console.log(err)
  // var matches = files.map(function(file) {
  //   if (file.match('guide/raw-content/')) {
  //     return file
  //   }
  // })
  buildPage(files)
})

function buildPage(files) {
  files.forEach(function(file) {
    // shouldn't have to do this if my
    // mapping were correct
    if (!file) return
    var content = {
      header: buildHeader(file),
      footer: buildFooter(file),
      body: fs.readFileSync(rawFiles + file).toString()
    }
    var shortname = makeShortname(file)
    var template = Handlebars.compile(layout)
    var final = template(content)
    fs.writeFileSync(builtContent + shortname + 'html', final)
  })
  // hard coded right now because, reasons
  console.log("Built!")
}

function makeShortname(filename) {
  // FROM guide/raw-content/10_merge_tada.html
  // TO merge_tada.
    return filename.split('/').pop().split('_')
      .slice(1).join('_').replace('html', '')
}

function makeTitleName(filename) {
  var short = makeShortname(filename).split('_')
    .join(' ').replace('.', '')
  return grammarize(short)
}

function buildHeader(filename) {
  var num = filename.split('/').pop().split('_')[0]
  var title = makeTitleName(filename)
  var source = fs.readFileSync(__dirname + '/partials/header.html').toString()
  var template = Handlebars.compile(source)
  var content = {challengetitle: title, challengenumber: num }
  return template(content)
}

function grammarize(name) {
  var correct = name
  var wrongWords = ['arent', 'githubbin', 'its']
  var rightWords = ["aren't", "GitHubbin", "it's"]

  wrongWords.forEach(function(word, i) {
    if (name.match(word)) {
      correct = name.replace(word, rightWords[i])
    }
  })
  return correct
}

function buildFooter(file) {
  var num = file.split('/').pop().split('_')[0]
  var data = getPrevious(num)
  data.lang = lang ? '-' + lang : ''
  var source = fs.readFileSync(__dirname + '/partials/footer.html').toString()
  var template = Handlebars.compile(source)
  return template(data)
}

function getPrevious(num) {
  var pre = parseInt(num) - 1
  var next = parseInt(num) + 1
  var preurl = ''
  var prename = ''
  var nexturl = ''
  var nextname = ''
  thefiles.forEach(function(file) {
    if (pre === 0) {
      prename = "All Challenges"
      preurl = "../index.html"
    } else if (file.match(pre)) {
      prename = makeTitleName(file)
      var getridof = pre + '_'
      preurl = file.replace(getridof, '')
    }
    if (next === 12) {
      nextname = "Done!"
      nexturl = '../index.html'
    } else if (file.match(next)) {
      nextname = makeTitleName(file)
      var getridof = next + '_'
      nexturl = file.replace(getridof, '')
    }
  })
  return {prename: prename, preurl: preurl,
      nextname: nextname, nexturl: nexturl}
}
