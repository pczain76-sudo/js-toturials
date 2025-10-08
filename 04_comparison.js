console.log(2>1); //true
console.log(2<1); //false
console.log(2>=2); //true
console.log(2<=2); //true
console.log(2==2); //true
console.log(2!=2); //false

//problem starts when we compare different datatypes
console.log(2=="2"); //true (loose equality operator)
console.log("2">=2); //true (js converts string to number)
console.log("2">1) ; //true (js converts string to number)
console.log("2"<1); //false (js converts string to number)

//now let see to null and 0
console.log(null==0); //false (null is only equal to undefined)
console.log(null>=0); //true (null is converted to 0)
console.log(null>0); //false 
console.log(null<0); //false

//now move on to strict equality operator
console.log(2==="2"); //false (no type conversion) because number is not same as string
console.log(2!=="2"); //true (no type conversion)

