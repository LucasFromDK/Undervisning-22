let tiles = []
let width = 800
let height = 800


function preload () {
  for (i = 0; i <= 15; i++) {
    let newTile = loadImage("src/images/img"+i+".png")
    let tile;
    for (j = 0; j <= 4; j++) {
      if (i*width/4 < width) {
        tile = new Tile(i*width/4, 0*j, newTile, width/4)
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
    tile.display()
  }
}