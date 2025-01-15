class User{
    constructor(email,password){
        this.email=email;
        this._password=password
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this.password=value

    }
}

const brijesh = new User ("brijeshshanai@.com","368436")
console.log(brijesh.email);
console.log(brijesh.password);