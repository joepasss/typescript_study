// there is three ways to import typescript modules
// import * as multiplyModule from './multiply';
// import multiply, { multiplyByTwo } from './multiply';
// import multiply, { multiplyByTwo as mBy2 } from './multiply';

const a = 3;
const b = 5;

// using "*"
import * as mutliplyModule from './multiply';

mutliplyModule.default(a, b);
mutliplyModule.multiplyByTwo(a);

// // using default value, {} & "as"
import multiply, { multiplyByTwo as mBy2 } from './multiply';

multiply(a, b);
mBy2(b);
