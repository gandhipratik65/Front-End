console.log('hello world');
const x=5;
console.log(x)

// string example
const name ='ram';
const name1 ="hari";
const result =`The names are ${name} and ${name1}`
console.log(result)

// Number
const number1 = 3/0;
console.log(number1)

// NAN
const number3 = "abc"/3;
console.log(number3);

// Adding two big integers
const value1 = 90071992512474409998n;
const result1 = value1+1n;
console.log(result1);

// Error bigInt and number cannot add
// TypeError: Cannot mix BigInt and other types, use explicit conversions
const value2 = 90071992512474409998n;
// const result2 = value2 + 1;
// console.log(result2)

// Boolean data type
const dataChecked  = true;
const valueChecked = false;

// undefined datatype
let name2;
console.log(name2);

// symbol is introuced in Es2015 and immutable primitive value that is unique
const value3 = Symbol('hello');

// javascript object
const student = {
    firstName:'ram',
    lastName: null,
    class: 10
}
console.log(student)

// javascript is dynamically typed language so we can change type of the variabl once it is declared
let data;
console.log(typeof(data));
data = 5;
console.log(typeof(data));

data  = "javascript programming"
console.log(typeof(data));
