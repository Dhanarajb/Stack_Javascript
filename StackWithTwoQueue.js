export function StackUsingQueues() {
  const queue1 = [];
  const queue2 = [];

  function push(element) {
    queue1.push(element);
  }

  function pop() {
    if (isEmpty()) {
      console.log("Stack is empty");
      return null;
    }

    while (queue1.length > 1) {
      queue2.push(queue1.shift());
    }

    const poppedElement = queue1.shift();
    while (queue2.length > 0) {
      queue1.push(queue2.shift());
    }

    return poppedElement;
  }

  function top() {
    if (isEmpty()) {
      console.log("Stack is empty");
      return null;
    }

    while (queue1.length > 1) {
      queue2.push(queue1.shift());
    }

    const topElement = queue1[0];
    queue2.push(queue1.shift());
    while (queue2.length > 0) {
      queue1.push(queue2.shift());
    }

    return topElement;
  }

  function isEmpty() {
    return queue1.length === 0;
  }

  return { push, pop, top, isEmpty };
}
