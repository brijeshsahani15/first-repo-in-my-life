const coding  = ["js", "python","java","cpp"]




coding. forEach( function (val){
    console.log(val);

})





/// this is the second way to access the  conding value 


function printMe(item){
    console.log(item);
}


coding .forEach(printMe);





// this is the arrow functions(it can uasee in many way) 

coding .forEach((item,index, arr)=>{
    console.log(item,index ,arr);


})




/// array in object    [{}] 


const myCoding =[
    {
        languageName:"javascript" ,
        languageFileName:"js"
    },
   
    {
        languageName:"java" ,
        languageFileName:"java"
    },
    {
        languageName:"python" ,
        languageFileName:"py"
    }

]


myCoding.forEach ((item) => {

    console.log(item.languageName);

})

