var fs = require('fs')
var marked = require('marked')
var glob = require('glob')

glob("**/*.txt", function (err, files) {
  if (err) return console.log("Err globbing")
  var matches = []
  files.forEach(function(file) {
    if (file.match('problems/')) {
      matches.push(file)
    } else return
  })
  convertToHTML(matches)
})

function convertToHTML(files) {
  files.forEach(function(file) {
    var filename = createFilename(file)
    var txt = fs.readFileSync(file)
    var html = marked(txt.toString())
    fs.writeFileSync('html/' + filename + '.html', html)
  })
}

function createFilename(origname) {
  var string = origname.split('/').splice(1, 2).join("_")
  return string.toString().replace('.txt', '')
}
