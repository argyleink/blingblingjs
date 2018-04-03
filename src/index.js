const sugar = {
  on: function(names, fn) {
    names
      .split(' ')
      .forEach(name =>
        this.addEventListener(name, fn))
  },
  setAttributes: function(attrs) {
    Object.entries(attrs)
      .forEach(([key, val]) =>
        this.setAttribute(key, val))
  }
}

export const $ = (query, $context = document) =>
  query.nodeType
    ? Object.assign(query, sugar)
    : Object.assign($context.querySelector(query), sugar)

export const $$ = (query, $context = document) => {
  const nodes = NodeList.prototype.isPrototypeOf(query)
    ? query
    : $context.querySelectorAll(query)

  return Object.assign(
    [...nodes].map($el => Object.assign($el, sugar)),
    {
      on: function(names, fn) {
        this.forEach($el => $el.on(names, fn))
      },
      setAttributes: function(attrs) {
        this.forEach($el => $el.setAttributes(attrs))
      }
    }
  )
}