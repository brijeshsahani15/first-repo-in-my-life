// const tinderUser= new Object()/// singleton object

const tinderUser={}//non sinleton object(both are importan for interview purpose )



tinderUser.id= "jbfGWNKJ234"
tinderUser.name= "krihsna"
tinderUser.isLoggedIn=true
tinderUser.age=20

// console.log(tinderUser);

const newUser={
    email: "something1241@gmail.com",
    fullName:{
        userFullName:{
            firstname:"rohan",
            lastName:"sahani",
            middleName:"kumar "
        }
    }
}


// console.log(newUser. fullName.userFullName.middleName);

const obj1= {1:"a",2:"b"}
const obj2= {3:"a",4:"d"}
const obj4={5:"a",6:"b"}

// const obj3 = Object.assign({} ,obj1, obj2,obj4);


const obj3= {...obj1, ...obj2}///spread operator, this is best way to print obj.. 

console.log(obj1 ,obj3);


console.log(tinderUser);

console.log(Object.keys(tinderUser));///to get the keys of the object(key means tinder user includes )
console.log(Object.values(tinderUser));///to get the values of the object to using object keys
console.log(Object.entries(tinderUser));///its convert into a array with key and value

console.log(newUser.hasOwnProperty("firstName"));///to check the property of the object or present somthing or not in object (id kis jagah kuch ho sakta hai like name , age ,userLoggedin))







const course ={
    course:"panbhandhar",
    price: "5 per peice",
    courseTeacher:"sanjeev"

}

console.log(course.price);

const{courseTeacher:panvala}=course ///(destructuring)i gave another name to courseteacher to panvala because in objecr name too long (courseteacher)
console.log(panvala);



///practice

const batShop={
    one:"100",
    address:"gujarpar",
    mobile:9794820121,

}
const{address:pataNa}=batShop
console.log(pataNa);


//// these are mainly use in API and this correct formate of API

// {

//    "name" :"brijesh",
//    "coursename":"js hindi yt",
//    "price":"free",
//    "teacher":"sanjeev",
   
// }


/////json method
[
    {},
    {},
    {}

]








