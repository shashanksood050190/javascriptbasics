//data types:
let name = 'QA';
let age = 25;
let color = 'red';
console.log(name + ' ' + age);
console.log(2+2);

const range = 4;
//range = 5;
console.log(range);

const numberOfdays = 7;

let s1 = 'hello world';
let num = 30;
let salary = 12.33;
let flag = true;
let isActive = false;
let price;
let model = null;
let wheels = undefined;

//dynamic typing
let d = 'naveen';
d = 30;

//objects:
let user = {
  name: "Tom",
  age: "30"
};

console.log(user);
//dot notation
console.log(user.name);
console.log(user.age);
user.age=35;
console.log(user.age);
console.log(user.name + ' ' +user.age);

//2. using bracket notation
user['name'] = 'Mary';
console.log(user.name);

//Arrays:
//list of objects
let language = ['java','javascript'];
console.log(language);
console.log(language.length);

language[2]='Ruby';
console.log(language);
console.log(language[3]);

//functions:
function getName() { //0 param
    console.log('this is my function!!');
};

// call the function:
getName();

//param based functions
function greet(name, age)
{
    console.log('hello '+name+' '+age);
}

greet('QA',24);
greet('Tom');
greet();

//return from function
function add(num1,num2)
{
    return num1+num2;
}

let sum=add(10,20);
console.log(sum);

console.log(add(40,50));

function squareRoot(number)
{
    let root=number*number;
    return root;
}

console.log(squareRoot(2));
console.log(squareRoot(10));