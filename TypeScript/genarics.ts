// Generics
// Generics function
// Generics interface
// Generics classes

// we make a function that accept any value and print it

// <T> = This is called template function....

// "Hey" = it is normal String
// note : in Ts a normal string is not called string it is called string literal
function log<T>(val:T){
    console.log(val);
}
// log<string>("hey");
log("hey");

function abc<T>(a:T, b:T) : T{
    // return "Hey" as T;
    return <T>"Hey"; // Type conversion......
}

abc<string>("hey", "hello");


// Genarics Interface.....

interface inter<T>{
    name : string;
    age : number;
    key : T;
}
function abcd(obj: inter<string>){}
abcd({name : "piysuh", age : 22, key:"jvdbsab"});


// Generics Classes.....

class Bottlemaker<T>{
    constructor(public key : T){}
}

let b1 = new Bottlemaker<string>("hey");
let b2 = new Bottlemaker<number>(24);

console.log(b1,b2);