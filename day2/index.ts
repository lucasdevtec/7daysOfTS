console.log(`Hello`);

//any
let anyVariable: any;
anyVariable = 10;
anyVariable = "string";

// enum
enum Role {
  admin = 1,
  read = 2,
  backup = 3,
}

const user = {
  firstName: "Lucas",
  age: 40,
  role: Role.backup,
};
console.log(user);

// Types
let a: number = 10;
let b: string;
b = "abc";

//tuple
const myTuple: [string, number, boolean] = ["Mês", 19, true];

//return
function add(num1: number, num2: number): string {
  return `${num1 + num2}`;
}
console.log(add(12, 12));

//return Void
function testVoid(num1: number, num2: number): void {
  // retorna void porque não tem um return na função.
  console.log(`${num1 + num2}`);
}
console.log(testVoid(12, 12));

// objetos
const userObject = {
  age: 12,
  firstName: "Lucas",
};

const userObject1: {
  age: string;
  firstName: string;
} = {
  age: "12",
  firstName: "Lucas",
};

// unknown
let itemInput: unknown;
let itemName: string;

itemInput = "Monange";
if (typeof itemInput === "string") {
  itemName = itemInput;
}

//Never
function broken(message: string): never {
  throw { message: message };
}

console.log(broken("Quebro vei"));

function broken2(message: string): void {
  throw { message: message };
}

console.log(broken2("Quebro vei 2"));
