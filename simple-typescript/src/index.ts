// Interfaces
interface Profile {
  name: string;
  age: number;
}

let profile: Profile = {
  name: 'joe',
  age: 89,
};

interface OptionalProfile {
  name: string;
  age?: number;
}

let optProfile: OptionalProfile = {
  name: 'joe',
};

optProfile.name = 'joji';

// Index Signature
interface A {
  someProp: string;
  [key: string]: number | string;
}

const a: A = { someProp: 'someProp' };
a.x = 1;
a.y = 2;

// Call Signature
interface Sum {
  (a: number, b: number): number;
  prop1: string;
}

const sum: Sum = (a, b) => a + b;
sum.prop1 = 'some Prop';

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

let child: Child = { x: 'some props', y: 'some props', z: 'some props' };
