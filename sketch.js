let tiles = []
let width = 800
let height = 800

function preload () {
  for (i = 0; i <= 15; i++) {
    tiles.img = loadImage("src/images/img"+i+".png")
    let tile;
    for (j = 0; j <= 4; j++) {
      if (i*width/4 < width) {
        tile = new Tile(i*width/4, 0*j, tiles.img, width/4)
      }
    }
    tiles.push(tile)
    console.log(tiles)
  }
}

function setup() {
  createCanvas(width, height);
}

function draw() {
  background(220);

  for (let tile of tiles) {
    let x = 0
    let y = 0
    image(tile.img, x, y, width/4, height/4)
    x += width/4
    if (x > width) {
      x = 0
      y += height/4
    }
  }
}