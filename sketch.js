let tileImages = [];
const tiles = []

function preload () {
  for (i = 0; i <= 14; i++) {
      let image = loadImage("src/images/img"+i+".png");
      tileImages.push(image)
      tiles.push(new Tile(tileImages[i]))
    }
    let emptyTile = loadImage("src/images/Black.png")
    tiles.push(new Tile (emptyTile));
    console.log(tiles);
  }

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let x = 0;
  let y = 0;
  for (let tile of tiles) {
    image(tile.tileImg, y, x, 100, 100);
    x += 400/4;
    if (x >= 400) {
      x = 0;
      y += width/4;
    }
  }
}