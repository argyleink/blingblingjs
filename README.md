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
import $ from 'blingblingjs'                // es6 module support
const $ = require('blingblingjs')           // commonjs support

// essentials
$()                                         // select nodes in document
$().on                                      // add event listeners to nodes
$().off                                     // remove event listeners from nodes
$().attr                                    // CRUD attributes on nodes

// query the DOM in a modern, shorthand way
const [first_btn]  = $('button[primary]')   // destructure shortcut for 1st/only match
const btns         = $('button')            // blingbling always returns an array
const btn_spans    = $('span', btns)        // provide a query context by passing a 2nd param of node/nodes

// use native array methods on the nodes: forEach, map, reduce, filter
btns.forEach(btn, console.log)

// add events easier
first_btn.on('click', console.info)
$('button[primary]').on('click', console.info)

// watch multiple events
$('h1').on('click mouseover', ({target}) => console.log(target))

// remove events easier
const log_event = e => console.warn(e)
main_btn.on('contextmenu', log_event)
main_btn.off('contextmenu', log_event)

// cover nodes in bling
const [sugared_single]  = $(document.querySelector('button'))
const sugared_buttons   = $(document.querySelectorAll('button'))

// set attributes
const [rad_btn] = $('button.rad')
rad_btn.attr('rad', true)

rad_btn.attr({
  test: 'foo',
  hi:   'bye',
})

// get attributes
rad_btn.attr('rad')        // true
rad_btn.attr('hi')         // "bye"

btns.map(btn => ({
  tests:  btn.attr('tests'),
  hi:     btn.attr('hi'),
}))

// remove attributes
rad_btn.attr('hi', null)   // "bye"
rad_btn.attr('hi')         // attribute not found
btns.attr({
  test:   null,
  hi:     null,
})
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
