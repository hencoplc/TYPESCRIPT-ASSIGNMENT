


// 1 Define an object type for a person with optional properties for email and phone:

type Person = {
  name: string;
  age: number;
  email?: string;
  phone?: string;
};

// 2 Create a function that accepts an object with optional properties and handles missing values:

function printPersonInfo(person: Person): void {
  console.log(`Name: ${person.name}`);
  console.log(`Age: ${person.age}`);
  if (person.email) {
    console.log(`Email: ${person.email}`);
  }
  if (person.phone) {
    console.log(`Phone: ${person.phone}`);
  }
}

const person1: Person = { name: "Alice", age: 30 };
const person2: Person = { name: "Bob", age: 25, email: "bob@example.com" };

printPersonInfo(person1);
printPersonInfo(person2);


3. //Implement a type for a configuration object with optional settings:

type Configuration = {
  setting1?: boolean;
  setting2?: string;
  setting3?: number;
};


4. //Write a function that accepts an optional type and handles both defined and undefined inputs:

function processConfiguration(config?: Configuration) {
  if (config) {
    if (config.setting1 !== undefined) {
      console.log(`Setting 1: ${config.setting1}`);
    }
    if (config.setting2 !== undefined) {
      console.log(`Setting 2: ${config.setting2}`);
    }
    if (config.setting3 !== undefined) {
      console.log(`Setting 3: ${config.setting3}`);
    }
  } else {
    console.log("No configuration provided.");
  }
}

const config1: Configuration = { setting1: true, setting3: 42 };
const config2: Configuration = {};

processConfiguration(config1);
processConfiguration(config2);
processConfiguration(); // No configuration provided


5.//Define an optional type for a callback function that takes two numbers and returns a number:

type OptionalCallback = ((num1: number, num2: number) => number) | undefined;

function doCalculation(callback: OptionalCallback, a: number, b: number) {
  if (callback) {
    const result = callback(a, b);
    console.log(`Result: ${result}`);
  } else {
    console.log("No callback provided.");
  }
}

const add: OptionalCallback = (a, b) => a + b;
const subtract: OptionalCallback = undefined;

doCalculation(add, 5, 3);
doCalculation(subtract, 7, 2);




     //QUESTIONS ON INTERFACES 

1. //Create an interface for a vehicle with properties like make, model, and year:

interface Vehicle {
  make: string;
  model: string;
  year: number;
}

2.//Define an interface for a user with required and optional properties:

interface User {
  username: string;
  email: string;
  age?: number; 
}

3.//Implement an interface for a geometric shape with a method to calculate its area:

interface GeometricShape {
  calculateArea(): number;
}


class Circle implements GeometricShape {
  constructor(private radius: number) {}

  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}


4.//Create a function that accepts an object with an interface as an argument:

function printVehicleInfo(vehicle: Vehicle) {
  console.log(`Make: ${vehicle.make}, Model: ${vehicle.model}, Year: ${vehicle.year}`);
}

const myVehicle: Vehicle = { make: "Toyota", model: "Camry", year: 2022 };
printVehicleInfo(myVehicle);


5.//Write an interface for a class constructor and use it to create an object:

interface Point2D {
  x: number;
  y: number;
}

interface Point2DConstructor {
  new (x: number, y: number): Point2D;
}

class Point implements Point2D {
  constructor(public x: number, public y: number) {}
}

const pointConstructor: Point2DConstructor = Point;
const point = new pointConstructor(3, 5);



           // QUESTIONS ON ENUMS AND ANSWER

// 1. Create an enum for days of the week and display the string representation for a given numeric value:

enum DaysOfWeek {
  Sunday = 0,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

function getDayString(day: DaysOfWeek): string {
  return DaysOfWeek[day];
}

const numericValue = 2;
console.log(getDayString(numericValue)); 

2.//Define an enum for basic geometric shapes and write a function that takes a shape as an argument:

enum Shape {
  Circle,
  Square,
  Triangle,
}

function describeShape(shape: Shape): string {
  switch (shape) {
    case Shape.Circle:
      return "This is a circle";
    case Shape.Square:
      return "This is a square";
    case Shape.Triangle:
      return "This is a triangle";
    default:
      return "Unknown shape";
  }
}

const myShape = Shape.Square;
console.log(describeShape(myShape)); 


3. //Create an enum representing HTTP status codes and return the status message for a given code:

enum HttpStatus {
  OK = 200,
  NotFound = 404,
  InternalServerError = 500,
}

function getStatusMessage(code: HttpStatus): string {
  switch (code) {
    case HttpStatus.OK:
      return "OK";
    case HttpStatus.NotFound:
      return "Not Found";
    case HttpStatus.InternalServerError:
      return "Internal Server Error";
    default:
      return "Unknown Status";
  }
}

const statusCode = HttpStatus.NotFound;
console.log(getStatusMessage(statusCode));


4. //Implement a type that accepts only specific enum values as input:

enum Color {
  Red,
  Green,
  Blue,
}

type AllowedColor = Color.Red | Color.Blue;

function setColor(color: AllowedColor) {
}

setColor(Color.Red); 
setColor(Color.Green); 
setColor(Color.Blue); 

5. //Write a function that iterates through the keys of an enum and returns an array of their values:

enum Direction {
  North,
  South,
  East,
  West,
}

function getEnumValues<T>(e: T): Array<number | string> {
  const values = Object.keys(e)
    .filter((key) => typeof e[key as keyof T] === 'number')
    .map((key) => e[key as keyof T]);
  return values;
}

const directionValues = getEnumValues(Direction);
console.log(directionValues); 



  // QUESTIONS AND ANSWER ON OBJECT

 1.// Define an object type for a book with properties like title and author:

type Book = {
  title: string;
  author: string;
};


2.//Create an object type for a person with nested address properties:


type Address = {
  street: string;
  city: string;
  postalCode: string;
};

type Person = {
  name: string;
  age: number;
  address: Address;
};

3.//Implement an object type for a shopping cart item with methods to update the quantity:

type ShoppingCartItem = {
  name: string;
  price: number;
  quantity: number;
  updateQuantity(newQuantity: number): void;
};

const exampleItem: ShoppingCartItem = {
  name: "Example Item",
  price: 10,
  quantity: 3,
  updateQuantity(newQuantity: number) {
    this.quantity = newQuantity;
  },
};

4.//Define an object type for a user with properties for name, age, and address:

type getUser = {
  name: string;
  age: number;
  address?: Address;
};

5.//Write a function that accepts an object type as a parameter and returns a string:

function getObjectInfo(obj: { [key: string]: any }): string {
  return JSON.stringify(obj);
}

const book: Book = { title: "Sample Book", author: "Sample Author" };
const person: Person = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Example City",
    postalCode: "12345",
  },
};

console.log(getObjectInfo(book));
console.log(getObjectInfo(person));
