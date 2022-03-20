//enumerating properties of an object:
//get all properties of an object

const circle = {

    radius: 1,
    draw(){
        console.llog('draw');
    }
}

//1. for in loop
for(let key in circle)
{
    console.log(key,circle[key])
}

console.log('--------------------')

//2. for of loop
for(let key of Object.keys(circle))
{
    console.log(key)
}

console.log('--------------------')

for(let entry of Object.entries(circle))
{
    console.log(entry)
}

//3. in operator:
//check a property in an object
if('price' in circle)
{
    console.log('Yes');
}

console.log('--------------------')

if('draw' in circle)
{
    console.log('Yes');
}