const d = new Date();
d.getDay();
d.getFullYear();
d.getMonth();

console.log(`${d.getMonth()}/${d.getDay()}/${d.getFullYear()}`);

var now = new Date();

console.log(now.getTimezoneOffset()); // in minutes from UTC

Number(now);             // number of milliseconds since 1970
Date("2017-06-23");                 // date declaration
Date("2017");                       // is set to Jan 01
Date("2017-06-23T12:00:00-09:45");  // date - time YYYY-MM-DDTHH:MM:SSZ
Date("June 23 2017");               // long date format
Date("Jun 23 2017 07:45:00 GMT+0100 (Tokyo Time)"); // time zone

//Get Times
weekday = now.getDay();     // getting the weekday

now.getDate();          // day as a number (1-31)
now.getDay();           // weekday as a number (0-6)
now.getFullYear();      // four digit year (yyyy)
now.getHours();         // hour (0-23)
now.getMilliseconds();  // milliseconds (0-999)
now.getMinutes();       // minutes (0-59)
now.getMonth();         // month (0-11)
now.getSeconds();       // seconds (0-59)
now.getTime();          // milliseconds since 1970

//Setting part of a date
now.setDate(now.getDate() + 7); // adds a week to a date

now.setDate();          // day as a number (1-31)
now.setFullYear();      // year (optionally month and day)
now.setHours();         // hour (0-23)
now.setMilliseconds();  // milliseconds (0-999)
now.setMinutes();       // minutes (0-59)
now.setMonth();         // month (0-11)
now.setSeconds();       // seconds (0-59)
now.setTime();          // milliseconds since 1970)