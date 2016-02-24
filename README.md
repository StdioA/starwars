# STAR WARS

![subject](https://img.shields.io/badge/subject-homework%20of%20a%20friend-brightgreen.svg) ![star](https://img.shields.io/badge/Stars-100M+-green.svg?style=social) ![fake!](https://img.shields.io/badge/%E2%86%90-Just%20a%20joke>__<-red.svg?style=flat)

A Star Wars quotes generator with react, my first app using `React.js`.

## How to Run

### For normal users

* If you have python installed:  
  
  ``` bash
    cd public
    python -m SimpleHTTPServer
  ```
  
    or just type `sh server.sh`.

* If you have `node.js` installed:  
  
  `npm install` and `npm start`.

* If you have none of above installed:  
  
  Build a static file server under the folder `public/`, or just visit <http://stdioa.github.io/starwars/>.

### For developers

1. Install all the development dependencies.
    `npm install --save-dev`

2. Run `gulp server`. 

    This will watch the `min.js` file under `build`. Once you change the JSX file, it will be transformed and compressed into `build/*.min.js` automatically, after that your webpage will reload.  

    See [gulpfile](./gulpfile.js) for more information.

## License

[ISC](https://opensource.org/licenses/ISC)

## Original README

> Star Wars quotes generator with React

<!-- START doctoc generated TOC please keep comment here to allow auto update -->

<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Intro](#intro)
- [Features](#features)
- [Quotes](#quotes)
- [Just tell me what to do](#just-tell-me-what-to-do)
- [Don't forget](#dont-forget)
- [Licence](#licence)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->



## Intro

A generator of famous Star Wars quote !

## Features

1. As a User, I want to generate a random quote.
2. As a User, I want to see the character name of the quote.
3. As a User, I want to generate a random quote from an available character.

## Quotes

Author and quotes are defined inside [index.js](./index.js)

## Just tell me what to do

1. Fork the project via `github`
2. Clone the project `git clone https://github.com/YOUR_USERNAME/starwars`
3. Code [features](#features) in a web page with [React](https://facebook.github.io/react/)
4. Don't forget to commit and push

## Don't forget

**Focus on React library**

## Licence

[Uncopyrighted](http://zenhabits.net/uncopyright/)
