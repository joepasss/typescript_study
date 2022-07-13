// Functions (optional and default parameters)

function sum(a: number, b: number): number {
  return a + b;
}

type MyFunc = (a: number, b: number) => number;
const sum2: MyFunc = (a, b) => a + b;

sum(1, 1);

type MyFunc2 = (a?: number, b?: number) => number;
const sum3: MyFunc2 = (a = 0, b = 0) => a + b;

sum3();

// Unknown number of arguments

function sumEveryThing(
  arg1: string,
  arg2: boolean,
  ...numbers: number[]
): number {
  return numbers.reduce((result, sum) => result + sum, 0);
}

// Overloads
function calcArea(width: number, height: number): number;
function calcArea(length: number): number;
function calcArea(...args: number[]): number {
  if (args.length === 2) {
    return args[0] * args[1];
  }

  return Math.pow(args[0], 2);
}
