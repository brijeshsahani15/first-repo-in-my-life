// ///arrays

const arrays=[1,2,3,4,5,6,7,8,9,10]

const myHeroz=["spiderman","thor","hulk","ironman","captain america"]
console.log(myHeroz);

const myArr2= new Array(1,2,3,4,5)
console.log(arrays[1]);


// /array methods

arrays.push(11)///adding the arrays in first line this is techniqueto add arrays

arrays.push(12)

arrays.pop()//removing the last array

arrays.unshift(5)//adding the aaray as a number in first array(starting)

arrays.shift()//removing the first array which is added by unshift

console.log(arrays.includes(10));///to check the array which include or not (number in array)

console.log(arrays.indexOf(4));///to check the index of the array (array number)
console.log(arrays);

const newArr= arrays.join()
console.log( newArr);
console.log( arrays);




////slice and splice


console.log("A",arrays);

const myn1= arrays.slice(1,3)
console.log(myn1);
console.log("B",arrays);

const myn2= arrays.splice(1,3)
console.log(myn2);






