# Website Performance Optimization Project

- Base file location is [here](https://github.com/udacity/frontend-nanodegree-mobile-portfolio)

**Pre-requisite**

- Download [ngrok](https://ngrok.com/download)
- Install [http-server](https://www.npmjs.com/package/http-server) globally by `npm install -g http-server`, now you can run `http-server` to run local server
- To test pagespeed, [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
- Use [gulp](https://www.npmjs.com/package/gulp) for build tool instead of Grunt

Create a `package.json` by
```
npm init
```
And fill up as you want, then install packages we need for this project
```
npm install --save-dev gulp gulp-image-resize gulp-imagemin gulp-minify-css gulp-uglify gulp-minify-html
```
Then, create `Gulpfile.js` in root directory.
We can run `gulp` (default). Follow some tutorials like below or Google it!

- https://www.npmjs.com/package/gulp-image-resize
- https://www.npmjs.com/package/gulp-imagemin
- https://www.npmjs.com/package/gulp-minify-css
- https://www.npmjs.com/package/gulp-uglify
- https://www.npmjs.com/package/gulp-minify-html
- [Gulp tutorial](http://www.sitepoint.com/introduction-gulp-js/)
<hr />

### 1st Optimization Project - Optimize `./src/index.html`

- [Source (before minimized) folder for this project - /src/]()
- [Minimized dist folder for this project - /dist/]()

#### What I did

- Added `media="print"` in `<link href="css/print.css" rel="stylesheet" >`
- Added `async` in `<script src="http://www.google-analytics.com/analytics.js"></script>`
- Resized the pizzeria image
- Optimized images in the `dist/images` with [ImageOptim](https://imageoptim.com/)in the
- Minimized CSS and make it inline instead of requesting
- Minimized JS file and make it inline instead of requesting
- Not using Google Font if not necessary
- Minimized HTML


<hr />
### 2nd Optimization Project - Optimize `./src/views/pizza.html`

- [Source (before minimized) folder for this project - /src/views/]()
- [Minimized dist folder for this project - /dist/views/]()

#### What I did
- Added missing meta tags and title tag
```
<!-- Added missing meta tags and title tag -->
<meta charset=utf-8>
<meta name=viewport content="width=device-width, initial-scale=1">
<meta name=description content="Cam's Pizzeria">
<meta name=author content="Yuichi Hagio">
<title>Cam's Pizzeria</title>
```
- Resized the iamges
- Minimized CSS and make it inline instead of requesting
- Minimized JS file and make it inline instead of requesting
- Optimized images in `dist/views/images` with [ImageOptim](https://imageoptim.com/)
- Minimized HTML
