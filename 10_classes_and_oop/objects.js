function multiplyBy5(_num){
    return _num * 5;
}
multiplyBy5.power=2
console.log(multiplyBy5(5))
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype)
class CreateUser {
    constructor(username, score) {
        this.username = username;
        this.score = score;
    }

    increment() {
        this.score++;
    }

    printMe() {
        console.log(`score is ${this.score}`);
    }
}

const chai = new CreateUser("chai", 25);
const tea = new CreateUser("tea", 250);

chai.printMe();




  