let header = document.querySelector('header')

let lastScrollTop = 0

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener(
  'scroll',
  () => {
    var st = window.pageYOffset || document.documentElement.scrollTop // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st < 50) {
      header.style.backgroundColor = 'transparent'
      header.style.boxShadow = 'none'
    } else {
      header.style.backgroundColor = 'white'
      header.style.boxShadow = '0px 4px 7px rgba(123, 123, 123, 0.15)'
    }
    lastScrollTop = st <= 0 ? 0 : st // For Mobile or negative scrolling
  },
  false
)
