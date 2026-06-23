// Basic Types
// .Primitive types(number, string, boolean)
// .Arrays
// .Tuples
// .Enums
// .Any, Unknown, void, Null, Undefined, Never

// Primitives and reference
// {} [] () in brekets ka matlabb reference.


// Type Assertion
// Type casting 
// Non-null assertion operator

// let a : any = 12;

// (a as string).startwith;
// (a as number).valueOf;
//(<number>a)

// type casting
// let a = Number("12");
// console.log(typeof a);


// Non-null Assertion operator
// let a: null | undefined | string;
// a = "hey";
// a!.  // there we see only string function we not see undefined and null value...





/// Type Guards and TypeScript Utility types...
// using typeof and instanceof
// partial, Required, Readonly

/*function abcd(arg : string | number){
    if(typeof arg === "number"){
        return "number";
    }
    else if(typeof arg == "string"){
        return "string";
    }
    else{
        throw new Error("Error is comming!");
    }

} */

// console.log(abcd(12));
// console.log(abcd("hello"));



// Use of instanceOf

// class Customer {
//     isCreditAllowed(): boolean {
//         // ...
//         return true;
//     }
// }

// class Supplier {
//     isInShortList(): boolean {
//         // ...
//         return true;
//     }
// }

// type BusinessPartner = Customer | Supplier;

// function signContract(partner: BusinessPartner) : string {
//     let message: string;
//     if (partner instanceof Customer) {
//         message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
//     }

//     if (partner instanceof Supplier) {
//         message = partner.isInShortList() ? 'Sign a new contract the supplier' : 'Need to evaluate further';
//     }

//     return message;
// }
