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
        imageMode(LEFT)
        image(this.tileImg, this.x, this.y, this.r, this.r)

        /*if (i < 4) {
        image(this.tileImg, this.x, this.y, this.r, this.r)
            } else if (i < 8 && i > 4) {
                image(this.tileImg, this.x - 600, this.y+200, this.r, this.r)
            } else if (i < 12 && i > 8) {
                image(this.tileImg, this.x-1200, this.y+400, this.r, this.r)
            }  else if (i < 15 && i > 12) {
                image(this.tileImg, this.x-1600, this.y+600, this.r, this.r)
            }
            */
    }
}