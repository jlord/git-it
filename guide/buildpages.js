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
  console.log()
  files.forEach(function(file) {
    // shouldn't have to do this if my
    // mapping were correct
    if (!file) return
    var content = { 
      header: "hi", 
      footer: "bye", 
      body: fs.readFileSync(file).toString()
    }
    var shortname = makeShortname(file)
    var template = Handlebars.compile(layout)
    var final = template(content)
    fs.writeFileSync(__dirname + '/challenges/' + shortname + '.html', final)
  })
}

function makeShortname(filename) {
  return filename.split('/').pop().replace('html','')
}



