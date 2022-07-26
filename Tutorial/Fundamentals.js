/////VARIABLES


let twoName ='code';
console.log(twoName);

// let first = 'Dylan', last = 'Singhabahu';
// console.log(first);

let first = 'Dylan';
let last = 'Singhabahu';

console.log(first+" "+last);




////CONSTANTS



const interestRate = 0.3;
// interestRate = 1; - creates array cause an constant is trying to be re-assigned
console.log(interestRate)




////PRIMITIVE TYPES

let String = 'Dylan';
let Number = '18';
let Boolean = true;
let undefineD = undefined;
let nulL = null;




////DYNAMIC TYPING - Type of variables can change at run-time

let name = 'Dylan';
console.log(typeof name);
name = 2
console.log(typeof name);



////OBJECTS

let person = {
    realName:'Joseph',
    age:30
}; // {} ==Syntax==>  Object literal

console.log(person)

//DOT NOTATION

person.name='John';
console.log(person.name);

//BRACKET NOTATION

person['name'] = 'Mary';
console.log(person.name);
let selection = 'name';
person[selection] = 'Sam';
console.log(person.name);



////ARRAYS


let array = ['red', 'blue'];
console.log(array[1]);
array[2] = 'green';
array[3] = 2;
console.log(array.length)
console.log(array)



////FUNCTIONS

function greet() {
    console.log('Hello World');
}

greet();

function greet(name) {
    console.log('Hello ' + name);
}

greet('Dylan Singhabahu');


////

let myObj = {
    gift:"pony",
    pet:"kitten",
    bed:"sleight"
};

////////

// hasOwnProperty method using bracket notation

// function checkObj(checkProp) {
//     if (myObj.hasOwnProperty(checkProp)) {
//         return myObj[checkProp];
//     } 
//     else {
//         return "Not found";
//     }
// }

// console.log(checkObj("bed"));

////////Manipulating Complex Objects

let myMusic = [
    {
        hi: "his",
        bye:"bye",
        list: [
            "carrots",
            "apples",
            "potato"
        ],
        gold: true
    },
    
    {
        artist:"Dylan",
        listTwo: [
            "potato"
        ]
    }
]
console.log(myMusic[1].listTwo[0]);