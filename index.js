function greeting(param , param1) {
   return `Hello ${param} , hai${param1}`
}

const Name = greeting("ivan", " willy")
const say = greeting()



function countDiscount(diskon) {
    let clothes = 250000
    let hitung = clothes*diskon/100;
    let result = clothes - hitung 

    return result
}

const jan = countDiscount(10);
const feb = countDiscount(20);
const mar = countDiscount(30);

console.log(`harga barang menjadi ${jan}`)
console.log(`harga barang menjadi ${feb}`)
console.log(`harga barang menjadi ${mar}`)

function MyAge(age) {
    let time = new Date()
    const years = time.getFullYear();
    const result = years - age

    return result
}

const Daffa = MyAge(2003)

console.log(Daffa)

const pengkuadratan = (kudrat, hasilkuadrat) => {
    let Number = Math.pow(kudrat, hasilkuadrat)
    
}
 const angka = pengkuadratan(9, 3)

 console.log(angka)
