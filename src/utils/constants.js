export const FUNCTION_INPUT_PATTERN = /^\s*(?:\d+|x(?:\^\d+)?)(?:\s*([+\-*/^])\s*(?:\d+|x(?:\^\d+)?))*\s*$/

export const INPUT_ERROR_MSG = 'Invalid input: Please follow the correct pattern.'

export const INITIAL_DATA = {
    initialInput: 2,
    functions: [
      {
        input: "",
        name: "Function 1",
        equation: "x^2",
        next: "Function 2",
        output: "",
        error: "",
      },
      {
        input: "",
        name: "Function 2",
        equation: "2x+4",
        next: "Function 4",
        output: "",
        error: "",
      },
      {
        input: "",
        name: "Function 3",
        equation: "x^2+20",
        next: "",
        output: "",
        error: "",
      },
      {
        input: "",
        name: "Function 4",
        equation: "x-2",
        next: "Function 5",
        output: "",
        error: "",
      },
      {
        input: "",
        name: "Function 5",
        equation: "x/2",
        next: "Function 3",
        output: "",
        error: "",
      },
    ],
    finalOutput: "",
    entryPoint: "Function 1",
    exitPoint: "Function 3",
  };