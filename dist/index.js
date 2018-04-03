(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.blingblingjs = {})));
}(this, (function (exports) { 'use strict';

  // node decorators
  const sugar = {
    on: function(names, fn) {
      names
        .split(' ')
        .forEach(name =>
          this.addEventListener(name, fn));
    },
    setAttributes: function(attrs) {
      Object.entries(attrs)
        .forEach(([key, val]) =>
          this.setAttribute(key, val));
    }
  };

  const $ = (query, $context = document) =>
    query.nodeType
      ? Object.assign(query, sugar)
      : Object.assign($context.querySelector(query), sugar);

  const $$ = (query, $context = document) => {
    const nodes = NodeList.prototype.isPrototypeOf(query)
      ? query
      : $context.querySelectorAll(query);

    return Object.assign(
      [...nodes].map($el => Object.assign($el, sugar)),
      {
        on: function(names, fn) {
          this.forEach($el => $el.on(names, fn));
        },
        setAttributes: function(attrs) {
          this.forEach($el => $el.setAttributes(attrs));
        }
      }
    )
  };

  exports.$ = $;
  exports.$$ = $$;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
