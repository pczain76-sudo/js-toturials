const myArray = [1,2,3,4,5];
console.log(myArray); //it will show the array [1,2,3,4,5]
console.log(typeof myArray); //it will show object

//accessing array elements
console.log(myArray[0]); //1 with the help of index
//antoher way to declare the arrays
let Arrays = new Array(6,7,8,9,10);
console.log(Arrays); //it will show the array [1,2,3,4,5]
//its popular methods
console.log(Arrays.length); //5 it will show the length of array
console.log(Arrays.push(11));
console.log("with push",Arrays);
    //it will add 11 at the end of array [6,7,8,9,10,11]
console.log(Arrays.pop());
console.log("with pop",Arrays);
    //it will remove 11 from the end of array [6,7,8,9,10]
console.log(myArray.unshift(0));
console.log("with unshift",myArray);  
//it will add 0 at the start of array [0,1,2,3,4,5]
console.log(myArray.shift());
console.log("with shift",myArray);
//it will remove 0 from the start of array [1,2,3,4,5]
console.log(Arrays.indexOf(8)); //2 it will show the index of 8
console.log(Arrays.includes(9)); //true it will check if 9 is present in array or not
// console.log(Arrays.reverse()); //it will reverse the array [10,9,8,7,6]
// console.log(Arrays.sort()); //it will sort the array in ascending order [10,9,8,7,6] to [10,6,7,8,9]
//now most popular methods slice and splice
//firstly slice
let newArray = [1,2,3,4,5,6]
let newArray2 = [7,8,9,10,11,12]

console.log("after slice",newArray.slice(1,3));
console.log("new Array is",newArray);
//it will return a new array from index 1 to index 3 but exclude index 3 [2,3]
//now splice
console.log("after splice",newArray2.splice(1,3));
console.log("new Array2 is",newArray2);
//it will remove 3 elements from index 1 and return a new array [8,9,10]
//now we can also merge two arrays with concat method
let mergedArray = newArray.concat(newArray2);
console.log("merged Array is",mergedArray); //it will merge two arrays [1,2,3,4,5,6,7,11,12]
///now i have to use spread operator to merge two arrays
let hero = ['superman','batman','flash'];
let villain = ['joker','lex luthor','cupid'];
let sideartist = ['catwoman','harley quinn'];
let all = [...hero, ...villain, ...sideartist];
console.log("all characters:",all); //it will merge three arrays 
//now use of flat method
let arrflat = [1,2,[3,4],5,[6,7,[8,9]]];
console.log(arrflat.flat(2)); 
///is array
let checkarray = "hello";
console.log(Array.isArray(checkarray));
let checkarray2 = [1,2,3];
console.log(Array.isArray(checkarray2));
//now use of from method
let stringto = "hellioG10"
console.log(Array.from(stringto));
//it will convert string to array ['h','e','l','l','i','o','G','1','0']
//now use (of) method
let arrayof = (Array.of(1,2,3,4,5));
console.log(typeof arrayof, arrayof); //object
 //[1,2,3,4,5]
 




