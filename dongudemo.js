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
    
    function kullaniciVarmi(email,sifre)
    {

        for(i=0;i<kullanicilar.length;i++)
        {
           if(email == kullanicilar[i].email && sifre == kullaniciVarmi[i].sifre){

            return true
           }
        
        }
        return false;

    }
    
    function giris(email,sifre)
    {
        if(kullaniciVarmi(email,sifre))
        {
            console.log(twitler)
        }
        else
        {
            console.log("hatalı mail yada şifre")
        }
    }
    giris(email,sifre)