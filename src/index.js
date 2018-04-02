// node decorators
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

// short querySelector: $('.foo') $('.child', context_node)
export const $ = (query, $context = document) =>
  Object.assign($context.querySelector(query), sugar)

// shorthand querySelectorAll: $$('.foo') $$('.child', context_node)
export const $$ = (query, $context = document) =>
  Object.assign(
    [...$context.querySelectorAll(query)]
    .map($el => Object.assign($el, sugar))
  , {
    on: function(names, fn) {
      this.forEach($el => $el.on(names, fn))
    },
    setAttributes: function(attrs) {
      this.forEach($el => $el.setAttributes(attrs))
    }
  })