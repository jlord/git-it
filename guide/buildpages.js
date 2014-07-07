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
  counter = 1
  files.forEach(function(file) {
    // shouldn't have to do this if my
    // mapping were correct
    if (!file) return
    var content = { 
      header: buildHeader(file, counter), 
      footer: fs.readFileSync(__dirname + '/partials/footer.html').toString(), 
      body: fs.readFileSync(file).toString()
    }
    var shortname = makeShortname(file)
    var template = Handlebars.compile(layout)
    var final = template(content)
    fs.writeFileSync(__dirname + '/challenges/' + shortname + 'html', final)
    counter++
  })
  // hard coded right now because, reasons
  if (counter === 12) console.log("Built!")
}

function makeShortname(filename) {
  return filename.split('/')
    .pop().replace('html','')
    .replace('_problem', '')
}

function makeTitleName(filename) {
  var short = makeShortname(filename).split('_')
  return short.join(' ').replace('.', '')
  // what about 'arnt'?
}

function buildHeader(filename, counter) {
  var title = makeTitleName(filename)
  var source = fs.readFileSync(__dirname + '/partials/header.html').toString()
  var template = Handlebars.compile(source)
  var content = {challengetitle: title, challengenumber: counter }
  return template(content)
}



