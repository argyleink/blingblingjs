# BlingBlingJS
<p style="text-align='center'">
  <img src="https://img.shields.io/travis/argyleink/blingblingjs/master.svg" alt="Build Status">
  <img src="https://img.shields.io/npm/dt/blingblingjs.svg" alt="Total Downloads">
  <img src="https://img.shields.io/npm/v/blingblingjs.svg" alt="Latest Release">
  <img src="https://img.shields.io/npm/l/blingblingjs.svg" alt="License">
</p>

> jQuery-esque shorthands for common long named DOM methods

###### What for?
**Developer ergonomics!** 
If you agree with any of the following, you may appreciate this tiny library:
* Love vanilla js
* Hate typing `document.querySelector` over.. and over.. 
* Hate typing `addEventLIstener` over.. and over..
* Really wish `document.querySelectorAll` had array methods on it.. without manual destructering
* Confused that there is no `node.setAttributes({...})` or even better `nodeList.setAttributes({...})`
* Loved jQuery selector syntax

###### Why BlingBling?
- Minimal at 572 bytes gzipped
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

### Usage

BlingBling supports ES6 module importing and common module loading

**Examples**
```js
// import the bling or the blingbling
import $ from 'blingblingjs'      // es6 module support
const $ = require('blingblingjs') // commonjs support

// query the DOM easier
const main_btn   = $('button[primary]')
const btns       = $('button')
const btnSpans   = $('span', btns)

// add events easier
main_btn.on('click', e => console.log(e.target))
btns.on('click', e => console.info(e.target))

// convert nodes to have the bling sugar
let single = document.querySelector('button')
let singles = document.querySelectorAll('button')
let sugared_single = $(single)
let sugared_singles = $(singles)

// use native array methods on the nodes: map, reduce, filter
btns.forEach(btn => console.warn(btn))

// watch multiple events
$('h1').on('click mouseover', ({target}) => console.log(target.textContent))

// set attributes with an object on a node, or nodes
main_btn.attr({
  test: 'foo',
  hi: 'bye',
})

btns.attr({
  tests: 'foo',
  hi: 'bye',
})
```
