//* this is some assgiments on higher order fucntions
//! all this solutions by => lamonaDev

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let ignoreNums = mix.map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : ``
}).reduce((acc, current) => `${acc}${current}`)
console.log(ignoreNums);


let myString = "EElllzzzzzzzeroo";
function final() {
    function firstCh() {
        let result = myString.split('').filter(function (ele) { return ele === 'E' }).pop()
        return result} 
        function secondCh() {
        let result = myString.split('').filter(function (ele) {return ele === 'l'}).pop()
        return result}
        function thrdCh() {
        let result = myString.split('').filter(function (ele) {return ele === 'z'}).pop()
        return result}
        function fourthCh() {
        let result = myString.split('').filter(function (ele) {return ele === 'e'}).pop()
        return result}
        function fifthCh() {
        let result = myString.split('').filter(function (ele) {return ele === 'r'}).pop()
        return result}
        function finalCh() {
        let result = myString.split('').filter(function (ele) {return ele === 'o'}).pop()
        return result}
    return `${firstCh()}${secondCh()}${thrdCh()}${fourthCh()}${fifthCh()}${finalCh()}`
}
console.log(final());
//! another solution 
let myStringInOtherS = "EElllzzzzzzzeroo";
let remover = myStringInOtherS
.split("")
.reduce(function (acc, current) {
    return `${acc}${current}`;
    })
.replace("EE", "E")
.replace("lll", "l")
.replace("zzzzzzz", "z")
.replace("oo", "o");
console.log(remover);


let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
const invertedNums = numsAndStrings.filter(function (ele) {
    return typeof ele ==="number"
}).map((ele) => -ele)
console.log(invertedNums);
// [-1, -10, 10, 20, -5, -3]

let myArray = ["E", "l", "z", ["e", "r"], "o"];
const concatinating = myArray.reduce(function (acc, current) {
    return `${acc}${current}`
})
const removeExtra = concatinating.split('').filter((ele) => ele !== ',').join('')
console.log(removeExtra);


let nums = [2, 12, 11, 5, 10, 1, 99];
let finalResult = nums.reduce(function (acc, current) {
    if (current % 2 !== 1) {return acc * current;}
    else if (current % 2 === 1) {return acc + current;}
},1)
console.log(finalResult);
// 500

console.log(2 % 2);
console.log(12 % 2);
console.log(11 % 2);
console.log(5 % 2);
console.log(10 % 2);
console.log(1 % 2);
console.log(99 % 2);

var createHelloWorld = function() {
    return function (...args) {
        for (let i = 0; i < args.length; i++) {
            if (typeof args[i] === 'string') {
                return console.log(`Hello World`);
            }
        }
    }
}
const f = createHelloWorld();
f('dd',99, undefined, true, false);// "Hello World"