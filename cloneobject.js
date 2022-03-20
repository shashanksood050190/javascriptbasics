const circle = {

    radius: 1,
    draw() {
        console.log('draw')
    }
}

//1. for in loop
// const another  = {}
// console.log(another);

// for(let key in circle)
// {
//     another[key] = circle[key];
// }
// console.log(another);

//2. using Object.assign method
// const another = Object.assign({}, circle);
// console.log(another);

// const another1 = Object.assign({ color: 'red' }, circle)
// console.log(another1);
// another1.draw();

//3. using spread ... operator
const another = { ...circle };
console.log(another);
another.draw();