let tileImages = [];
const tiles = []
let width = 400
let height = 400

function preload () {
  for (i = 0; i <= 14; i++) {
      let image = loadImage("src/images/img"+i+".png");
      tileImages.push(image)
      tiles.push(new Tile(tileImages[i], i))
    }
    let emptyTile = loadImage("src/images/Black.png")
    tiles.push(new Tile(emptyTile, 15));
    console.log(tiles);
  }

function setup() {
  createCanvas(width, height);
  shuffle(tiles, true)
}

function draw() {
  background(0);
  let x = 0;
  let y = 0;
  for (let tile of tiles) {
    image(tile.tileImg, y, x, width/4-1, height/4-1);
    x += width/4;
    if (x >= width) {
      x = 0;
      y += height/4;
    }
  }
}