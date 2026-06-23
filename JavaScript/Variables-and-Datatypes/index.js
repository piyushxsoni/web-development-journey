// how to make variable
let n = "Piyush";
let age = 23;
age = 21;
// console.log(name, age);

const account = 1234; // fix value 

// data type - primitive and non primitive
// Primitive Datatype = number, string, boolean, undefined, null, bigint, symbol 

// Number
let a = 10;
let b = 12.3;
//console.log(a,b);

// String
let c = "Strick is comming";
let d = 'Anjali';
c//onsole.log(c,d);

// boolean
let login = true;
let  f = false;
//console.log(login, f);
console.log(f);

// Undefined
let user;
//console.log(user);
console.log(typeof(user));

// Bigint

let num = 21326453782462376473744687236n;
//console.log(num);
console.log(typeof(num));

// null

let weather = null;
//console.log(weather);
console.log(typeof(weather)); // hare is most famus bug in java script

// symbol
const id1 = Symbol("id");
const id2 = Symbol("id1");
//console.log(id1 ==  id2);
console.log(typeof(id1));

// Non Primitive Data type
// array, object, function

// Array
let arr = [12, 20, 10, "Piyush", true];
//console.log(arr);
console.log(typeof(arr));

// Object
// Rohit 122343 18 gen

let  User = {
    name: "Rohit",
    account : 122343,
    age : 18,
    category  : 'gen' 
}
// console.log(User.name);
console.log(typeof(User));

//  Function
function add(){
    return "Hello";
}
add();

let s = function add(){
    console.log("Hello");
}
//console.log(s);
//s()
