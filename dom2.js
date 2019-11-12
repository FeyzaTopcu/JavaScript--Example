var isimelemanları = document.getElementsByName("musterAdi")
alert(isimelemanları[0].value)

var reyhan = document.getElementById("reyhan").addEventListener("mouseover", rengidegistir)

function rengidegistir()
{
    document.getElementById("div1").style.color="red"
    var isimelemanlari = document.getElementsByName("musteriAdi")
    isimelemanlari[0].value = "Derin"
}

// var node = document.getElementById("agac")
// alert(node.childNodes[0].nodeValue)


var baslik = document.createElement("h2")
var node = document.createTextNode("hi millet ben geldim")
baslik.appendChild(node)

var div1 = document.getElementById("div1")
var p2 = document.getElementById("p2")

div1.insertBefore(baslik,p2)



var baslik2 = document.createElement("h6")
var  node2  = document.createTextNode(" buray ")
baslik2.appendChild(node2)

div1.insertBefore(baslik2,p2)

alert("p2 siliniyor")
div1.removeChild(p2)

alert("değiştiriliyor")
var p1 = document.getElementById("p1")
div1.replaceChild(baslik,p1)