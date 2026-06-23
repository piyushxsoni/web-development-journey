// Arrays
// An emptyList
let emptyList = [];

// An array of numbers
let nums = [85, 57, 35, 83];

// An array of strings
let names = ["piyush", "alice", "bob", "jorj"];

// An array can hold different data types
let mixData = [24, "hello", true, null, 3.7];


//The .length property
let fruits = ["Apple", "Banana", "Cherry", "grapes"];
// console.log(fruits.length);


// Accessing and changing Elements
fruits = ["Apple", "Banana", "Cherry"];
// Index:      0        1         2

// Accessing (reading) an element
// console.log(fruits[0]); // "Apple"

// Changing (writing) an element
fruits[1] = "Blueberry";
// console.log(fruits); // ["Apple", "Blueberry", "Cherry"]

// Getting the last element
// console.log(fruits[fruits.length - 1]); // "Cherry"


// Basic array modifications(mutating of the array)

// A. Adding/Removing array from the END of the Array
// * push and pop
 
let tasks = ["Wash dishes"];
tasks.push("do loundry", "buy groceries");
// console.log(tasks);

let completedTask = tasks.pop();
// console.log(completedTask);
// console.log(tasks);

// B.Adding/Removing from the BEGINNING of the array 
// * unshift() : Adds one more items to the beginning.
// * shift() : Removes the first item and gives it back to you.

let queue = ["person B", "person C"];
queue.unshift("person A");
// console.log(queue);

let firstInLine = queue.shift();
// console.log(firstInLine);
// console.log(queue);


// looping Over an Array

let scores = [98,85,100];
let total = 0;   


// Advance array Manupulation
// Splice() - this is a powerful mutating method that can add, remove, or replace elements anywhere in the array.

let months = ["Jan", "March", "april", "June"];

months.splice(1,1);
// console.log(months);

months.splice(1,0,"Feb");


// Array slice 
let animals = ["ant", "bison", "camel", "duck", "elephant"];
let middleAnimals = animals.slice(2,4);
let allButFirstTwo = animals.slice(2); 
// console.log(middleAnimals);
// console.log(allButFirstTwo);


// Spread operators

const arr = [10,30,50,90,11];
const arr2 = ["Piyush", 11, true];
const arr4 = [34,55,7,68,54];

// arr.push(arr2);
// const arr3 = arr.concat(arr2, arr4);
const arr3 = [...arr,...arr2,...arr4]; // spread operator
console.log(arr3);


