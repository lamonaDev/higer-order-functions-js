//* this challenge is on (elzero web schools)
//! the challenge link => https://elzero.org/javascript-2021-higher-order-functions-challenge/
//? there is more than solution for this challenge
/*
Higher Order Functions Challenges

You Can Use
- ,
- _
- Space
- True => 1 => One Time Only In The Code

You Cannot Use
- Numbers
- Letters

- You Must Use [Filter + Map + Reduce + Your Knowledge]
- Order Is Not Important
- All In One Chain

*/
//! higher order fucntion challenge
let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

//! initial solution
let solution = myString.split('').filter(function (element) {
    return isNaN(parseInt(element));}).filter(function (element) {return element !== ',';
    }).reduce(function (acc, current) {
        return `${acc}${current}`
    }).slice(true, (true + true + true + true) * (true + true + true + true) + true + true)
    .split('').filter(function (ele) {
        return ele !== '_';
    }).map(function (ele) {
        return ele === 'W' ? ' W' : ele
    }).map(function (ele) {
        return ele === "S" ? " S" : ele;
    }).reduce(function (acc, current) {
        return `${acc}${current}`
    })
    console.log(solution); // Elzero Web School

//! second solution (ES5)

let myStringInSecondSolution = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solutionTwo = myStringInSecondSolution.split(',')
    .filter(function (ele) {
    return isNaN(parseInt(ele))
    }).map(function (ele) {
    return ele.length!=Number(true) ? ele[Number(true)] : ele
    }).map(function (ele) {
    return ele == '_' ? ele = " " : ele
    }).map(function (ele) {
        return ele == 'Z' ? ele = `` : ele
    }).reduce(function (acc, current) {
        return `${acc}${current}`
    })
console.log(solutionTwo);

//! second solution (ES6)

let myStringInTherdSolution = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

const solutionThree = myStringInTherdSolution.split(',')
    .filter((ele) => isNaN(parseInt(ele)))//todo: check each element ? ele : number
    .map((ele) => ele.length > Number(true) ? ele[Number(false)] : ele)//todo: check each element length in array 
    .map((ele) => ele === '_' ? ele = ' ' : ele) //todo: mapping each element if it is == '_' ? repleace it => ' '  : put other elements
    .slice(0, -1)//todo: remove the last character in the array
    .reduce((accumlator, currentValue) => `${accumlator}${currentValue}`)//todo: joining all values together

console.log(solutionThree);