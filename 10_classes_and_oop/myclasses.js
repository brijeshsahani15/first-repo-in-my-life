class User {
    constructor(username, email, password) {
        this.username = username.charAt(0).toUpperCase() + username.slice(1);
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`;
    }
}

const chai = new User("chai", "chdjdj@.com", "6523229358658");

console.log(chai.encryptPassword());
console.log(chai.username);


// behidn the scene

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function() {
    return `${this.password}abc`;
}

User.prototype.changeUsername = function() {
    return this.username.toUpperCase();
}

const tea = new User("tea", "tea@gmail.com", "123");
console.log(tea.encryptPassword());
console.log(tea.changeUsername());





