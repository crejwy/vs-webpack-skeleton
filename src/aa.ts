let hexLiteral: number = 0xf00d;
let list: number[] = [1, 2, 3];
let names: string = `Gene`;
let age: number = 37;

let sentence: string = `Hello, my name is ${ names }.
I'll be ${ age + 1 } years old next month.`;

class Shape {
    area: number;
    color: string;
    constructor ( name: string, width: number, height: number ) {
        this.area = width * height;
        this.color = "pink";
    };

    shoutout() {
        return "I'm " + this.color + " with an area of " + this.area + " cm squared.";
    }
}

var square = new Shape("square", 30, 30);
console.log( square.shoutout() );
console.log( 'Area of Shape: ' + square.area );
console.log( 'Color of Shape: ' + square.color );

export default{
    sentence
}