// stack.js
export function createStack() {
  const stack = [];

  function push(element) {
    stack.push(element);
  }

  function pop() {
    if (isEmpty()) {
      return "Stack is empty";
    }
    return stack.pop();
  }

  function peek() {
    if (isEmpty()) {
      return "Stack is empty";
    }
    return stack[stack.length - 1];
  }

  function isEmpty() {
    return stack.length === 0;
  }

  function size() {
    return stack.length;
  }

  return { push, pop, peek, isEmpty, size };
}
