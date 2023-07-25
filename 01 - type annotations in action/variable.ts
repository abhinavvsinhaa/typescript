let apples: number = 5; // type annotation
let speed: string = 'fast';
let hasName: boolean = true;

// value same as types
let x: undefined = undefined;
let y: null = null;

// built in objects
let now: Date = new Date();

// array
let colors: string[] = ['red', 'green', 'black'];
let arr: number[] = [3, 23, 2];
let hasIt: boolean[] = [true, false];

// class
class Car {}

let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// function
const logNumber: (x: number) => void = (i: number) => {
  console.log(i);
};

// --when to use annotations--

// 1) function that returns 'any' type
// any inference: TS has no idea about the variable, and cannot refer to its correct properties, avoid it at all costs
const json = '{"x": 20, "y":20}';
// const coordinates = JSON.parse(json); // incorrect way with type any
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) when we declare and initialize later
let words: string[] = ['red', 'green', 'blue'];
let foundWord: boolean; // declared here

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') foundWord = true; // initialized here
}

// 3) type cannot be inferred
let numbers: number[] = [-10, 1, -12];
// let numbersAboveZero = false; // can have either false or a number
let numbersAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numbersAboveZero = numbers[i];
  }
}
