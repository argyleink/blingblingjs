# blingblingjs
> jQuery-esque shorthands for long named browser functions... and some

[![Build Status: Linux](https://travis-ci.org/argyleink/blingblingjs.svg?branch=master)](https://travis-ci.org/argyleink/blingblingjs)

## Why BlingBling? (hehe)
- Minimal and fast
- Syntax you already know
- Only enhances the nodes you query with it
- Tested

## Usage
### Add BlingBling to your project
To install and set up BlingBling, run:

```console
$ npm i blingblingjs
```

### Import or require it

```js
import { $, $$ } from 'blingblingjs'

$('#target').on('click touchstart', ({target}) => ...)
$$('figcaption').on('mouseover touchmove', e => ...)
```


