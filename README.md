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
- use [imageOptim](https://imageoptim.com/) or (https://www.npmjs.com/package/gulp-imagemin)
- https://www.npmjs.com/package/gulp-minify-css)
- https://www.npmjs.com/package/gulp-uglify
- https://www.npmjs.com/package/gulp-minify-html
- [Gulp tutorial](http://www.sitepoint.com/introduction-gulp-js/)
<hr />

### 1st Optimization Project - Optimize ./src/index.html

- [Source (before minimized) folder for this project - /src/]()
- [Minimized dist folder for this project - /dist/]()

#### What I did

- Added `media="print"` in `<link href="css/print.css" rel="stylesheet" >`
- Added `async` in `<script src="http://www.google-analytics.com/analytics.js"></script>`
- Load Google Font (render blocking CSS) via Javascript - Reference to [Optimize CSS Delivery](https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery)
- Resized the `pizzeria.jpg` image using gulp `gulp-image-resize`
- Optimized images in the `dist/img` with [ImageOptim](https://imageoptim.com/)in the
- Minimized CSS using gulp `gulp-minify-css`. Then, move `style.css` content inside index.html `<style></style>` to avoid requesting it
- Minimized JS file using gulp `gulp-uglify`
- Minimized HTML


<hr />
### 2nd Optimization Project - Optimize ./src/views/pizza.html

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
- Resized the images using gulp `gulp-image-resize`
- Minimized CSS (style.css and bootstrap-grid.css) using gulp `gulp-minify-css` and make it inline instead of requesting in the `<style></style>` in `<head></head>`
- Minimized `main.js` file using gulp `gulp-uglify` and make it inline in the `<script></script>` at the bottom of `<body></body>` instead of requesting
- Optimized images in `dist/views/images` with [ImageOptim](https://imageoptim.com/)
- Minimized HTML


### Changelog on Aug 18-19, 2015 in views/js/main.js
- **Line.404** : Used `"use strict";` inside function in `views/js/main.js`. [Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
- **Line.411** : Use "getElementById" instead of "querySelector", and store it in a variable outside the function
- **Line.434** : Use "getElementById" instead of "querySelector" since Web API call is faster.
- **Line.462** : Used `document.getElementsByClassName()` instead of using `document.querySelectorAll()` since Web API call is faster.
- **Line.463** : Store the reference in a variable, `pizzaElementArrays`. DRY.
- **Line.466-492** : Moved "determineDx()" (Line.432-457) content below since the function loops through all whole "pizzaElementArrays" but it is not necessary since most of values are same.
- **Line.496** : Save the array length in the variable "len", so the array's length property is not accessed to check its value at each iteration.
- **Line.498-499** : Moved these 2 lines outside the loop with a little modification. DRY.
- **Line.517** : Moved pizzasDiv to outside the for loop to avoid calling the dom repeatedly
- **Line.552** : Use getElementsByClassName instead of querySelectorAll since Web API call is faster.
- **Line.555** : Defined the variable "phase" outside the loop to avoid creating a new one repeatedly
- **Line.560** : Created variable "calculated" instead of running "document.body.scrollTop / 1250" multiple times
- **Line.561** : Save the array length in the variable "len", so the array's length property is not accessed to check its value at each iteration.
- **Line.585** : Initialize the variable "elem" outside the for-loop to prevent it is being created everytime the loop goes through
- **Line.588** : Changed "querySelector" to "getElementById" since Web API call is faster, and initialize the variable and store the reference outside the loop
