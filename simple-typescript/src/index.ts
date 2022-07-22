import { AdvancedRobot } from './ECMAScript-private-fields';

const robot = new AdvancedRobot('Jack');

// it catches error but logged correctly
console.log('Private : ', robot.somePrivateField);
console.log('parent name : ', robot.getName());
console.log('subclass name : ', robot.getAdvancedRobotName());
