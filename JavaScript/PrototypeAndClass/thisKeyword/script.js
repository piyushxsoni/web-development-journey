// this call apply bind
// this class object method
// Strict mode vs non strict mode
// 'use strict'
// global Object : In window it is called window, in node js, it is called global.
// globalThis : globalThis points to global object of the environment.
// this keyword in global object scope: NodeJS (Empty Object), in browser it will point to global Object


// Normal Function : non strict mode, this will point to global object
// In Strict mode : It Will point to undefined


// this Keyword in global scope: NodeJS(Empty object), in browser it will point to global Object
// arrow function take this kewyord from it lexical environment scope
// call apply bind, this point to the invoking object

// In class constructor, this will point to newly create empty object.





// function greet(name1,name2){
//     console.log(name1,name2);
// }

// greet("Mohit","Rohit");  
// console.log(global);  
// console.log(globalThis);

// 'use strict'
// console.log(this);


// const user = {
//     name:"Rohit",
//     age:30,
//     greet : function(){
//         console.log(this);
//         console.log(this.name);   
//     }

// }

// this == user;

// 'use strict'
// function greet(){
//     console.log(this); // this is made a most famus bug at a time..
//}


// const user = {
//     name:"Rohit",
//     age:30,
// }


// const user2 = {
//     name:"Mohit",
//     age:10,
// }


// function greet(){
//     console.log(`hi ${this.name}`);;
// }
// // // use of call
// // greet.call(user); 
// // greet.call(user2);


// // use of apply and bind

// // 'use strict'
// // function increment(value, name){
// //     this.age += value;
// //     this.name = name;
// //     console.log(this.age);
// //     console.log(this.name);
// // }

// // // increment.call(user2, 10, "piyush");
// // // increment.apply(user2, [10, "piyush"]);
// // const incr = increment.bind(user2, 10, "nam");

// // incr();


// // class
// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }
// const p = new Person("Piysuh", 22);
// console.log(p);

// // Arrow Function : this keyword does not exist for arraow function, lexical environment scope

// const greet = ()=>{
//     console.log(this);
// }

// function meet(){
//     console.log(this); // when strict mode is on then this keyword is point to undefind in normal function but when in non strict mode this will be point to global object. 
// }

// // greet(); 
// meet();

// // In global object this is exist and point to empty string
// console.log(this); 


// // 'use strict'

// const user = {
//     name:"Rohit",
//     greet: function(){
//         // console.log(this);
//         const that = this;
//         function meet(){
//             console.log(that);
//         }
//         meet();
//     }
// }

// user.greet();


// const stopwatch = {
//     second:0,
//     start:function(){
//         console.log(this);
//         setInterval(()=>{
//             this.second++;
//             console.log(this.second);

//         },1000)
//     }
// }

// stopwatch.start();

// // In normal function : this keyword point to button
// const button = document.getElementById("first");
// button.addEventListener('click',function(){
//     console.log(this);
// })

// // In arraow function : this keyword point to window object....
// const button = document.getElementById("first");
// button.addEventListener('click',()=>{
//     console.log(this);
// })


// this keyword : Global Scope in Node JS: {}
// Windows:  Window Object

console.log(this);

// Function : this keyword, if someone invoke the function or method this will point to that
// Normal funtion : when no one is invoking it,
// Non strict: Global Object for node and browser
// strict mode: Undefined

// Arrow function : It takes this from its lexical enovironment scope.







