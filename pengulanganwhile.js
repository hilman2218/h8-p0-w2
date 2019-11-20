
// pengulangan dengan while
console.log ('LOPING PERTAMA')
let jumlah = 2
while (jumlah <=20) {
    console.log (jumlah + ' ' + 'I love coding')
   jumlah +=2; 
}
console.log ('LOPING KEDUA')
let angka = 20
while (angka >= 2) {
    console.log (angka + ' ' + 'I will become Fullstack Development')
    angka -=2;
}


// pengulangan dengan for
console.log ('LOOPING PERTAMA')
for (let index = 1; index <= 20; index++) {
    console.log (index +' '+ 'I love Cooding')
}
console.log ('Looping Kedua')
for (let index =20; index >=1; index--) {
    console.log (index +' ' + 'I will Become Fullstack Developer')
} 

// Angka Ganjil dan Genap
console.log ('Ganjil Genap')
for(let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log (i + ' ' + 'Genap')
    } else {
        console.log (i + ' ' + 'Ganjil')
    }
}

// penambahan 2
console.log ('Kelipatan 3')
for (let k = 1; k <= 100; k +=2) {
    if (k % 3 === 0) {
        console.log (k + ' ' + 'Kelipatan 3')
    } else {
        console.log('""')
    }
}

//penambahan 5
console.log ('Kelipatan 6')
for (let k = 1; k <= 100; k +=5) {
    if (k % 6 === 0) {
        console.log (k + ' ' + 'Kelipatan 6')
    } else {
        console.log('""')
    }
} 

//penambahan 9
console.log ('Kelipatan 10')
for (let k = 1; k <= 100; k +=9) {
    if (k % 10 === 0) {
        console.log (k + ' ' + 'Kelipatan 10')
    } else {
        console.log('""')
    }
} 
