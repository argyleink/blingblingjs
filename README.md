# BlingBlingJS
<p style="text-align='center'">
  <img src="https://img.shields.io/travis/argyleink/blingblingjs/master.svg" alt="Build Status">
  <img src="https://img.shields.io/npm/dt/blingblingjs.svg" alt="Total Downloads">
  <img src="https://img.shields.io/npm/v/blingblingjs.svg" alt="Latest Release">
  <img src="https://img.shields.io/npm/l/blingblingjs.svg" alt="License">
</p>

> like [bling.js](https://gist.github.com/paulirish/12fb951a8b893a454b32), but more bling

<br>

###### Getting Started
### Installation
```bash
npm i blingblingjs
```

### Importing
```js
// import the blingbling y'all
import $ from 'blingblingjs'                // es6 module
const $ = require('blingblingjs')           // commonjs

// or from Pika CDN! https://cdn.pika.dev/blingblingjs/v2
```

<br>

###### Syntax

### Quick Overview
```js
$()        // select nodes in document or pass nodes in
$().on     // add multiple event listeners to multiple nodes
$().off    // remove multiple event listeners from multiple nodes
$().attr   // CRUD attributes on nodes
$().map    // use native array methods
```

### Queries
```js
// get nodes from the document
const btns         = $('button')            // blingbling always returns an array
const [first_btn]  = $('button[primary]')   // destructure shortcut for 1st/only match
const btn_spans    = $('span', btns)        // provide a query context by passing a 2nd param of node/nodes

// cover DOM nodes in bling
const [sugared_single]  = $(document.querySelector('button'))
const sugared_buttons   = $(document.querySelectorAll('button'))
```

### Array Methods
```js
$('button').forEach(...)
$('button').map(...)

const btns = $('button')
btns.filter(...)
btns.reduce(...)
btns.flatMap(...)
...
```

### Events
```js
// single events
first_btn.on('click', ({target}) => console.log(target))
$('button[primary]').on('click', e => console.log(e))

// multiple events
$('h1').on('click touchend', ({target}) => console.log(target))

// remove events
const log_event = e => console.warn(e) // must have a reference to the original function
main_btn.on('contextmenu', log_event)
main_btn.off('contextmenu', log_event)
```

### Attributes
```js
// set an attribute
$('button.rad').attr('rad', true)

// set multiple attributes
const [rad_btn] = $('button.rad')
rad_btn.attr({
  test: 'foo',
  hi:   'bye',
})

// get an attribute
rad_btn.attr('rad')        // "true"
rad_btn.attr('hi')         // "bye"

// get multiple attributes
$('button').map(btn => ({
  tests:  btn.attr('tests'),
  hi:     btn.attr('hi'),
}))

// remove an attribute
rad_btn.attr('hi', null)   // set to null to remove
rad_btn.attr('hi')         // attribute not found

// remove multiple attributes
btns.attr({
  test:   null,
  hi:     null,
})
```

<br>
<br>

###### What for?
**Developer ergonomics!** 
If you agree with any of the following, you may appreciate this micro library:
* Love vanilla js, want to keep your code close to it
* Chaining is fun, Arrays are fun, essentially a functional programming fan
* Hate typing `document.querySelector` over.. and over.. 
* Hate typing `addEventListener` over.. and over..
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
