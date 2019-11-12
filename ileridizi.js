const dizi =[1,2,3,4]

const kareDizisi =[]

dizi.forEach(sayi => {
    kareDizisi.push(sayi*sayi)
})

console.log(kareDizisi)



const dizi2= [56,64,48,36,24]
const bolme =[]

dizi2.forEach(sayi2 => {
bolme.push(sayi2/sayi2)

})
console.log(bolme)

//map

const mapDizi = dizi2.map(sayi2 => sayi2 - 45 )

console.log(mapDizi)


const mapDizi2 = dizi.map(sayi3 => sayi3 * 3)
console.log(mapDizi2)

const mapDizi3 = dizi2.map (sayi4 => sayi4 * sayi4* sayi4)
console.log(mapDizi3)

//reduce

const toplam = dizi.reduce((acc,sayi) => {
    return acc + sayi
},30)

console.log(toplam)