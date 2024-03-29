export function createStackWithMiddle() {
  const stack = [];
  let middleIndex = null;

  function push(data) {
    stack.push(data);
    if (stack.length === 1) {
      middleIndex = 0;
    } else if (stack.length % 2 === 0) {
      middleIndex++;
    }
  }

  function pop() {
    if (isEmpty()) {
      console.log("Stack is empty");
      return null;
    }

    const poppedElement = stack.pop();
    if (stack.length % 2 === 0) {
      middleIndex--;
    }
    return poppedElement;
  }

  function findMiddle() {
    if (isEmpty()) {
      console.log("Stack is empty");
      return null;
    }
    return stack[middleIndex];
  }

  function deleteMiddle() {
    if (isEmpty()) {
      console.log("Stack is empty");
      return;
    }

    stack.splice(middleIndex, 1);
    if (stack.length % 2 === 0) {
      middleIndex--;
    }
  }

  function isEmpty() {
    return stack.length === 0;
  }

  return { push, pop, findMiddle, deleteMiddle };
}
