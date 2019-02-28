function Letter(char){
    this.char = char
    this.showLetter = false
}
var testLetter = new Letter("a")
console.log(testLetter);

module.exports = Letter;