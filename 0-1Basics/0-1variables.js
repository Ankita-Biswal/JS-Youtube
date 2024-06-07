const accountId = 144553;
let accountEmail = "ankita@123";
var password = "12345";
accountCity = "Vizag";
let accountState;

//accountId = 2;
accountEmail = "ab@123";
password = "902345";
accountCity = "Banglore";


/*
prefer not to use var because of issues in block scope and functional scope
*/
// console.log(accountId);
// console.log(accountEmail);
// console.log(password);
// console.log(accountCity);
console.table([accountId,accountEmail,accountCity,password,accountState]);