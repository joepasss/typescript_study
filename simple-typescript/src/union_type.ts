// union type

// Between prime types

function someFn(myArg: number | string | boolean) {
  if (typeof myArg === 'string') {
    let x = myArg.toUpperCase();
  } else if (typeof myArg === 'number') {
    myArg.toFixed(1);
  } else {
    myArg;
  }
}

// Between interfaceses

interface Dog {
  bark(): void;
  walk(): void;
}

interface Cat {
  meow(): void;
  walk(): void;
}

function isDog(someObj: Dog | Cat): someObj is Dog {
  return (<Dog>someObj).bark !== undefined;
}

function callMyPet(pet: Dog | Cat) {
  pet.walk();

  if (isDog(pet)) {
    pet.bark();
  } else {
    pet.meow();
  }
}

// between two classes

class Foo {
  foo: number;
  commonProp: string;

  constructor(foo: number, prop: string) {
    this.foo = foo;
    this.commonProp = prop;
  }
}

class Bar {
  bar: number;
  commonProp: string;

  constructor(bar: number, prop: string) {
    this.bar = bar;
    this.commonProp = prop;
  }
}

function fooBarFunction(obj: Foo | Bar) {
  if (obj instanceof Foo) {
    obj.foo;
  } else {
    obj.bar;
  }
}
