const runningTotals = (array: number[]): number => {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
    console.log(`Running total: ${total}`);
  }
  return total;
};

const totes = [10, 20, 30, 40, 50, 60, 70, 80];

console.log(runningTotals(totes));
