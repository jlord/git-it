This folder contains the content and scripts for building the HTML guide component to Git-it.

_First, make sure once you've cloned `git-it` that you run `npm-install` to fetch the modules you'll need._

### To Edit Challenge Content

Edit `.html` files in /raw-content.

### To Rebuild all pages

In `/git-it` in terminal, run `npm run build`.

#### English only

In `/git-it` in terminal, run `npm run build-english`.

#### Traditional Chinese only

In `/git-it` in terminal, run `npm run build-zhtw`.

### To Edit Styles and Layouts

The HTML for the header and footer are in `/partials` and the assests (css, js and images) are in `/assets`. The layout templated used for the pages is `layout.hbs`.

### About the Wayz

The `buildpages.js` contains all the scripting for creating the sites. It pulls the body content from `/raw-content`, the header and footer content from `/partials` and the layout template form `layout.hbs`.

The `index.html` page is currently built bespoke, by hand, such artisan. Wow.
