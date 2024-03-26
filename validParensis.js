export function isBalanced(expression) {
  const stack = [];
  const parenthesesMap = { "(": ")", "[": "]", "{": "}" };

  for (let char of expression) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (stack.length === 0 || parenthesesMap[stack.pop()] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
