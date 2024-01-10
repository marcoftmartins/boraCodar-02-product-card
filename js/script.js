/** @format */

var closeBtn = document.querySelector('#close')
var rotateBtn = document.querySelector('#rotate')
var imageDiv = document.querySelector('.product-image')
var sofaSVG = document.querySelector('#sofa')
var gif = document.createElement('img')

rotateBtn.addEventListener('click', changeSvgToGif)
closeBtn.addEventListener('click', changeGifToSvg)

function changeGifToSvg() {
  sofaSVG.style.display = 'block'
  closeBtn.style.display = 'none'
  rotateBtn.style.display = 'block'
  gif.remove()
}

function changeSvgToGif() {
  sofaSVG.style.display = 'none'
  closeBtn.style.display = 'block'
  rotateBtn.style.display = 'none'
  gif.src = './assets/sofa.gif'
  gif.height = 253
  gif.width = 449
  imageDiv.appendChild(gif)
}
