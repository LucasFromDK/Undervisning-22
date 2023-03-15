let tiles = []
let width = 400
let height = 400

function preload () {
  for (i = 0; i <= 15; i++) {
    let newTile = loadImage("src/images/img"+i+".png")
    let tile = new Tile(345, 345, newTile, width/4)
    console.log(width/4)
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
