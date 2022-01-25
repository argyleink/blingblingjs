import test from 'ava'
import browserEnv from 'browser-env'

import $, {rAF, rIC} from '../dist/index.js'

browserEnv()

test.afterEach.always(t => {
  document.body.innerHTML = ''
})

test('$("div")', t => {
  const div = document.createElement('div')
  document.body.appendChild(div)

  t.is($('div')[0], div)
  t.pass()
})

test('$(node)', t => {
  const div = document.createElement('div')

  t.truthy($(div).on)
  t.truthy($(div).attr)
  t.pass()
})

test('$("bad_query")', t => {
  t.truthy($('bad').length == 0)
  t.pass()
})

test('$("div", parent)', t => {
  const div = document.createElement('div')
  const p = document.createElement('p')

  div.appendChild(p)
  div.appendChild(p)

  t.is($('p', div)[0], p)
  t.pass()
})

test('$("div") multiple', t => {
  const div = document.createElement('div')
  const len = 3

  for (var i = 0; i < len; i++)
    document.body.appendChild(div)

  t.is($('div').length, len - 1)
  t.pass()
})

test('$(nodes)', t => {
  const div = document.createElement('div')
  const len = 3

  for (var i = 0; i < len; i++)
    document.body.appendChild(div)

  const nodes = document.querySelectorAll('div')

  t.truthy($(nodes).on)
  t.truthy($(nodes).attr)
  t.pass()
})

test('$("div", parent) multiple', t => {
  const div = document.createElement('div')
  const p = document.createElement('p')
  const len = 3

  for (var i = 0; i < len; i++)
    div.appendChild(p)

  t.is($('p', div).length, div.querySelectorAll('p').length)
  t.pass()
})

test('$("p").map(el => ...)', t => {
  const div = document.createElement('div')
  const p = document.createElement('p')
  const len = 3

  for (var i = 0; i < len; i++)
    document.body.appendChild(p)

  t.is($('p').map, Array.prototype.map)
  t.is($('p').filter, Array.prototype.filter)
  t.is($('p').reduce, Array.prototype.reduce)
  t.pass()
})

test('$("button").attr({...})', t => {
  const btn = document.createElement('button')

  document.body.appendChild(btn)

  t.falsy(btn.hasAttribute('foo'))
  $('button').attr({
    foo: 'bar'
  })
  t.truthy(btn.hasAttribute('foo'))

  t.pass()
})

test('$("button").attr({...}) multiple', t => {
  const btn = document.createElement('button')

  document.body.appendChild(btn)
  document.body.appendChild(btn)

  t.falsy(btn.hasAttribute('foo'))
  $('button').attr({
    foo: 'bar'
  })
  t.truthy(btn.hasAttribute('foo'))
  
  t.pass()
})

test('$("button").attr("foo", falsy_value)', t => {
  const btn = document.createElement('button')

  document.body.appendChild(btn)

  t.falsy(btn.hasAttribute('foo'))
  const $btn = $('button')
  const value = 0
  $btn.attr('foo', value)
  t.is($btn.attr('foo'), value.toString())

  t.pass()
})

test.cb('$("button").on("click", e => ...)', t => {
  const btn = document.createElement('button')
  btn.classList.add('test')
  document.body.appendChild(btn)

  $('.test').on('click', e => t.end())
  btn.click()
})

test('$("button").on("click ...", e => ...) multiple', t => {
  t.plan(2)

  const btn = document.createElement('button')

  $(btn).on('click dblclick', e => t.pass())
  btn.click()
  btn.dispatchEvent(new window.MouseEvent('dblclick', {
    bubbles: true
  }))
})

test.cb('$(node).on("click", e => ...)', t => {
  const btn = document.createElement('button')

  $(btn).on('click', e => t.end())
  btn.click()
})

test.cb('$("button").on("click", e => ...) multiple', t => {
  const btn = document.createElement('button')
  btn.classList.add('test')

  document.body.appendChild(btn)
  document.body.appendChild(btn)

  $('.test').on('click', e => t.end())
  btn.click()
})

test('$(nodes).on("click ...", e => ...) multiple', t => {
  t.plan(2)

  const btn = document.createElement('button')
  document.body.appendChild(btn)
  document.body.appendChild(btn)
  const list = document.querySelectorAll('button')

  $(list).on('click dblclick', e => t.pass())
  btn.click()
  btn.dispatchEvent(new window.MouseEvent('dblclick', {
    bubbles: true
  }))
})

test.cb('$(node).on("click", e => ...) multiple', t => {
  const btn = document.createElement('button')
  document.body.appendChild(btn)
  document.body.appendChild(btn)
  const list = document.querySelectorAll('button')

  $(list).on('click', e => t.end())
  btn.click()
})

test.cb('$("button").on("click", e => ..., { once:true })', t => {
  t.plan(3)

  const btn = document.createElement('button')
  btn.classList.add('test')
  document.body.appendChild(btn)

  let eventCount = 0
  $('.test').on('click', e => {
    eventCount++
    t.end()
  }, { once:true })

  t.is(eventCount, 0)

  btn.click()
  t.is(eventCount, 1)

  btn.click()
  t.is(eventCount, 1)
})

test('$("button").on("click ...", e => ..., { once:true }) multiple', t => {
  t.plan(5)

  const btn = document.createElement('button')

  let eventCount = 0
  $(btn).on('click dblclick', e => {
    eventCount++
    t.end()
  }, { once:true })

  t.is(eventCount, 0)

  btn.click()
  t.is(eventCount, 1)

  btn.dispatchEvent(new window.MouseEvent('dblclick', {
    bubbles: true
  }))
  t.is(eventCount, 2)

  btn.click()
  t.is(eventCount, 2)

  btn.dispatchEvent(new window.MouseEvent('dblclick', {
    bubbles: true
  }))
  t.is(eventCount, 2)
})

test.serial('rAF', async (t) => {
  rAF ? rAF(_ => t.pass()) : t.pass()
})

test.serial('rIC', async (t) => {
  rIC ? rIC(_ => t.pass()) : t.pass()
})
