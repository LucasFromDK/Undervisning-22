/* Psuedokode
class Tile {
    Load Images and place into the array Tiles[]
}

Draw Images {
    Draw Images on Screen()
    Distance between pictures = 5px
}

Remove last Tile {
    Remove last element of Tiles[]
    Push empty square to Tiles[]
}

Tiles Mix {
    Tile position = random Position on Board
}
*/

class Tile {
    constructor(x, y, tileImg, r) {
        this.x = x
        this.y = y
        this.r = r
        this.tileImg = tileImg
    }

    display() {
        noFill()
        imageMode(CENTER)
        image(this.tileImg, this.x, this.y, this.r, this.r)
    }
}