import * as multiplyModule from './multiply';
// import multiply, {multiplyByTwo} from './multiply';
// import multiply, { multiplyByTwo as mBy2, HelloWorld } from './multiply';

const a = 3;
const b = 4;

console.log(`${a} * ${b} = ${multiplyModule.default(a, b)}`);
multiplyModule.multiplyByTwo(a);
