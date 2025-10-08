//memory types: Stack and Heap
//firstly we will see stack memory allocation
let a=10;
let b =a;
 b=20;
console.log(b);
console.log(a);
//it means stack memory me a ki value 10 hi rhegi b ki value 20 ho jae gi
//now we will see heap memory allocation
let user1 = {name: "John", age: 30};
let user2 = user1; //copying reference of user1 to user2
user2.name = "AZ"; //modifying user2
user2.age = 25; //modifying user2
//now if we see user1 then also it will reflect changes made by user2
console.log(user2);
console.log(user1); 
//it means heap memory me dono user1 and user2 ki value same ho jae gi
