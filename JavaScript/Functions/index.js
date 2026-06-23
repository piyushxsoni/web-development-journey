// Function

//  function

// function greeting(){
//     console.log("Hello Coder Army, Strike is coming on 18 october");
//     return 10;
// }


// function addNumber(num1,num2,num3=0,num4=0){
    
//     const sum = num1+num2+num3+num4;
//     console.log(sum);
// }

// greeting();
// addNumber(3,4);

// rest operator
// function addNumber(...num){
   
//     let sum=0;

//     for(let n of num){
//         sum+=n;
//     }

//     console.log(sum);
    
// }


// addNumber(6,7);
// addNumber(6,7,8);
// addNumber(6,7,8,9);
// addNumber(7,8,12,12,11,12,41,12)

// console.log(greeting());


// const arr = [10,20,30,40,50];
// const arr2 = [30,70,90,10]

// const [first,second, ...num] = arr;
// console.log(first,second, num);

// const ans = [arr,arr2];
// console.log(ans);



// function: expression

// console.log(addNumber(3,4));

// function addNumber(num1,num2){
//     return num1+num2;
// }




// const addNumber =function(num1,num2){
//     return num1+num2;
// }

// console.log(addNumber(3,4));


// arrow function

// ()=>{

// }

// const addNumber = (num1,num2)=>{
//    return num1+num2;
// }

// let arr = [10,11,19,7,50];

// arr.sort((a,b)=>b-a);
// console.log(arr);

// const addNumber = (num1,num2) => num1+num2;


// if we have single parameter, no need of this ()
// const squareNumber = num => num*num;



// // console.log(addNumber(3,4));
// console.log(squareNumber(6));


// const greeting = ()=> {
//     return {
//         name:"Rohit",
//         age:20,
//     }
// }


// const greeting = ()=> ({ name:"Rohit",age:20});


// console.log(greeting());


// IIFE

// (function greeting(){
//     console.log("Helloji");
// })();

// (()=>{
//     console.log("hi");
// })();


// 

// function greet(){
//     console.log("Hello Ji, Kaise ho")
// }

// function dance(){
//     console.log("I am dancing");
// }

// function meet(callback){
//     console.log("I am going to meet someone");
//     // dance(); hardcode (Reusable)
//     // code hota jisko marta
//     callback();
//     console.log("I have finished meeting");
// }

// meet(greet);
// meet(dance);

// blinkit

function blinkitOrderPlaced(){
    // console.log("We have started packing your Order");
}

function zomatoOrderPlaced(){
    // console.log("We have started preparing your food");
}

function payment(amount,callback){
    // console.log(`${amount} payment has initilized`)
    // console.log("Payment is received");
    callback();

    // GST: Government
    // Rider ko kitna payment dena
    // company ko kitna 
}

payment(500,zomatoOrderPlaced);
payment(300,blinkitOrderPlaced);


// Practice Questions
// Q1 : What's the difference between function declaration and expression in terms of hoisting ?

fun();
// let f = function fun(){
//  } // function hoisting

function fun(){
} // function statement 

// Q2 :  convert a function in arrow function
// function multiply(a, b){
    // return a*b;
// }

let multiply = (a,b) =>{ // this is fat arrow function
    return a*b; 
}

// Q3 : What does the ... operator mean in parameter ? 
function abcd(a,b,c,...val){
// console.log(val);
}
abcd(1,2,3,4,5,6,7,8);

// Q4 : Use rest parameter to accept any number of scores and return the total.
function getScore(...scores){
    let total = 0;
    // console.log(scores);
    scores.forEach(function(val){
        total = total + val;
    });
    // console.log(total);
}

getScore(10,12,14,18);


// Q5 Early return
function checkAge(age){
    if(age < 18) return "Too Young";
    else  return "Allowed";
}
// console.log(checkAge(2));


// Q5: what does it mean when we say " functions are first-class citizens" ?
// ans : functions we treated like values


// Q6 : Pass a function into another function and execute it inside.

function abc(val){
    val();
}
abc(function(){
    // console.log("Hey");
})

// What is a higher - order function ?
function any(val){
    val();
}
any(function(){
});

// change inpure function to pure function
// let total = 0; 
// function addToTotal(num){ // this is an   impure function
//     total += num;
// }
// convert impure to pure
let total = 0;
function addToTotal(num){ // this is an pure function
    let newtotal;
    newtotal += num;
}

// What is closure ? what is it created?
// Closure is a function that return another function and inner function use a value that declare in outer function
function outer(){
    let count = 0;
    return function(){
        count++;
        // console.log(count);
    };
}

const counter = outer();
counter();
counter();

// Convert this normal function into an IIFii -> using this ()
// (function init(){
//     console.log("Initialized");
// })()

// Usecases of IIFii
let shery = (function(){
    let score = 0;
    return {
        getScore : function(){
            console.log(score);
        },
        setScore : function (val){
         score = val;
        },
    };
})();
// shery.setScore(23);
// shery.getScore();

// What will be the output here and why?
greet();
//var greet = function () { // Error
function greet(){   
    console.log('Hi'); // Hi
}

