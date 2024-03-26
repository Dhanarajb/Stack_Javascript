function Stack() {
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

  function isEmpty() {
    return stack.length === 0;
  }

  return { push, pop, isEmpty };
}

export function reverseString(str) {
  const stack = Stack();
  let reversedString = "";

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  while (!stack.isEmpty()) {
    reversedString += stack.pop();
  }

  return reversedString;
}
