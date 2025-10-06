"use strict"; //treat all js files as newer version
//datatypes
let name = "John"; //string
let age = 30; //number
let isMarried = false; //boolean
let children = null; //null
let address; //undefined
let symbol = Symbol("id"); //symbol for unique identifiers
let bigInt = 1234567890123456789012345678901234567890n; //bigint for large integers
let person = { firstName: "John", lastName: "Doe" }; //object

console.log(typeof null); //object (this is a known bug in JavaScript)
console.log(typeof name); //string
console.log(person); //object