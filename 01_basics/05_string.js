// const name= "brijesh"
// const repoCount= 50

// // console.log(name +repoCount)

// console.log ('this is my first and my  is  name and its repoCount')


const gameName =  new String('brijeshc');
console.log(gameName[4]);

console.log (gameName.__proto__);


console.log(gameName.__proto__);

console.log(gameName.toUpperCase());

console.log(gameName.toLowerCase());

console.log(gameName.charAt('2'));
console.log(gameName.indexOf('j')); // indexof( the word situsted which place(''))
console.log(gameName.slice(0,4));//   slicing(count the numbers which types in console.log in game name('')

const newString=gameName .substring(0,6);
console.log(newString);// same thing that like a slicing  but another way





const anotherString= gameName.slice(-7, 2)
console.log(anotherString);



const newStringOne = "     brijesh  "
console.log(newStringOne);

console.log(newStringOne.trim());/// trim used for remove extra spaces which o typed in newStringOne




const url="https://brijesh.com/brijesh%22sahani"

 console.log (url.replace  ('%22','-'));

const paragraph= "my name is brijesh sahani and i love neelam who belong to chainpur"
console.log(paragraph.replace('chainpur','bojhi'));

console.log(paragraph.includes('love'));