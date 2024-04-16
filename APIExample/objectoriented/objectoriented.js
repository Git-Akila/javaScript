let user1={
    name:'akila',
    age:22,
    login(){
        console.log('Hi',this.name)
        console.log('You are logged in')
    },
    logout(){
        console.log('You are logged out')
    }
}


let user2={
    name:'aki',
    age:23,
    login(){
        console.log('Hi',this.name)
        console.log('You are logged in')
    }
}

user1.login();
user2.login();

//creating Constructor

class user{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    login(){
        console.log('Hi',this.name)
        console.log("You are logged in")
    }
    logout(){
        console.log('You are logged out')
    }
}
let userOne=new user('akila',21)
let usertwo=new user('aki',22)


//creating static variable
class user7{
static numberofusers=0;
constructor(name,age){
    this.name=name;
    this.age=age;
   user7.numberofusers++;    //we can access by using class name
}

login(){
    console.log('Hi',this.name)
    console.log('hlo',this.age)
}

logout(){
    console.log('you RE LOGOUT')
}
//static method
static display(){
    console.log("Total number of users:",user7.numberofusers);
}


}
let one=new user7('akila',3);
console.log(user7.numberofusers)     //we can access by using class name    

user7.display();


//inheritance      //user7 is a parent class    Paiduser is a derived class

class Paiduser extends user7{
                   message(){
                    console.log('You have 100GB free storage')
                   }
}

let paiduser1=new Paiduser('akila',22)                     
paiduser1.login();  


//******************************************************* */

// superclass

class paid extends user{
    constructor(name,age){
        super(name,age);
        this.storage=100;
    }
    message(){
        console.log('You have 100gb free Storage')
    }
    //**************************************overriding*************************************
     login(){
        console.log("thank you")
     }
}

let paid1=new paid('akila,22')
paid1.login()
paid1.message()


//Method chaining

class chaining extends user{
    constructor(name,age){
        super(name,age);
        this.storage=100;
    }
    message(){
        console.log('You hve 100gb free storage')
    }
    login(){
        console.log("thank you")
        return this
    }

}
let chain=new chaining('aki',20)
chain.login().message()

//ES6 introduce class


//prototype

function user3(name,age){
    this.name=name;
    this.age=age;
}

user3.prototype.login=function(){
    console.log('hi',this.name)
    console.log("You are logged in")
}

let use=new user3('akila',19)
use.login() 



//get and set


class Car{
    drive(){
        console.log("Driving")
    }
}



//modules

import c,{fillGas as fill, repair} from './car1';


class Car{
    drive(){
        console.log("Driving")
    }
}

let car1=new c()
car1.drive()
fill()

function fillGas(){
    console.log("the Plain")
}
function repair(){
    console.log("The Bill")
}




export  default car1;
export {fillGas,repair}


// Asynchronus
 