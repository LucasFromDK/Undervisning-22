let tiles = []

function preload () {
  for (i = 0; i <= 15; i++) {
    let newTile = loadImage("src/images/img"+i+".png")
    tiles.push(newTile)
  }
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
