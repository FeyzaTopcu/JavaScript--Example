var kullanicilar = [
{ email : "feyza@gmail.com", sifre : "123"},
{email : "fyz@gmail.com", sifre : "12345"}
]

var twitler = [
    {email : "feyza@gmail.com", twit : "çok acayip"},
    {email : "fyz@gmail.com", twit: "çok hemde "}
]
var email = prompt("email")
var sifre = prompt("sifre")

function giris()
{
   if((email == kullanicilar[0].email && sifre == kullanicilar[0].sifre) || (email == kullanicilar[1].email && sifre == kullanicilar[1].sifre))
   {
        console.log(twitler)
   }
   else 
   {
       console.log("email yada şifre hatalı")
   }
}
giris(email,sifre)


