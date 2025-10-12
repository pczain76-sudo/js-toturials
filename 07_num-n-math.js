const score = 450;
console.log( score ); //450    
//other way to initiliaze a number 
let score2 = new Number(500);
console.log(score2); //[Number: 500]
//this is the difference that score shows only 450 but score2 shows [Number: 500] because it is an object
//now we are using prototype of number means some methods of number
let num = 123;
console.log(num.toString()); //123 (it converts number to string)
let num2 = 124.56890;
console.log(num2.toFixed(2)); //124.57 (it converts number to string and shows only 2 decimal points)
console.log(num2.toPrecision(4)); //124.6 (it converts number to string and shows only 4 significant digits)
console.log(num2.toExponential(3)); //1.247e+2 (it converts number to string and shows in exponential form with 3 digits after decimal)
let num3 = 100000;
console.log(num3.toLocaleString()); //it will show 100,000 
// string to number
let str = "124"
console.log( Number(str) ); //124 (it converts string to number)

/*************************MATHS*****************************/
console.log(Math.abs(-5)); //5 (it returns absolute value)
console.log(Math.round(4.6)); //5 (it rounds to nearest integer)
console.log(Math.ceil(4.1)); //5 (it rounds to next integer)
console.log(Math.floor(4.9)); //4 (it rounds to previous integer)
console.log(Math.min(1,2,3,-4,5)); //-4 (it returns minimum value)
console.log(Math.max(1,2,3,-4,5)); //5 (it returns maximum value)
//now most used library of math
console.log(Math.random()); //it returns random number between 0 and 1
//so if i want random numbers between 1 to 6 for dice gaming 
//so i have to intialize it
let min = 1;
let max = 6;
//formula iska ye bny ga
//math.random()*(max-min +1 )+ min
//or fr floor krdo round off k liye
console.log("for dice" , Math.floor((Math.random() * (max-min+1))+ min)); //it will return random number between 1 to 6

//aik or btt 
console.log(Math.floor(Math.random()*10)+1);



