/// dates


let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());//this command give us exact time day and date 
console.log(myDate.toLocaleString());///its give us another formate of datelike 9/24/2024cosnoleo


console.log(typeof myDate);///type of date (object(basics interview quetion) )

let myCreatedDate= new Date(2021,7,22)////  this command for specific date 
console.log(myCreatedDate.toDateString());

// let  myCreatedDate= new Date("2021-8-22")//another foemate of date and time (MM YY MM DD)
// console.log(myCreatedDate.toLocaleString());
let myTimeStamp= Date.now()
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));/// to  math .floor help  for remove the second .pointwhich give second in point  then /1000 converted into second 

// let newDate= new Date()
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday:"long",
    
})

console.log(newDate);



