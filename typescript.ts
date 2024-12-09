// Strict mode is enabled by default in TypeScript
'use strict';

// 1. Comments demonstration
// This is a single-line comment
/* This is a 
   multi-line comment */

// 2. Variable declarations
// Different ways of declaring variables
let firstName: string = 'John';  // Mutable variable
const lastName: string = 'Doe';  // Immutable variable
var age: number = 30;  // Function-scoped variable (avoid in modern TS)

// 3. Data Types Demonstration
// Primitive Types
let id: number = 42;  // Number
let isStudent: boolean = true;  // Boolean
let email: string = 'john.doe@example.com';  // String

// 4. Arithmetic Operations
let x: number = 10;
let y: number = 5;
let sum: number = x + y;  // Addition
let difference: number = x - y;  // Subtraction
let product: number = x * y;  // Multiplication
let quotient: number = x / y;  // Division
let remainder: number = x % y;  // Modulus

// 5. String Concatenation and Interpolation
let greeting: string = firstName + ' ' + lastName;  // Concatenation
let templateGreeting: string = `Hello, ${firstName} ${lastName}!`;  // Template Literal

// 6. Arrays
let hobbies: string[] = ['Reading', 'Coding', 'Gaming'];  // Array of strings
let mixedArray: (string | number)[] = [1, 'two', 3];  // Mixed type array

// 7. Objects
interface Person {
    name: string;
    age: number;
    email?: string;  // Optional property
}

let person: Person = {
    name: 'John Doe',
    age: 30
};

// Adding a property
person.email = 'john.doe@example.com';

// Destructuring assignment
const { name, age: personAge } = person;

// 8. Null, Undefined, NaN
let nullValue: null = null;
let undefinedValue: undefined = undefined;
let notANumber: number = NaN;

// 9. Math Methods
let randomNumber: number = Math.random();  // Random number between 0 and 1
let roundedNumber: number = Math.round(4.7);  // Round to nearest integer
let ceilingNumber: number = Math.ceil(4.1);  // Round up
let floorNumber: number = Math.floor(4.9);  // Round down

// 10. Date Handling
let currentDate: Date = new Date();

// 11. Truthy/Falsy Demonstration
function checkTruthyFalsy(value: any): void {
    console.log(`Value: ${value}, Is Truthy: ${Boolean(value)}`);
}

// Demonstrating console output
console.log('Primitive Types:');
console.log('Number:', id);
console.log('Boolean:', isStudent);
console.log('String:', email);

console.log('\nArithmetic Operations:');
console.log('Sum:', sum);
console.log('Difference:', difference);
console.log('Product:', product);
console.log('Quotient:', quotient);
console.log('Remainder:', remainder);

console.log('\nString Operations:');
console.log('Concatenation:', greeting);
console.log('Template Literal:', templateGreeting);

console.log('\nArrays:');
console.log('Hobbies:', hobbies);
console.log('Array Length:', hobbies.length);
console.log('First Hobby:', hobbies[0]);

console.log('\nObjects:');
console.log('Person:', person);
console.log('Name:', name);
console.log('Age:', personAge);

console.log('\nMath and Date:');
console.log('Random Number:', randomNumber);
console.log('Rounded Number:', roundedNumber);
console.log('Current Date:', currentDate);

console.log('\nTruthy/Falsy Examples:');
checkTruthyFalsy(0);
checkTruthyFalsy(1);
checkTruthyFalsy('');
checkTruthyFalsy('Hello');
checkTruthyFalsy(null);
checkTruthyFalsy(undefined);