//factory function: it produces objects
//name: camelCase: oneTwoThreeFour

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log(draw)
        }
    }
}

const c1 = createCircle(1);
console.log(c1);

const c2 = createCircle(5);
console.log(c2);

//Constructor function: also used to create objects
//Name: pascal notation: OneTwoThreefour

function Circle(radius) {
    this.radius = radius;
    this.draw = function()
    {
        console.log('draw', radius)
    }
}

//how to call this constructor function : use new keyword
const a = new Circle(1);
console.log(a.radius);
a.draw();
