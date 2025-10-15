//declare a date in js
let mydate = new Date();
console.log(mydate); //current date and time
//with its methods
console.log(mydate.toString()); //Tue Oct 14 2025 with current time
console.log(mydate.toDateString()); //it shows only date Tue Oct 14 2025
console.log(mydate.toISOString()); //it shows date in ISO format 2025-10-14T06:52:10.123Z
console.log(mydate.toJSON()); //same like iso format 2025-10-14T06:52:10.123Z
console.log(mydate.toLocaleString()); //it shows date in local format 10/14/2025 and time in local format 12:22:10 PM
console.log(typeof mydate); //object

///declare a specific date
let specificdate = new Date(2025, 2 , 29); //year, month (0-11), day
console.log(specificdate.toDateString());
//it will show Sat Mar 29 2025
//note: month is 0-11 so 2 means March
//you can also pass date in string format
let specificdate2 = new Date(2025,0,29,16,30,3); //year, month (0-11), day, hour, minute , second
console.log(specificdate2.toLocaleString()); //it will show Sat Mar 29 2025 and time 4:30:03 PM

//now declare time in miliseconds
let mytimestamp =  Date.now();
console.log("time in miliseconds:",mytimestamp); //it will show time in miliseconds from 1 Jan 1970 to now
//you can get miliseconds from specific date
console.log("Miliseconds from specific date:",specificdate2.getTime()); //it will show time in miliseconds from 1 Jan 1970 to specific date
console.log("in Seconds",Math.floor(Date.now()/1000));//it will show time in seconds from 1 Jan 1970 to now