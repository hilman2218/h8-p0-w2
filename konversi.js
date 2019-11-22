function konversiMenit (menit){
    var jam = Math.trunc (menit /60)
    var konMenit = menit % 60
    var hasilkonversi = ''
    if (konMenit < 10) {
        hasilkonversi = '0' + konMenit;
    } else {
        hasilkonversi = konMenit
    } 
    return String (`${jam}:${hasilkonversi}`)
}
console.log(konversiMenit(66)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
