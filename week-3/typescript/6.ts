// Write an algorithm that prints a multiplication table for numbers up to 12
const printTimesTables = (number: number) => {
  for (let i = 1; i <= number; i++) {
    let j = 1;
    while (j <= number) {
      console.log(`${j} x ${i} = ${j * i}`);
      j++;
    }
  }
};

console.log(printTimesTables(12));
