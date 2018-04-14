class Shape {
    toString() {
        return "This shape has an area of " + this.area() + " and perimeter " + this.perimeter();
    }
};

class Rectangle {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;

    }
    area() {
        return this.width * this.height;
    }
    perimeter(){
        return (this.width + this.height) * 2;
    }
}

class Square extends Rectangle {
    constructor(width) {
        super();
        this.width = width;
        this.height = width;
    }
    // A square is a rectangle
    // Every square has a width and a height
    // The height and width of a square are always the same
    // Implement the constructor
    // Do not implement the area and perimeter methods. They should be inherited from Rectangle
    // The constructor has one argument
}

var square  = new Square(4);
var rect = new Rectangle(5,6);


module.exports = {Shape, Rectangle, Square};