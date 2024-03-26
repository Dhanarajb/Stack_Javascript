export function MinStack() {
  const stack = [];
  const minStack = [];

  function push(val) {
    stack.push(val);
    if (minStack.length === 0 || val <= getMin()) {
      minStack.push(val);
    }
  }

  function pop() {
    const popped = stack.pop();
    if (popped === getMin()) {
      minStack.pop();
    }
    return popped;
  }

  function top() {
    return stack[stack.length - 1];
  }

  function getMin() {
    return minStack[minStack.length - 1];
  }

  return {
    push,
    pop,
    top,
    getMin,
  };
}
