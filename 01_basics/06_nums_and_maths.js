const score= 400

console.log(score);// its output become 400

const balance= new Number(100)
console.log(balance);//its output become [number:100]  above number see the clearly difference between them




// console.log(balance.toString().length);
// console.log(balance.toString(1));


const otherNumber=123.9545
console.log(otherNumber.toPrecision(4));


const hundreds =1000000
console.log(hundreds.toLocaleString('en-IN')); //('en-IN') its convert the international system to indian system


//////maths///////


console.log(Math);
console.log(Math .abs(-4));//its remove the minus sign
console.log(Math.round(4.3));//its make a round off the numbers
console.log(Math.ceil(4.1));// its make the number top after the point e.g.like 3.1 make 4
console.log(Math.floor(4.9));// its make the nyumber lowest after the point e.g 6.9  make 6


console.log(Math.random());
console.log(Math.floor(Math.random()*10)+1);//addtion aur multplication es liya kyuki floor value pe 0.1 naa aaye




console.log(Math.min(2,54,6,67,210));//min  find the minimum value in the number 

console.log(Math.max(21,54,45,67,21));///max find the maximum value in the number 



console.log(Math.random()); //random number comes between 0.1 to 0.9 then we add or multuply something or devided 

console.log(Math.ceil(Math.random()*10)+1);

const min =10
const max = 20
console.log(Math.floor(Math.random() * (max-min+1))+ min)