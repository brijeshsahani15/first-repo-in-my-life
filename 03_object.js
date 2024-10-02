/// singleton
//object.literals

// const mySym = symbol("key1");

const jsUser={
    "full name" :"brijesh sahani",
    age:19.3,
    // [mySym]:"mykey1",
    email:"brijeshhsahanii222oct@gmail.com",
    isLoggedIn:false,
    lastLoggingDay:"12-12-2022",
}
console.log(jsUser.email);///to access the email of jsUser object
console.log(jsUser["age"]);//this is another way to acces the age or anything in jsUser object but method always use 
console.log(jsUser["full name"]);
// console.log(typeof(jsUser[mySym]));/////read carefully because this topic is very sensitive and comes mainy times in interview

jsUser.email= "aaravnishad62@gmail.com"///this command used for access  and change another key change the email
console.log(jsUser.email);

// Object.freeze(jsUser)///  after using this command can not change beacuse this code which in  contain jsUser



//Add a new method to the existing object

jsUser.greeting=function(){
    console.log("hello bhai kaishe ho");
}


jsUser.greetingTwo = function(){
    console.log(`hello bhai kaishe ho, ${this.age}`);
}



console.log(jsUser.greeting());
console.log(jsUser.greetingTwo())


















