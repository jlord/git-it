var Handlebars = require('handlebars')
var fs = require('fs')
var glob = require('glob')

var layout = fs.readFileSync(__dirname + '/layout.hbs').toString()

// I can probably use glob better to avoid
// finding the right files within the files
glob("**/*.html", function (err, files) {
  if (err) return console.log(err)
  var matches = files.map(function(file) {
    if (file.match('guide/raw-content/')) {
      return file
    }
  })
  buildPage(matches)
})

function buildPage(files) {
  files.forEach(function(file) {
    // shouldn't have to do this if my
    // mapping were correct
    if (!file) return
    var content = { 
      header: buildHeader(file), 
      footer: fs.readFileSync(__dirname + '/partials/footer.html').toString(), 
      body: fs.readFileSync(file).toString()
    }
    var shortname = makeShortname(file)
    var template = Handlebars.compile(layout)
    var final = template(content)
    fs.writeFileSync(__dirname + '/challenges/' + shortname + 'html', final)
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



