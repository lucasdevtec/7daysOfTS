"use strict";
class Users {
    constructor(n, m) {
        this.money = 0;
        this.name = n;
        this.money = m;
    }
    addMoney(montante) {
        this.money = this.money + montante;
    }
}
const user1 = new Users("Lucas", 3000);
const user2 = new Users("André", 3500);
console.log(user1);
user1.addMoney(123);
console.log(user1);
console.log(user2);
user2.addMoney(1231);
console.log(user2);
let item1;
item1 = {
    name: "apple",
    value: 12,
    itemMessage(message) {
        console.log(`${message} uma ${this.name} por ${this.value}`);
    },
};
item1.itemMessage("comprou");
