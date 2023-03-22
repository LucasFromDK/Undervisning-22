let tileImages = [];
const tiles = []

function preload () {
  for (i = 0; i <= 15; i++) {
      let image = loadImage("src/images/img"+i+".png");
      tileImages.push(image)
      tiles.push(new Tile(tileImages[i]))
    }
    tiles.push(image);
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
    image(tile.tileImg, x, y, 100, 100);
    x += 400/4;
    if (x > 400) {
      x = 0;
      y += width/4;
    }
  }
}