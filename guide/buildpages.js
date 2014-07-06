var Handlebars = require('handlebars')
var fs = require('fs')
var glob = require('glob')

var layout = fs.readFileSync(__dirname + '/layout.hbs').toString()

// I can probably use glob better to avoid
// finding the right files within the files
glob("**/*.html", function (err, files) {
  // console.log(files)
  if (err) return console.log(err)
  var matches = files.map(function(file) {
    if (file.match('guide/raw-content/')) {
      return file
    }
  })
  // console.log(matches)
  buildPage(matches)
})

function buildPage(files) {
  files.forEach(function(file) {
    if (!file) return
    var content = {header: "hi", footer: "bye", body: fs.readFileSync(file).toString()}
    var template = Handlebars.compile(layout)
    var final = template(content)
    console.log(final)
  })
}


