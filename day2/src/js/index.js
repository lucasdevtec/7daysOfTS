"use strict";
console.log(`Hello`);
//any
let anyVariable;
anyVariable = 10;
anyVariable = "string";
// enum
var Role;
(function (Role) {
    Role[Role["admin"] = 1] = "admin";
    Role[Role["read"] = 2] = "read";
    Role[Role["backup"] = 3] = "backup";
})(Role || (Role = {}));
const user = {
    firstName: "Lucas",
    age: 40,
    role: Role.backup,
};
console.log(user);
// Types
let a = 10;
let b;
b = "abc";
//tuple
const myTuple = ["Mês", 19, true];
//return
function add(num1, num2) {
    return `${num1 + num2}`;
}
console.log(add(12, 12));
//return Void
function testVoid(num1, num2) {
    // retorna void porque não tem um return na função.
    console.log(`${num1 + num2}`);
}
console.log(testVoid(12, 12));
// objetos
const userObject = {
    age: 12,
    firstName: "Lucas",
};
const userObject1 = {
    age: "12",
    firstName: "Lucas",
};
// unknown
let itemInput;
let itemName;
itemInput = "Monange";
if (typeof itemInput === "string") {
    itemName = itemInput;
}
//Never
function broken(message) {
    throw { message: message };
}
console.log(broken("Quebro vei"));
function broken2(message) {
    throw { message: message };
}
console.log(broken2("Quebro vei 2"));
