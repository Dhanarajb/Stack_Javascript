import { createStack } from "./ImplementTask.js";

const stack = createStack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // Output: 3
console.log(stack.peek()); // Output: 2
console.log(stack.size()); // Output: 2
