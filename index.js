import { createStack } from "./ImplementTask.js";
import { createStackWithMiddle } from "./StackWithMiddle.js";
import { StackUsingQueues } from "./StackWithTwoQueue.js";
import { MaxStack } from "./maxStack.js";
import { MinStack } from "./minstack.js";
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
console.log("--------------------------------------------------------------");

// ---------------Min stack--------------------
const minStack = MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-5);
minStack.push(-1);
minStack.push(4);
minStack.push(-3);
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.top());
console.log(minStack.getMin());
console.log("--------------------------------------------------------------");
// ---------------Min stack--------------------
const maxStack = MaxStack();
maxStack.push(5);
maxStack.push(3);
maxStack.push(8);
console.log(maxStack.getMax());
maxStack.pop();
console.log(maxStack.top());
console.log(maxStack.getMax());
console.log("--------------------------------------------------------------");
// ---------------Min stack--------------------

const stacks = StackUsingQueues();
stacks.push(1);
stacks.push(2);
stacks.push(3);

console.log(stacks.top()); // Output: 3
console.log(stacks.pop()); // Output: 3
console.log(stacks.top()); // Output: 2

console.log("--------------------------------------------------------------");
// ---------------createStackWithMiddle stack--------------------
const stackss = createStackWithMiddle();
stackss.push(1);
stackss.push(2);
stackss.push(3);
console.log(stackss.findMiddle()); // Output: 2
stackss.deleteMiddle();
console.log(stackss.findMiddle()); // Output: 1
