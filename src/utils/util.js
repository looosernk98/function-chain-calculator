import { FUNCTION_INPUT_PATTERN } from "./constants";

export const evaluateEquation = (exp) => {
  return eval(exp); // can be harmful like xss , html injection
};

export const calculator = (functions, index, input) => {
  const convertedExp = convertIntoValidJSExpression(functions[index].equation);
  const output = evaluateEquation(convertedExp.replace(/x/g, input));

  if (functions[index].next === "") return output; // base case of recursion

  const nextIndex = functions.findIndex(
    (item) => item.name === functions[index].next
  );
  return calculator(functions, nextIndex, output);
};

export const convertIntoValidJSExpression = (str) => {
  return str
    .replace(/\s+/g, "") // Remove all spaces
    .replace(/(\d)x/g, "$1*x") // Add * between a number and 'x'
    .replace(/\^/g, "**"); // // Replace ^ with ** for exponentiation
};

export const isValidExpression = (value) => {
  if (value === "") return true;
  return FUNCTION_INPUT_PATTERN.test(value);
};
