function balikKata(kata) {
    var output = '' // untuk menampung string..
    for (var k= kata.length-1; k>=0; k--) {
    output += kata[k]
     }
     return output
}    
console.log(balikKata('Hello World and Coders'))
console.log(balikKata('John Doe'))
console.log(balikKata('I am a bookworm'))
console.log(balikKata('Coding is my hobby'))
console.log(balikKata('Super'))