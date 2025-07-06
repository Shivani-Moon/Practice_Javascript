const  accountId = 144553;
let accountEmail = "harry@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";  // This is possible but should not be used as it is not good practice
let accountState;

//accountId = 2; -------const cannot be reassigned------This is not possible and allowed
// console.log(accountId);


accountEmail = "random@gmail.com";
// console.log(accountEmail);

accountPassword = "2121212";
// console.log(accountPassword);

accountCity = "Bengaluru";
// console.log(accountCity);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState
    
])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/