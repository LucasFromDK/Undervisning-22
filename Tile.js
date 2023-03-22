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
    constructor(tileImg, index) {
        this.tileImg = tileImg
        this.index = index
    }
    
    /*
    display() {
        noFill()
        imageMode(LEFT)
        image(this.tileImg, this.x, this.y, this.r, this.r)
    }*/
}