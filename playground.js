import $, {rAF, rIC} from './src/index.js'
let test = document.querySelectorAll('button')
console.log($(test[0]).on)
rAF(_ => console.log('rAF'))
rIC(_ => console.log('rIC'))
// ;(function repeatOften() {
//   console.log('requestAnimationFrame')
//   rAF(repeatOften);
// })();