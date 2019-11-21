
// bintang 1
for (let bintang=1; bintang <=5; bintang ++) {
    console.log('*') 
}

// bintang 2
var string = '';
for (let a = 1; a <= 5; a++){
    for (b = 1; b <= 5; b++) {
       string += '*'// mengisi string di isi*
    }
    string += '\n'; // untuk membuat baris baru
}
console.log(string)

var string = '';
for (let a = 1; a <= 5; a++){
    for (b = 1; b <= a; b++) {
       string += '*'// mengisi string di isi*
    }
    string += '\n'; // untuk membuat baris baru
}
console.log(string)
