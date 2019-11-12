function User()
{
    constructor(name){
    console.log("User sınıfına erişildi")
    this.getName = function (name){
        return "Merhabalar " + name

    }
}
}

var user =new User()
console.log(user.getName("feyza topçu"))

var user2 = new User()
console.log(user2.getName("zeyynep topçu"))

