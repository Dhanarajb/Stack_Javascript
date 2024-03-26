export function evaluatePostfix(expression) {
  const stack = [];
  const tokens = expression.split(" ");

  for (const token of tokens) {
    if (!isNaN(parseInt(token))) {
      stack.push(parseInt(token));
    } else {
      const operand2 = stack.pop();
      const operand1 = stack.pop();

      switch (token) {
        case "+":
          stack.push(operand1 + operand2);
          break;
        case "-":
          stack.push(operand1 - operand2);
          break;
        case "*":
          stack.push(operand1 * operand2);
          break;
        case "/":
          stack.push(Math.floor(operand1 / operand2));
          break;
      }
    }
  }

  return stack.pop();
}
