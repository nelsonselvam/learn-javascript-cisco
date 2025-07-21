function factorial(n) {
  console.log("Calling factorial with n =", n);
  if (n === 0) {
    console.log("Reached base case");
    return 1;
  }
  const result = n * factorial(n - 1);
  console.log(`Returning ${result} for n = ${n}`);
  return result;
}

factorial(3);
