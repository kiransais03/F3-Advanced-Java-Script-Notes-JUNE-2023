// objB is inherting from objA

/// properties of objA will be 
/// accesible in objB as well as methods
// let arr=[1,2];

// let obj={
//     name:'pc',
//     city:'Blr',
//     getInro(){
//         console.log('hi !!');
//     }
// }

/// There is something known as
/// Prototype, whenever you create a object, J.S
// Engine automatically attaches your object 
/// with hidden properties & methods
/// these are methods. you can access by just doing
/// obj. ;

// function abc(){
//     console.log('hello');
// }

let arr=[1,2,3];
/// arr.__proto__

/// arr was inherting properties
// from Array.
// Array is inherting propeties from Object.

// function abc(){
//     console.log('hhh');
// }

//// abc is inherting properties
/// from Function. 
/// Function is inherting properites from Object.

///abc.__proto__.__proto__ -> Object.prototype.
///abc.__proto__.__proto__.__proto__ -> null;

// prototype chain
/// Prototypycal inheritance
let obj1 = {
    name:'pc',
    city:'Blr',
    placeOfBirth: 'Dilli',
    getInro(){
        console.log(this.name, this.city, this.placeOfBirth);
    }
}

let obj2={
    name:'Satish',
    city:'Delhi',
}

// obj2 is inherting from Object
// obj2.__proto__

obj2.__proto__ = obj1;


/// obj2.__proto__ -> Object.prototype
/// obj2.__proto__.__proto__ -> null;

/// obj1.__proto__ -> Object.prototype
/// obj1.__proto__.__proto__ -> null;


// obj2.__proto__.__proto__.__proto__ -> null