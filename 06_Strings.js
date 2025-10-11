let first_name = "Alice";
let Last_name = 'Bob';
//using backticks to show string
console.log(`My first name is ${first_name} and my last name is ${Last_name}`);
//for accessing its keys
console.log(first_name[0]); //A
console.log(Last_name[1]); //o
//for accessing its prototype
console.log(first_name.__proto__);
//for lenght of string
console.log(first_name.length); //5
//for uppercase
console.log(first_name.toUpperCase()); //ALICE
//for lowercase
console.log(Last_name.toLowerCase()); //bob
//for position of a character
console.log(first_name.charAt(2)); //i
//for position of index of a character
console.log(Last_name.indexOf('o')); //1
//for substring
console.log(first_name.substring(1,4)); //lic //it will include 1 and exclude 4
//for slice
console.log(first_name.slice(-5,2)); //Al //it will include -5 and exclude 2
//for replace
console.log(Last_name.replace('B','R')); //Rob
//for trim
let new_string = "     Hello World     ";
console.log(new_string.trim()); //Hello World //it will remove extra spaces from start and end
//for checking if string includes a character or not
console.log(first_name.includes('A')); //true
//for splitting a string
let newstring= "apple-banana-mango";
console.log(newstring.split("-")); //['apple', 'banana', 'mango'] //it will split the string at every '-' and return an array
//for checking if string starts with a character or not
console.log(first_name.startsWith('A')); //true
//for checking if string ends with a character or not
console.log(Last_name.endsWith('r')); //true
