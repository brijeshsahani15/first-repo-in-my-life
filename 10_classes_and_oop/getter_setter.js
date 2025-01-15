class User{
    constructor(email,password){
        this._email=email;
        this._password=password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value;
    }
    get password(){
        return `this${this._password}.brijeshkrish`
    }
    set password(value){
        this._password=value
    }
}

const brijesh = new User ("brijeshshanai@.com","nvdbsjh")
// console.log(brijesh.email);
console.log(brijesh.password);














