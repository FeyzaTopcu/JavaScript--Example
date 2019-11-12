var intro1 = document.getElementById("intro1");

var mesaj = document.getElementById("mesaj");

mesaj.innerHTML = intro1.innerHTML;

var tumliste = document.getElementsByTagName("ul")

var sehir = tumliste[0]

tumelemanlar= sehir.getElementsByTagName("li")

for(i=0;i<tumelemanlar.length;i++)
{
    alert(tumelemanlar[i].innerHTML)
}

var classElemanlari = document.getElementsByClassName("intro1")

alert(classElemanlari[1].innerHTML)


var queryElemeanlar =document.querySelectorAll("p.intro1")
alert(queryElemeanlar.length)