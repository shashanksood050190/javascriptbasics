const num = [3, 4];
console.log(num.length)

// add an element to the end of the array
num.push(5, 6);
console.log(num)

//add an element at the begining of the array
num.unshift(1, 2)
console.log(num)

//add an element to the middle of the array
num.splice(2, 0, 'a', 'b')
console.log(num)

//how to print all values from an array
for (const key in num) {
    console.log(num[key])
}
console.log("-------------")

//find elements in array : (primitive)
const s = [1, 2, 3, 1, 4];
console.log(s.indexOf(1));
console.log(s.indexOf(5));
console.log(s.indexOf('a'));
console.log(s.indexOf('1'));
console.log(s.indexOf(1, s.indexOf(1) + 1));

console.log(s.indexOf(3) !== -1); //true

console.log(s.includes(3));

//find elements in array : (ref type):
//array can have objects...

const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
];

//console.log(courses.includes({ id: 1, name: 'a' })); //false

const c3 = courses.find(course => course.name === 'a')

const c1 = courses.find(function (course) {
    return course.name === 'a';
})

console.log(c1)
console.log(c1.name)
console.log(c1.id)

const c2 = courses.findIndex(function (course) {
    return course.name === 'a';
})

console.log(c2)