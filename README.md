# BlingBlingJS
<p style="text-align='center'">
  <img src="https://img.shields.io/travis/argyleink/blingblingjs/master.svg" alt="Build Status">
  <img src="https://img.shields.io/npm/dt/blingblingjs.svg" alt="Total Downloads">
  <img src="https://img.shields.io/npm/v/blingblingjs.svg" alt="Latest Release">
  <img src="https://img.shields.io/npm/l/blingblingjs.svg" alt="License">
</p>

> like [bling.js](https://gist.github.com/paulirish/12fb951a8b893a454b32), but more bling

###### Syntax Demos
```js
// import the bling or the blingbling
import $ from 'blingblingjs'      // es6 module support
const $ = require('blingblingjs') // commonjs support

// at a high level, this is what is included
$()           // select nodes
$().on        // add event listeners
$().off       // remove event listeners
$().attr      // CRUD attributes

// query the DOM easier
const [main_btn] = $('button[primary]')
const btns       = $('button')
const btnSpans   = $('span', btns)

// add events easier
main_btn.on('click', e => console.log(e.target))
btns.on('click', e => console.info(e.target))

// remove event listeners
const logEvent = e => console.log(e)
main_btn.on('contextmenu', logEvent)
main_btn.off('contextmenu', logEvent)

// convert nodes to have the bling sugar
let single            = document.querySelector('button')
let singles           = document.querySelectorAll('button')
let [sugared_single]  = $(single)
let sugared_singles   = $(singles)

// use native array methods on the nodes: forEach, map, reduce, filter
btns.forEach(btn => console.warn(btn))

// watch multiple events
$('h1').on('click mouseover', ({target}) => console.log(target.textContent))

// set attributes like normal
main_btn.attr('rad', true)

// get an attribute from a node
main_btn.attr('rad') // true

// set attributes with an object on a node
main_btn.attr({
  test: 'foo',
  hi: 'bye',
})

main_btn.attr('hi')         // "bye"

// remove an attribute
main_btn.attr('hi', null)   // "bye"
main_btn.attr('hi')         // attribute not found

// set attributes with an object on nodes
btns.attr({
  tests: 'foo',
  hi: 'bye',
})

// get attributes from multiple nodes
btns.map(btn => ({
  tests: btn.attr('tests'),
  hi: btn.attr('hi'),
}))
```

###### What for?
**Developer ergonomics!** 
If you agree with any of the following, you may appreciate this micro library:
* Love vanilla js, want to keep your code close to it
* Chaining is fun, Arrays are fun, essentially a functional programming fan
* Hate typing `document.querySelector` over.. and over.. 
* Hate typing `addEventLIstener` over.. and over..
* Really wish `document.querySelectorAll` had array methods on it..
* Confused that there is no `node.setAttributes({...})` or even better `nodeList.setAttributes({...})`
* Liked jQuery selector syntax

###### Why BlingBling?
- Minimal at 0.6kb (636 bytes)
- BlingBling supports ES6 module importing and common module loading
- Supports chaining
- Worth it's weight (should save more characters than it loads)
- Only enhances the nodes you query with it
- ES6 version of popular [bling.js](https://gist.github.com/paulirish/12fb951a8b893a454b32) by Paul Irish
- [Tested](https://github.com/argyleink/blingblingjs/blob/master/src/index.test.js)

<!-- [START getstarted] -->
## Getting Started

### Installation

To use BlingBlingJS in your project, run:

```bash
$ npm i blingblingjs
```
