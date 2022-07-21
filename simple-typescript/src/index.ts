class Robot {
  #name: string;

  private somePrivateField = 'it is private Field!!!!';

  constructor(name: string) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }
}

class AdvancedRobot extends Robot {
  #name: string;

  private somePrivateField = 'OVERRIDDEN PRIVATE FIELD';

  constructor(name: string) {
    super(name);
    this.#name = `Advanced ${name}`;
  }

  getAdvancedRobotName() {
    return this.#name;
  }
}

const robot = new AdvancedRobot('Jack');

console.log('private', robot.somePrivateField);
console.log('parent name', robot.getName());
console.log('subclass name', robot.getAdvancedRobotName());
