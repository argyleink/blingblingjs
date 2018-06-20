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

export const $ = (query, $context = document) => {
  if (query.nodeType) 
    return Object.assign(query, sugar)
  else {
    const matches = $context.querySelector(query)
    if (!matches && !query.nodeType) return null
    return Object.assign(matches, sugar)
  }
}

export const $$ = (query, $context = document) => {
  const nodes = NodeList.prototype.isPrototypeOf(query)
    ? query
    : $context.querySelectorAll(query)

  if (!nodes.length) return null

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