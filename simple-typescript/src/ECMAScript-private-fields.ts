export class Robot {
  #name: string;

  private somePrivateField = 'it is private Field!!!!';

  constructor(name: string) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }
}

// export class AdvancedRobot extends Robot {
//   #name: string;

//   private somePrivateField = 'OVERRIDDEN PRIVATE FIELD';

//   constructor(name: string) {
//     super(name);
//     this.#name = `Advanced ${name}`;
//   }

//   getAdvancedRobotName() {
//     return this.#name;
//   }
// }
