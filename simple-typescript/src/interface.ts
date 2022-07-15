// Interfaces
interface Profile {
  name: string;
  age: number;
}

const profile: Profile = {
  name: 'Joe',
  age: 89,
};

interface OptProfile {
  name: string;
  age?: number;
}

const optProfile: OptProfile = {
  name: 'Joe',
};

// Index Signature
interface A {
  someProp: string;
  [key: string]: number | string;
}

const a: A = {
  someProp: 'someProp',
};

a.x = 1;
a.y = 'some string';

// Call Signature
interface Sum {
  (a: number, b: number): number;
}

const sum: Sum = (a, b) => a + b;

// Extending Interfaces
interface Parent1 {
  x: string;
}

interface Parent2 {
  y: string;
}

interface Parent3 {
  z: string;
}

interface Child extends Parent1, Parent2, Parent3 {}

const child: Child = {
  x: 'string',
  y: 'string',
  z: 'string',
};
