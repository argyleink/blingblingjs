const sugar = {
  on: function(names, fn, options) {
    names
      .split(' ')
      .forEach(name =>
        this.addEventListener(name, fn, options))
    return this
  },
  off: function(names, fn, options) {
    names
      .split(' ')
      .forEach(name =>
        this.removeEventListener(name, fn, options))
    return this
  },
  attr: function(attr, val) {
    if (val === undefined) return this.getAttribute(attr)

    val == null
      ? this.removeAttribute(attr)
      : this.setAttribute(attr, val)

    return this
  }
}

const _60fps = 1000/60

export const rAF = typeof requestAnimationFrame !== 'undefined' ?
  requestAnimationFrame :
  (async (callback) => new Promise((resolve) => setTimeout(() => { resolve(); callback() }, _60fps)))
if (typeof requestAnimationFrame === 'undefined') console.error('requestAnimationFrame not found - falling back to 60 fps')

export const rIC = typeof requestIdleCallback !== 'undefined' ?
  requestIdleCallback :
  (async (callback) => new Promise((resolve) => setTimeout(() => { resolve(); callback() }, _60fps)))
if (typeof requestAnimationFrame === 'undefined') console.error('requestIdleCallback not found - falling back to 60 fps')

export default function $(query, $context = document) {
  let $nodes = query instanceof NodeList || Array.isArray(query)
    ? query
    : query instanceof HTMLElement || query instanceof SVGElement
      ? [query]
      : $context.querySelectorAll(query)

  if (!$nodes.length) $nodes = []

  return Object.assign(
    Array.from($nodes).map($el => Object.assign($el, sugar)), 
    {
      on: function(names, fn, options) {
        this.forEach($el => $el.on(names, fn, options))
        return this
      },
      off: function(names, fn, options) {
        this.forEach($el => $el.off(names, fn, options))
        return this
      },
      attr: function(attrs, val) {
        if (typeof attrs === 'string' && val === undefined)
          return this[0].attr(attrs)

        else if (typeof attrs === 'object') 
          this.forEach($el =>
            Object.entries(attrs)
              .forEach(([key, val]) =>
                $el.attr(key, val)))

        else if (typeof attrs == 'string')
          this.forEach($el => $el.attr(attrs, val))

        return this
      }
    }
  )
}
