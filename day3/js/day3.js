"use strict";
const user = {
    firstName: "Lucas",
    age: 12,
};
// Union
function add(prop1, prop2) {
    if (prop1 === "number" && prop2 === "number") {
        return prop1 + prop2;
    }
    else {
        return prop1.toString() + prop2.toString();
    }
}
console.log(add(10, "31"));
//Literal type
let foo;
function move(distance, direction) {
    console.log(`Movendo-se ${distance}M para ${direction}.`);
}
move(1, "Oeste"); // Okay
//move(1, "Nurth"); // Error!
const OneToFive = 1 | 2 | 3 | 4 | 5;
const employee1 = {
    name: "alex",
    age: 21,
    jobDescription: "Desenvolvimento de softwares",
    jobName: "Dev JR",
    id: 123131231,
};
