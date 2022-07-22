interface Animal {
  name: string;
  group: string | undefined;
  setGroup(group: string): void;
}

export class Cat implements Animal {
  name: string;
  group: string | undefined;

  constructor(name: string) {
    this.name = name;
  }

  setGroup(group: string): void {
    this.group = group;
  }
}

export class Dog implements Animal {
  name: string;
  group: string | undefined;

  constructor(name: string) {
    this.name = name;
  }

  setGroup(group: string): void {
    this.group = group;
  }

  bark() {
    console.log("don't woof, WOOF");
  }
}

interface AnimalConstructor<T> {
  new (name: string): T;
}

export default function initalizeAnimal<T extends Animal>(
  Animal: AnimalConstructor<T>,
  name: string
) {
  const animal = new Animal(name);
  animal.setGroup('mammals');

  return animal;
}
