(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.$ = {}));
}(this, function (exports) { 'use strict';

  const sugar = {
    on: function(names, fn, options) {
      names
        .split(' ')
        .forEach(name =>
          this.addEventListener(name, fn, options));
      return this
    },
    off: function(names, fn, options) {
      names
        .split(' ')
        .forEach(name =>
          this.removeEventListener(name, fn, options));
      return this
    },
    attr: function(attr, val) {
      if (val === undefined) return this.getAttribute(attr)

      val == null
        ? this.removeAttribute(attr)
        : this.setAttribute(attr, val);

      return this
    }
  };

  const rAF = typeof requestAnimationFrame !== 'undefined' && requestAnimationFrame;
  const rIC = typeof requestIdleCallback !== 'undefined' && requestIdleCallback;

  function $(query, $context = document) {
    let $nodes = query instanceof NodeList || Array.isArray(query)
      ? query
      : query instanceof HTMLElement || query instanceof SVGElement
        ? [query]
        : $context.querySelectorAll(query);

    if (!$nodes.length) $nodes = [];

    return Object.assign(
      Array.from($nodes).map($el => Object.assign($el, sugar)), 
      {
        on: function(names, fn, options) {
          this.forEach($el => $el.on(names, fn, options));
          return this
        },
        off: function(names, fn, options) {
          this.forEach($el => $el.off(names, fn, options));
          return this
        },
        attr: function(attrs, val) {
          if (typeof attrs === 'string' && val === undefined)
            return this[0].attr(attrs)

          else if (typeof attrs === 'object') 
            this.forEach($el =>
              Object.entries(attrs)
                .forEach(([key, val]) =>
                  $el.attr(key, val)));

          else if (typeof attrs == 'string')
            this.forEach($el => $el.attr(attrs, val));

          return this
        }
      }
    )
  }

  exports.default = $;
  exports.rAF = rAF;
  exports.rIC = rIC;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
