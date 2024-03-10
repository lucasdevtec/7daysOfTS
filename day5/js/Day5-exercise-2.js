"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const jane = new Person("Jane", 31);
console.log(`${jane.name} is ${jane.age} years old.`);
