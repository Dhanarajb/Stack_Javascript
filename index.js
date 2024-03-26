import { createStack } from "./ImplementTask.js";
import { evaluatePostfix } from "./postfix.js";
import { reverseString } from "./reverseString.js";
import { isBalanced } from "./validParensis.js";

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
console.log("--------------------------------------------------------------");
// ---------------valid parenthesis--------------------
console.log(isBalanced("()")); // Output: true
console.log(isBalanced("()[]{}")); // Output: true
console.log(isBalanced("(]")); // Output: false
console.log(isBalanced("([)]")); // Output: false
console.log(isBalanced("{[]}"));
console.log("--------------------------------------------------------------");
// ---------------Postfix--------------------
const postfixExpression = "5 3 + 8 * 4 /";
const result = evaluatePostfix(postfixExpression);
console.log("Result:", result);
