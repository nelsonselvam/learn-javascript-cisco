function add(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return NaN;
  }
  return a + b;
}

function sub(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return NaN;
  }
  return a - b;
}

function mult(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return NaN;
  }
  return a * b;
}

// retwritten using arrow function syntax
add = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a + b;