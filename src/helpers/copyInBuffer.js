export const copyInBuffer = (e) => {
  let el
  if (e.target.tagName === 'path') {
    el = e.target.parentNode.parentNode.parentNode.firstChild
  } else if (e.target.tagName === 'svg') {
    el = e.target.parentNode.parentNode.firstChild
  } else {
    el = e.target.parentNode.firstChild
  }
  navigator.clipboard.writeText(el.value)
}