// object
// key value
const user = {
   name: "Rohit",
   age: 20,
   emailId: "negi@gmail.com",
   amount: 3400,
   "home address": "dwarka"
}


// console.log(user["name"]);
// console.log(user.age);
// console.log(user["age"]);
// console.log(user["home address"]);
// console.log(typeof user);
// CRUD operation: Create read update delete


// console.log(user.age);

//  update
// user.aadhar = 1234;
// user.amount = 5000;

// console.log(user);

// // delete
// delete user.emailId;
// console.log(user);


// const user = {
//    name: "Rohit",
//    age: 20,
//    emailId: "negi@gmail.com",
//    amount: 3400,
// }

// const user2 = user;
// user2.age = 90;

// console.log(user);

// Important

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// for(let keys in user){
//     console.log(keys, user[keys]);
// }

// user.keys user["name"] user["age"]


// const user = {
//    name: "Rohit",
//    age: 20,
//    emailId: "negi@gmail.com",
//    amount: 3400,
// }

// for of loop array ke
// const temnparr = Object.keys(user);
// console.log(temnparr)
// for(let keys of temnparr){
//     console.log(keys);
// }

// for(let values of Object.values(user)){
//     console.log(values);
// }

// console.log(Object.entries(user));
// [
//   [ 'name', 'Rohit' ],
//   [ 'age', 20 ],
//   [ 'emailId', 'negi@gmail.com' ],
//   [ 'amount', 3400 ]
// ]

// for(let [keys,values] of Object.entries(user)){
//     console.log(keys, values);

// }


// const name = user.name;
// const age = user.age;

// object ko destructing karna
// const {name:userName,age:userAge} = user;

// const arr = [10,20,40,90,11];

// const [first,second]= arr;

// console.log(userName,userAge);
// console.log(first,second);


// const user = {
//    name: "Rohit",
//    age: 20,
//    emailId: "negi@gmail.com",
//    amount: 3400,
//    greeting: function(){
//     console.log(`Strike is coming on 18 october ${this.name}`);
//     return 20;
//    }
// }

// const user2 = {
//     name:"Mohan",
//     account:201,
//      greeting: function(){
//     console.log(`Strike is coming on 18 october ${this.name}`);
//     return 20;
//    }
// }

// user2.greeting = user.greeting;

// user2.greeting();
// const va = user.greeting();
// console.log(va);

// nested object

// const user = {
//    name: "Rohit",
//    age: 20,
//    emailId: "negi@gmail.com",
//    amount: 3400,
//    address: {
//     city:"kotdwar",
//     state:"Uttarkhand"
//    }
// }

// shallow copy
// const user2 = {...user};
// user2.name = "Mohan";
// user2.address.city = "Dwarka";

// console.log(user2);

// console.log(user.address.city);


// deep copy

// const user2 = structuredClone(user);
// user2.address.city = "Dwarka";
// console.log(user);
// keY; String || Symbol

// const sym = Symbol("id");

// const user = {
//     name:"Rohit",
//     age:20,
//     0: 100,
//     2: "Mohan",
//     [sym]:"Hello Ji"
// }

// const arr = [10,20,30,40];

// {
//     0:10,
//     1:20,
//     2:30,
//     3: 40
// }

//  console.log(user[sym]);


// Create an object for a student with name, age and isEnrolled.

// let obj = {
//    name : "Piysuh",
//    age : 22,
//    isEnrolled : true, 
// }

// Can an object key be a number or boolean ? 
const obj = {
   true : "Yes",
   42 : "answer",
};
// console.log(obj[true]);

// Access the value of "first-name" from this object :
const User = {
   "first-name" : "Hasrh",
};
// console.log(User["first-name"]);

// Given a dynamic key ley key = "age", how will you access user[key] ?

// let key = "age"; 
// const user1 = {
//    "age": 26,
// }
// console.log(user1[key]);


// from the object below, print the latitude:

// const locations= {
//    city : "Bhopal",
//    coordinates: { 
//       lat : 23.2,
//       lng : 77.4,
//    },
// };
// console.log(locations.coordinates.lat);
  
// 7. -> What will happpen if coordinates is missing ? How can you prevent errors ?

const locations= {
   city : "Bhopal",
   coordinates: { 
      lat : 23.2,
      lng : 77.4,
   },
};
// console.log(locations?.coordinates?.lat);

// 8 -> Destructure the city and lat from location object above.

let {city} = locations;
let {lat} = locations.coordinates;
// console.log(city,lat);

// Destructure the key "first-name" as a variable called first Name.
const user2 = {
   "first-name" : "Harsh",
};

let {"first-name" : firstName} = user2;
// console.log(firstName);

// Use for-in to log all keys in this object:
const course = {
   title: "javaScript",
   duration: "4 weeks",
};

for(let key in course){
   // console.log(key);
}

// Use object.entries() to print all key-value pairs as: 
// title: JavaScript
// duration : 4 week

Object.entries(course).forEach(function (val){
   // console.log(val[0]+": "+ val[1]);
});

// copy by spread operator
const original = {a:1, b:2};
const copy = {...original};
// console.log(copy);

const obj1 = {info: {score: 80}};
const clone = {...obj1};
clone.info.score = 100;
// console.log(obj1.info.score);

// Deep clone the obj1 safely.
const obj2 = {info :{Score : 80}};
let newobj = JSON.parse(JSON.stringify(obj1));
newobj.info.score = 100;
// console.log(newobj);
// console.log(obj2);

// Rewite this safely using optional chaining:
const person = {};
// console.log(person?. peofile?.namw);

// use a variable to dinamically assign a property
const key = "role";
let obj3 = {
   name : "harsh",
   [key] : "admin",
};
console.log(obj3[key]);

