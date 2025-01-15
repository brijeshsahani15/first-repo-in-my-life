const User={
    _email:'sjkghk@.com',
    _password:"dfbg12",


   
    get email(){
       return this._email.toUpperCase()
    },



    set email(value){
        this._email=value

    }

}

const tea = Object.create(User)
console.log(tea._password);