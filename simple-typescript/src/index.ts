import * as multiplyModule from './multiply';
// import multiply, {multiplyByTwo} from './multiply';
// import multiply, { multiplyByTwo as mBy2, HelloWorld } from './multiply';

const a = 3;
const b = 4;

console.log(`${a} * ${b} = ${multiplyModule.default(a, b)}`);
multiplyModule.multiplyByTwo(a);

// Boolean
const bool: boolean = true;

// number
const num: number = 10;

// String
const str: string = 'strings';

// Null and Undefined
const nu: null = null;
const un: undefined = undefined;

// Object
type primitiveTypes = boolean | number | string | symbol | null | undefined;
const myObj: object = new Map();

// Void
function log(message: string): void {
  console.log(message);
}

// Array
const arr1: string[] = ['x', 'y'];
const arr2: Array<string> = ['x', 'y'];

// Tuple
let tup: [string, number] = ['str', 1];

// Enum
enum Color {
  Red = 2,
  Green = 55,
  Blue = 'blue',
}

const myFavoriteColor: Color = Color.Blue;
const myFCol: string = Color[55];

// Any
let an: any = 'string';
an = 3;
an = true;

// Type Assertions
const email = document.getElementById('email');

if (email) {
  email.addEventListener('change', (e) => {
    const input = e.currentTarget as HTMLInputElement;
    console.log(input.value);
  });
}
