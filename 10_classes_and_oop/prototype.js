// let myName="brijesh"
// let myChannel="chai"

// console.log(myName .trueLength);










let herosPower = {
    thor: "hammer",
    spiderman: "sling",


    getSpiderPower: function () {
        console.log(`spider power is ${this.spiderman}`);
    }
};

Object.prototype.brijesh = function () {
    console.log(`brijesh is present in all objects`);
};



herosPower.brijesh();


const Teacher={
    makeVideo:false
}

const TASupport={
    makeAssignment:'js assignmnet',
    fullTime:true,
    __proto__: Teacher
}
const TeachingSupport={
    isavailable:false
}

// TASupport.__proto__=TeachingSupport////   this is old method for merging two information 



// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUserName="brijeshaurkrishna       "

String.prototype.trueLength=function(){
    console.log(`${this}`)
    console.log(`True length is:${this.trim().length}`);
}


anotherUserName.trueLength()
"brijesh".trueLength()
"iceTea".trueLength()