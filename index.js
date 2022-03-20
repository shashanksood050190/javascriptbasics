console.log('Hello QA');
console.log('Hello javascript');
console.log(2 + 2);






function getRandomArbitary(min, max) {
    return Math.random() * (max - min) + min;
}

let x = getRandomArbitary(5, 100)
console.log(Math.floor(x));