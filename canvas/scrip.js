let canvas
function init() {
  let elemen = document.getElementById("canvas")
  canvas = elemen.getContext("2d")
  window.addEventListener("mousemove", animacion)
}
function animacion(event) {
  canvas.clearRect(0, 0, 500, 300)
  let xcenter = 220
  let ycenter = 150
  let xmouse = event.clientX
  let ymouse = event.clientY

  let ang = Math.atan2(ymouse - ycenter, xmouse - xcenter)
  let x = xcenter + Math.round(Math.cos(ang) * 10)
  let y = ycenter + Math.round(Math.sin(ang) * 10)

  canvas.beginPath()
  canvas.arc(xcenter, ycenter, 20, 0, Math.PI * 3, false)
  canvas.moveTo(xcenter + 70, ycenter)
  canvas.arc(xcenter + 50, ycenter, 20, 0, Math.PI * 3, false)

  canvas.stroke()
  canvas.beginPath()
  canvas.moveTo(x + 10, y)
  canvas.arc(x, y, 10, 0, Math.PI * 3, false)
  canvas.moveTo(x + 60, y)
  canvas.arc(x + 50, y, 10, 0, Math.PI * 3, false)
  canvas.fill()
}
window.addEventListener("load", init)
