const numA = 8;

function factorial(num: number): number {
  let counter = num - 1;
  let result = num;
  if (counter === 1) return result;
  result = num * factorial(counter);
  return result;
}

console.log(factorial(numA));
