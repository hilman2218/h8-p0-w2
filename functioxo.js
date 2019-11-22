/*Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, 
dan false jika tidak*/
function xo(str) {
 var c = 0
 var d = 0
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == 'x') {
            c++
        }else if (str.charAt(i) == 'o') {
            d++
        }
    }    
    if (c == d) {
        return true
    } else {
        return false 
    }

}
  // TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxoox')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true