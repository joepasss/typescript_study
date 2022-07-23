function someFn(myArg: number | string | boolean) {
  if (typeof myArg === 'string') {
    let x = myArg.toUpperCase();
  } else if (typeof myArg === 'number') {
    myArg.toFixed();
  } else {
    myArg; // Boolean
  }
}

/*****                dog and cat                *****/

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

  if ((<Dog>pet).bark) {
    (<Dog>pet).bark();
  } else {
    (<Cat>pet).meow();
  }

  if (isDog(pet)) {
    pet.bark();
  } else {
    pet.meow();
  }
}

/*****                foo and bar                *****/
class Foo {
  foo: number;
  commonProp: string;
}

class Bar {
  bar: number;
  commonProp: string;
}

function fooBarFunction(obj: Foo | Bar) {
  if (obj instanceof Foo) {
    obj.foo;
  } else {
    obj.bar;
  }
}
