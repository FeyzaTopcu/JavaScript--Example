function User(name){

    this.name= name;

    console.log("User sinifina erişildi")

}


 User.inheritance.getFullName = function(_name){
     return "Merhabalar"+ this._name
 }

var user = new User("Feyza Topçu")
console.log(user.getFullName())

var user2 = new User("Homer Simpson")
console.log(user2.getFullName())
