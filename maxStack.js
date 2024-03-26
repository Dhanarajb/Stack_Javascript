export function MaxStack() {
  const stack = [];
  const maxStack = [];

  function push(val) {
    stack.push(val);
    if (maxStack.length === 0 || val >= getMax()) {
      maxStack.push(val);
    }
  }

  function pop() {
    const popped = stack.pop();
    if (popped === getMax()) {
      maxStack.pop();
    }
    return popped;
  }

  function top() {
    return stack[stack.length - 1];
  }

  function getMax() {
    return maxStack[maxStack.length - 1];
  }

  return {
    push,
    pop,
    top,
    getMax,
  };
}
