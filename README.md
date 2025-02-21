# JavaScript Bug: Unexpected Null Behavior with Strict Equality

This repository demonstrates a subtle bug in JavaScript related to the strict equality operator (===) when handling null values in an addition function.

## Bug Description
The `foo` function is designed to add two numbers. However, when either input `a` or `b` is `null`, it unexpectedly returns `null` instead of throwing an error or attempting to handle the null values more gracefully.

## Reproduction
1. Clone this repository.
2. Open `bug.js`.
3. Run the code using a JavaScript runtime (Node.js, browser console, etc.).
4. Observe the unexpected null output.

## Solution
The solution provided in `bugSolution.js` improves the error handling and provides clear error messages for null inputs, making the function's behavior more predictable.