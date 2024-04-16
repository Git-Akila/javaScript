let user={
    methods:'login',
    password:'akila',
    login(e){
        e.name='akila';
        e.password='19ki';
       
    },
    signup(){
        console.log("submitted")

    },


}

console.log(user);
console.log(user.login(e.name))
console.log(user.signup());