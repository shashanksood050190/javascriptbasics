//Arithematic
//assignment
//ternary
//comparision
//logical
//binary

//arithematic
// let x=10;
// let y=20;
// console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(y/x);
// console.log(x/y);
// console.log(2 ** 3);

// //++ and --
// let p = 1;
// let q = p++;
// console.log(p); //2
// console.log(q); //1

// let p1 = 1;
// let q1 = ++p1;
// console.log(p1); //2
// console.log(q1); //2

// let m =2;
// console.log(m--);
// console.log(m);

//assignment
// let x = 10;
// let c = x+10;
// console.log(x+c);

// //x = x * 10;
// x*=10;
// console.log(x);

// let j = 5;
// j+=5;
// console.log(j);

//comparision
// let x= 10;
// console.log(x>=10);

// console.log(x===10); //strict equality -- type and value 

// console.log(1===1);

// //lose equality
// console.log('1'==1);
// console.log(1==1);
// console.log(true==1);

//ternary
// let points = 90;
// let type = points>100 ? 'gold' : 'silver';
// console.log(type)

//logical:
//AND (&&):
let highIncome = true;
let goodCreditScore = false;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);

//OR (||)
let isActive = true;
console.log(!isActive)
console.log(!10 > 5)
console.log(!10 < 5)

//logical operator with non boolean:
//falsy (false)
//undefined
//null
//0
//false
//''
//NaN

//truthy values: which are not falsy
// console.log(false || 'naveen');
// console.log(false || 1 || 2);
// console.log(true || 1 || 2);
// console.log(false || undefined);
// console.log(true || null);

// real time example
// let userColor = 'red'
// let defaultColor = 'blue'
// let currentColor = userColor || defaultColor;
// console.log(currentColor);

//bit wise
//1 = 00000001
//2 = 00000010
//3 = 00000011 -- |
//3 = 00000000 -- &

console.log(1 | 2);
console.log(1 & 2);

//Operator precedence:
console.log(2 + 3 * 4);
console.log((2 + 3) * 4);
console.log((2 + 3) * 4);

//swap two values:
let a = 10;
let b = 20;
let c = a;
a = b;
b = c;

console.log("a -> " + a); //20
console.log("b -> " + b); //10




































































































































//if else
//switch case

//6 am to 12 pm -- good morning
//12 pm to 6pm -- good afternoon
//else good evening



