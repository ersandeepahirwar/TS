// Type Alias
type Student = {
  ID: number;
  name: string;
  CGPA: number;
  education: string[];
};

const student: Student = {
  ID: 1714510036,
  name: "Sandeep Ahirwar",
  CGPA: 6.9,
  education: ["B.Tech", "SRGI Jhansi"],
};
console.log(student);

// Interface
interface Employee {
  ID: number;
  name: string;
  designation: string;
}

const employee: Employee = {
  ID: 1623157,
  name: "John Doe",
  designation: "Software Engineer",
};
console.log(employee);

// Readonly Properties
type Fruit = {
  readonly name: string;
  price: number;
};

const fruit: Fruit = {
  name: "Apple",
  price: 100,
};
console.log(fruit);

interface Animal {
  readonly name: string;
  weight: number;
}

const animal: Animal = {
  name: "Elephant",
  weight: 870,
};
console.log(animal);

// Optional Properties
type Language = {
  name: string;
  origin?: number;
};

const language: Language = {
  name: "Hindi",
};
console.log(language);

interface Friend {
  name: string;
  age?: number;
}

const friend: Friend = {
  name: "Himanshu Savita",
};
console.log(friend);
