//* this is some models on higher order functions
//! all this is by => lamonaDev
//! higher order functions //
//! map // 

let mainArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayAccsess = mainArray.map(function mainArrayAccsess(element, index, array) {
    console.log(`This is Element => '${element}'`);
    console.log(`This is The index of each element => '${index}'`);
    console.log(`This is the main array => '${array}'`);
    console.log(`This is "This Argument" => '${this}'`);
    console.log(`---------------------------------------`);
}, 10) 

//? (map) is dealing with array only
//? to concatinating elemnts again after splitting use .join('')

let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";

let sNum = swappingCases
    .split('')
    .map((elements) => elements === elements.toLocaleLowerCase()
        ? elements.toLocaleUpperCase()
        : elements.toLocaleLowerCase())
    .join('');
console.log(sNum);


let invNums = invertedNumbers.map((elements) => -elements);//? '-'  x '+' = '-' & '-' x '-' = '+'
console.log(invNums);


let ignoreNums = ignoreNumbers.split('').map((elements) =>
    isNaN(parseInt(elements)) ?
    elements : ``).join('')
console.log(ignoreNums);
console.log(isNaN(NaN));

let stringg = "A1y2m3a4n5";
let removeNums = stringg.split('').map((Element) =>
    isNaN(parseInt(Element))
        ? Element
        : ``)
    .join("")//? if the element is a string so its 

console.log(removeNums);

const array = ["Ayman", "Mohamed", "Fathy"];
let setLengthForElements = array.map((Element) => Element.length);
console.log(setLengthForElements); //? =>  [5, 7, 5]

//! ES6
["Ahemd", "Mohamed", "Fathy"].map((e) => console.log(e.length));


let ArrayForExample = ['One', 'Two', 'Three', 'Four', 'Five'].map(function(el, ind, ar)  {
    console.log(this);
return `The Element Itself: ${el}
The Index Of The Eelement: ${ind}
The Entire Array: [${ar.join(', ')}]
---------------------------------
`}).join('')
console.log(ArrayForExample);


//! another model for (.map);
let students = ['Ayman', 'Mohamed', 'Fathy'];
let studentsInfo = students.map(function (name, code) {
    return `Hello, ${name}
Your Code: x${parseInt(Math.random() * Number(100))}${code}
------------`
}, 10).join('\n');
console.log(studentsInfo);

let arrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filterNums = arrayOne.filter((a) => (a % 2 !== 0 ? a : ""));
//? filter returns the new array with only true elements from the main array throw the condition
console.log(filterNums);
console.log(1 % 2);
console.log(2 % 2);
console.log(3 % 2);
console.log(4 % 2);
console.log(5 % 2);
console.log(6 % 2);


let arrayTwo = ['Ayman', 'Mohamed', 'Fathy', 'Khaled'];
let filterSyntax = arrayTwo.filter(function (element, index, mainArray) {
    console.log(`Element: ${element}`);
    console.log(`ElementIndex: ${index}`);
    console.log(`MainArray: [${mainArray.join(', ')}]`);
    console.log(`\n`);
}, 10)
console.log(filterSyntax);

/*
-Filter
--- method creates a new array
--- with all elements that pass the test implemented by the provided function.

Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
- Element => The current element being processed in the array.
- Index => The index of the current element being processed in the array.
- Array => The Current Array
*/

// Get Friends With Name Starts With A
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

let filterdFriends = friends.filter(function (el) {
    return el.startsWith("A") ? true : false;
});

console.log(filterdFriends);

// Get Even Numbers Only
let numbers = [11, 20, 2, 5, 17, 10];

let evenNumbers = numbers.filter(function (el) {
    return el % 2 === 0;
});

console.log(evenNumbers);

// Test Map vs Filter

// let addMap = numbers.map(function (el) {
//   return el + el;
// });

// console.log(addMap);

// let addFilter = numbers.filter(function (el) {
//   return el + el;
// });

// console.log(addFilter);


// Filter Strings + Multiply


//! my solution 
let mix = "A13BS2ZX";
let filterNumss = mix.split("").filter(function (el) {
    return  +el }).map(el => el * el).join('')
console.log(filterNumss);

//! Elzero solution
let mixedContent = mix.split("").filter(function (ele) {
    return !isNaN(parseInt(ele));
}).map(function (ele) { return ele * ele }).join("");

console.log(mixedContent);


var stringgg = 'Ayman1122Mohamed3333Fathy';
var clearNums = stringgg.split('').map(ele => isNaN(parseInt(ele)) ? ele : '').join(' ')
for (let i = 0; i < stringgg.length; i++) {
    var spaces = clearNums.split('')
    if (typeof spaces[i] === 'string' && spaces[i] === ' ') {continue;}
}
console.log(spaces.join(''))


const main = [
    {
        name: 'Ayman',
        Age: Number(18),
        occupation: 'Web Developer'
    },
    {
        name: 'Sara',
        Age: 25,
        occupation: 'Graphic Designer'
    },
    {
        name: 'Mohamed',
        Age: 30,
        occupation: 'Software Engineer'
    }
]
const namesAtOverAge = main.filter(ages => ages.Age > Number(19)).map(names => `${names.name}`);
const overAges = main.filter(ag => ag.Age > 18);
const names = main.map(person => person.name);
const ages = main.map(ages => ages.Age);
const occupation = main.map(oc => oc.occupation)
console.log(namesAtOverAge);
console.log(overAges);
console.log(names);
console.log(ages);
console.log(occupation);

// Reduce => to accumluate any numbers in any array.

const totalAges = main.reduce((total, persons) => { //? total == 0 in this statement
    return total + persons.Age // todo: total = 0 + persons.Age = (19 + 25 + 30) = 73
}, 0) // todo: this arg define the current value for the (total) => parameter = 0
console.log(totalAges);

const totalNames = main.reduce((val, persons) => {
    return val + persons.name
}, 0) //! ES5
const totalNamesES6 = main.reduce((val, persons) => val + persons.name,0)
console.log(totalNames);
console.log(totalNamesES6);


const studentsSwitchModel = [
    {name: 'Ayman', Age: Number(19), Grade: 'Grade 11th'},
    { name: 'Zainab', Age: Number(20), Grade: 'Grade 9th'},
    { name: 'Khaled', Age: Number(22), Grade: 'Grade 7th'},
    { name: 'Sara', Age: Number(13), Grade: 'Grade 6th'},
    { name: 'Ali', Age: Number(4), Grade: 'SToddler'},
    { name: 'Ahmed', Age: Number(10), Grade: 'Pre-School' },
    { name: 'Hamo', Age: Number(40), Grade: 'Freshmen'}]
let studentsOlder = studentsSwitchModel.filter(names => names.Age >= 18 ? names.name : false);
let studentsNameOlder = studentsOlder.map(names => names.name);
let studentsAgeOlder = studentsOlder.map(names => names.Age);
let studentsGradeOlder = studentsOlder.map(names => names.Grade);
let studentsYounger = studentsSwitchModel.filter(names => names.Age < 18 ? names.name : false);
let studentsNameYounger = studentsYounger.map((names) => names.name);
let studentsAgeYounger = studentsYounger.map((names) => names.Age);
let studentsGradeYounger = studentsYounger.map((names) => names.Grade);
const breakingAge = 'olderStudents'
function olderStudents() {
    for (let i = 0; i < studentsOlder.length; i++) {
        console.log(`Name: ${studentsNameOlder[i]}
Age: '${studentsAgeOlder[i]}'
Grade: ${studentsGradeOlder[i]}
------------------------`);
    }
    return``
}
function youngerStudents() {
    for (let i = 0; i < studentsYounger.length; i++) {
        console.log(`Name: ${studentsNameYounger[i]}
Age: '${studentsAgeYounger[i]}'
Grade: ${studentsGradeYounger[i]}
------------------------`);
    }
    return``
}
function Unkown() {
    for (let i = 0; i < 6; i++) {
        console.log(`Unkown`);
    }
    return  ``
}
switch (breakingAge) {
    default: Unkown(); break;
    case 'olderStudents': olderStudents(); break;
    case 'youngerStudents': youngerStudents(); break;};
    


    //! reduce method model

let mainArrayInReduce = [10, 20, 30, 40, 50];

let add = mainArrayInReduce.reduce(function (acc, current, currentIndex, mainArr) {
  //todo: (Acc) => 'first value in the array' == 0 index
  //todo: (current) => 'the current value in the array starting from index 1'
  //todo: (current Index) => 'the current index of the element in the array'
  //todo: (mainArray) => 'is a parameter define the main array of all elements'
    return `Accumlator => ${acc} 
Current Element => ${current} 
Current Element Index => ${currentIndex} 
Main Array => ${mainArr} 
-------------------------`;
}, 10) //todo: 10 => initial value 
console.log(add);

//! Another Model

//? you have the main array have some nums and you have to accumlating numbers in single value

const numbersInReduce = [10, 20, 30, 40, 50];
const addition = numbersInReduce.reduce((acc, current) => acc + current);
//todo: the firse iteration | acc = '10' && current = '20' => 10 + 20 = 30
//todo: the second iteration | acc = '30' && current = '30' => 30 + 30 = 60
//todo: the 3rd iteration | acc = '60' && current = '40' => 60 + 40 = 100
//todo: the 4th iteration | acc = '100' && current = '50' => 100 + 50 = 150
//? the final result is 150
//? the current parameter is passing over all array index's starting from 1 if there is no initial value
console.log(addition);


/*
Reduce
- Longest Word
- Remove Characters + Use Reduce
*/

let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test", "Propaganda_Two"];
const biggest = theBiggest.reduce(function (acc, current) {
    return acc.length > current.length ? acc : current
}) 
console.log(biggest);


let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];
const ignoreCh = removeChars.filter(function (Eelement) {
    return Eelement !== '@';
}).map(ele => isNaN(parseInt(ele)) ? ele : ``).reduce((acc, current) => `${acc}${current.toLocaleLowerCase()}`)
console.log(ignoreCh);


let mixx = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let ignoreNumss = mixx.map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : ``
}).reduce((acc, current) => `${acc}${current}`)
console.log(ignoreNumss);


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
let myStringIn = "EElllzzzzzzzeroo";
let remover = myStringIn
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
//! explain the solution:
//todo: first iteration (acc = 1 , && 2 %'s !== 1 => 1 * 2 = 2 , acc = 2)
//todo: second iteration (acc = 2 , && 12 %'s !== 1 => 2 * 12 = 24 , acc = 24)
//todo: 3rd iteration (acc = 24 , && 11 %'s === 1 => 24 + 11 = 35 , acc = 35)
//todo: 4th iteration (acc = 35 , && 5 %'s === 1 => 35 + 5 = 40 , acc = 40)
//todo: 5th iteration (acc = 40 , && 10 %'s !== 1 => 40 * 10 = 400 , acc = 400)
//todo: 5th iteration (acc = 400 , && 1 %'s === 1 => 400 + 1 = 401 , acc = 401)
//todo: 6th iteration (acc = 401 , && 99 %'s === 1 => 400 + 99 = 500 , acc = 500) // the final result ! 

console.log(2 % 2);
console.log(12 % 2);
console.log(11 % 2);
console.log(5 % 2);
console.log(10 % 2);
console.log(1 % 2);
console.log(99 % 2);


//! higher order fucntion challenge
let myStringgg = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

//! initial solution
let solution = myStringgg.split('').filter(function (element) {
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
    }).reduce(function (acc, current) {éé
        return `${acc}${current}`
    })
console.log(solutionTwo);

const anyString = 'Ayman' 
console.log(anyString.slice(0, -1));


//! second solution (ES6)

let myStringInTherdSolution = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

const solutionThree = myStringInTherdSolution.split(',')
    .filter((ele) => isNaN(parseInt(ele)))//todo: check each element ? ele : number
    .map((ele) => ele.length > Number(true) ? ele[Number(false)] : ele)//todo: check each element length in array 
    .map((ele) => ele === '_' ? ele = ' ' : ele) //todo: mapping each element if it is == '_' ? repleace it => ' '  : put other elements
    .slice(0, -1)//todo: remove the last character in the array
    .reduce((accumlator, currentValue) => `${accumlator}${currentValue}`)//todo: joining all values together

console.log(solutionThree);

//! croCoder (practice on higher order functions)
//todo: (first challenge)
const input = [1, 2, 3, 4, 5]; //? [1, 4, 9, 16, 25]; using .pow()
const solutionn = input.map(e => Math.pow(e,2));
console.log(solutionn);

//todo: (second challenge)

const inputTwo = [1, -4, 12, 0, -3, 29, -150]; //? 42;
const solutioTwo = inputTwo.filter(e => typeof e === 'number' && e > Number(false)).reduce((a, c) => a + c)
console.log(solutioTwo);

//todo: (3rd challenge)

const inputThree = "George Raymond Richard Martin"; //? "GRRM";
const solutionThreee = inputThree
    .split('')
        .map(e => e === e.toLocaleUpperCase() ? e : ``)
            .join('')
                .split(' ')
                    .join('')
const crocoderSolutionThree = inputThree.split(' ').map(e => e[0]).join('')
console.log(`"${solutionThreee}"`);

//todo: (4th challenge)

const inputFour = [
    { name: "John", age: 13 },
    { name: "Mark", age: 56 },
    { name: "eslam el marg", age: 45 },
    { name: "Nate", age: 67 },
    { name: "Jennifer", age: 65}
];
const agess = inputFour.map(person => person.age);
const solutionFour = Array(`${Math.min(...agess)}`, `${Math.max(...agess)}`, `${Math.max(...agess) - Math.min(...agess)}`)
console.log(solutionFour);

//todo: (5th challenge)

const inputFive = "Every developer likes to mix kubernetes and javascript"; //? "E3y d7r l3s to mix k8s and j8t";
const solutionFive = inputFive.split(' ')
    .map((e) => e.length > inputFive.indexOf('y') ? `${e[Number(false)]}${e.slice(Number(true), Number(-true)).length}${e.slice(Number(-true))}` : e)
    .reduce((a, c) => `${a} ${c}`)
console.log(solutionFive);

const normalArray = [1, 2, 3, 4, 5]; //? multiply with normal map and foreach
const normalArrayWithMap = normalArray.map((e) => e * e);
const normalArrayWithForEach = normalArray.forEach(function (e) {
  return console.log(e * e);
}); //? returns for loop for the main array and multiply each element and returns undif at the end
console.log(normalArrayWithForEach);

//! revision on higher order functions
const data_container = Object.create({
    string: {
        name: 'Ayman Mohamed Fathy',
    },
    number: Number(1),
    boolean: {
    true: Boolean(true),
        false: Boolean(false),
    },
})
let name_from_data_container = data_container.string.name;
name_from_data_container = 'A23yman_M404ohamed_Fathy';
// console.log(name_from_data_container);
let filterStringFunction = name_from_data_container
    .split('')
    .filter((element) => isNaN(Number(element)) ? element : ``)
    .reduce((acc, currentVal) => `${acc}${currentVal}`)
    .split('')
    .map((element) => element === '_' ? ' ' : element)
    .reduce((accumlator, currentVal) => `${accumlator}${currentVal}`)
    .split('')
    .reduce((acc, mainVal) => `${acc}${mainVal}`);
console.log(filterStringFunction);

let myStringg = "EElllzzzzzzzeroo";
let uniqueString = myStringg.split('').filter((value, index, self) => {
    return self.indexOf(value) === index;
}).join('');
    
console.log(uniqueString); // Output: "Elzro"

const arrayy = [1, 2, 3, 4, 5, 5, 6];
const arrayFliter = arrayy.filter((value, index, mainSelfArray) => {
    return mainSelfArray.indexOf(value) === index; //todo: return the main array with all index's with condition to be identical to the the self index
});
console.log(arrayFliter);

let str = 'ayman';
let scc = str * 3;
console.log(scc);