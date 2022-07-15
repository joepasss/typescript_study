// Boolean
const bool: boolean = true;

// number
const num: number = 1;

// String
const str: string = 'string';

// Null and Undefined
const nu: null = null;
const un: undefined = undefined;

// Object
const myObj: object = {
  joe: '1',
  joji: 402,
};

// void
function log(message: string): void {
  console.log(message);
}

// Array
const arr1: string[] = ['x', 'y'];
const arr2: Array<string> = ['x', 'y'];

// Tuple
const tup: [string, number] = ['str', 1];

// Enum
enum Color {
  Red = 2,
  Green = 55,
  Blue = 'blue',
}

// Type Assertions
const email = document.getElementById('email');

if (email) {
  email.addEventListener('change', (e) => {
    const input = e.currentTarget as HTMLInputElement;
  });
}
