//Alias
type Users = {
  firstName: string;
  age: number;
};

const user: Users = {
  firstName: "Lucas",
  age: 12,
};

// Union

function add(prop1: number | string, prop2: number | string) {
  if (prop1 === "number" && prop2 === "number") {
    return prop1 + prop2;
  } else {
    return prop1.toString() + prop2.toString();
  }
}
console.log(add(10, "31"));

//Literal type
let foo: "Hello";
// foo = 'Bar'; // Error: "Bar" is not assignable to type "Hello"

type CardinalDirection = "Norte" | "Oeste" | "Sul" | "Leste";

function move(distance: number, direction: CardinalDirection) {
  console.log(`Movendo-se ${distance}M para ${direction}.`);
}

move(1, "Oeste"); // Okay
//move(1, "Nurth"); // Error!

const OneToFive = 1 | 2 | 3 | 4 | 5;
//const Bools = true | false; //Error!

//Intersection
type People = {
  name: string;
  age: number;
};
type Job = {
  jobDescription: string;
  jobName: "Dev Estagiário" | "Dev JR" | "Dev PL" | "Dev SR";
  id: number;
};

type Employee = People & Job;

const employee1: Employee = {
  name: "alex",
  age: 21,
  jobDescription: "Desenvolvimento de softwares",
  jobName: "Dev JR",
  id: 123131231,
};
