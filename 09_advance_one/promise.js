const promiseOne = new Promise(function(resolve, reject) {
  setTimeout(function() {
      console.log("Async task is complete");
      resolve();
  }, 1000);
});
promiseOne.then(function(){
  console.log("Promise consumed");

})


new Promise(function(resolve,reject){
  setTimeout(function(){
      console.log("async task 2");
      resolve()
      
  },1000)
  
}).then(function(){
  console.log("async 2 resolve");
})






const promiseThree = new Promise(function(resolve,reject){
  setTimeout(function(){
      resolve({userName:"chai",email:"brijeshsahanai387.com"})

  },1000)
})
promiseThree.then(function(user){
  console.log(user);

});


const promiseFour = new Promise(function(resolve, reject){
setTimeout(function(){
  let error=false;
  if(!error) {
      resolve({userName: "brijesh" ,password:"1234"})
      
  }else{
      reject('error somthing went wrong')
  }
 
  
}, 1000);
});
promiseFour.then().catch((user)=>{
  console.log(user);
  return user.userName

}).then ((username)=>{
  console.log(username);

}).catch(function(error){
  console.log(error);
}).finally(()=> console.log(" the promise is either resolved or rejected"))









const promiseFive= new Promise(function(resolve,reject){
  setTimeout(function(){
      let error=false;
      if(!error) {
          resolve({userName: "js" ,password:"1@34"})
          
      }else{
          reject('error js went wrong')
      }
     
      
    }, 1000);
})
async function consumePromiseFive(){
  try {
      const response =await promiseFive
      console.log(response);
      
      
  } catch (error) {
      console.log(error);
      
  }

}
consumePromiseFive()




// async function getAllUser() {
//  try {
//     const response=  await fetch("https://randomuser.me/api/")
//     const data=await response.json()
//     console.log(data);
  
//  } catch (error) {
//     console.log("E:",error);
  
//  }
 
// }
// getAllUser()

fetch('https://restcountries.com/v3.1/all')
.then((response)=>{
  return response.json()

  
})
.then ((data)=>{
  console.log(data);
})

.catch((error)=>console.log(error))