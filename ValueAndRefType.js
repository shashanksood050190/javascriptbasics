//value type:
//number, string, boolean, symbol, undefined, null

//Reference type:
//Object, function, array

// let x = 10;
// y = x;
// x = 20;
// console.log(x);
// console.log(y);

let p = { value: 10 };
let q = p;
p.value = 20;

console.log(p.value)
console.log(q.value)
