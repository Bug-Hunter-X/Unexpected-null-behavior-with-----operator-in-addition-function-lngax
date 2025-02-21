function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed'); // Throw an error for null values
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers'); // Handle non-number inputs
  }
  return a + b; // Normal addition
}

console.log(foo(5, 5)); // Output: 10

try {
  console.log(foo(null, 5)); // Throws an error
} catch (error) {
  console.error(error.message); // Output: Null values are not allowed
}

try {
  console.log(foo(5, null)); // Throws an error
} catch (error) {
  console.error(error.message); // Output: Null values are not allowed
}

try {
  console.log(foo('5',5)); // Throws an error
} catch (error) {
  console.error(error.message); // Output: Inputs must be numbers
}