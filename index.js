import { createStack } from "./ImplementTask.js";
import { reverseString } from "./reverseString.js";

// ---------------implement stack------------------
const stack = createStack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // Output: 3
console.log(stack.peek()); // Output: 2
console.log(stack.size()); // Output: 2
console.log("--------------------------------------------------------------");
// ---------------reversestring--------------------
const inputString = "hello";
const reversedString = reverseString(inputString);
console.log(reversedString);
