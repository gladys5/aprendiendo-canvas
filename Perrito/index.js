const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

const CANVAS_WIDTH = (canvas.width = 600)
const CANVAS_HEIGHT = (canvas.height = 600)
const playerImage = new Image()
playerImage.src = "shadow_dog.png"
const spriteWidth = 573
const spriteHeigth = 523
let frameX = 0
let frameY = 3
let gameFrame = 0
const staggerFrames = 5
function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

  ctx.drawImage(
    playerImage,
    frameX * spriteWidth,

    frameY * spriteHeigth,
    spriteWidth,
    spriteHeigth,
    0,
    0,
    spriteWidth,
    spriteHeigth
  )
  if (gameFrame % staggerFrames == 0) {
    if (frameX < 6) frameX++
    else frameX = 0
  }
  gameFrame++
  requestAnimationFrame(animate)
}
animate()
