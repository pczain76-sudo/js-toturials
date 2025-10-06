let age = "33"
console.log(typeof age); //string
//now convert to number
let newNum = Number(age);
console.log(typeof newNum); //number
console.log(newNum); //33
{
    //ab age = 33abc ho jae to NaN aayega
    let age = "33abc"
console.log(typeof age); //string
//now convert to number
let newNum = Number(age);
console.log(typeof newNum); //number
console.log(newNum);
}
{
    //or agr age = null ho jaye to fr 0 aayega
    let age = null
console.log(typeof age); //object
//now convert to number
let newNum = Number(age);
console.log(typeof newNum); //number
console.log(newNum);
}
{
    //agr age = boolean ho jaye to fr 1 ya 0 aayega
    let age = true  
console.log(typeof age); //boolean
//now convert to number
let newNum = Number(age);
console.log(typeof newNum); //number
console.log(newNum);
}
{
    //ab number ko boolean me convert krte hain
    let isloggedin = 1; //0 means false and 1 means true
    console.log(typeof isloggedin);
    let newBool = Boolean(isloggedin);
    console.log(typeof newBool);
    console.log(newBool);
}