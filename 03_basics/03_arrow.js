const user={
  username:"brijesh",
  price:999,
  welcomeMessage:function(){
    console.log(`welcome  our website ${this.username},  `);
    console.log("this");
  }
}

user.welcomeMessage()
user.username= "sanjeev  "
user.welcomeMessage();


console.log(this);

function chai(){
  console.log(this.username);

}
chai();



const chai= function(){
  let username="brijesh"
  console.log(this.username);
  
}



const chai= ()=>{
  let username="brijesh"
  console.log(this);
  
}

chai()




const addtwo=(num1, num2)=>{ /// this functions is called explicit when use of functions
  return num1+num2
 }


 const addtwo=(num1, num2) => num1+num2//// this is the second method called implicit method
  
 
const addtwo=(num1, num2) => (num1+num2)

const addtwo=(num1, num2) => ({username:"brijesh"})




console.log(addtwo(3,4));














































