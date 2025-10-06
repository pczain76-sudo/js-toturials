console.log("Hello, World!");
const accountId = 12345;
let accountName = "JohnDoe";
var accountPassword = "1000"
accountCity ="sialkot"
//new added line
let accountState;

// accountId = 54321; // This will cause an error because accountId is a constant
console.log(accountId);
accountName ="Ali Zain" //this is changeable because it is declared with let
console.log(accountName);
accountPassword = "2000" //this is changeable because it is declared with var
console.log(accountPassword);
accountCity = "Lahore" //this is changeable because it is declared without any keyword
console.table({accountId, accountName, accountPassword, accountCity, accountState});