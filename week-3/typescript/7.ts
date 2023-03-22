let primeArray: number[] = [];

for (let i = 0; primeArray.length < 100; i++) {
  let results: number[] = [];
  let n = i;
  while (n > 0) {
    if (i % n === 0) results.push(i);
    n = n - 1;
  }
  if (results.length === 2) {
    primeArray.push(i);
  }
  results = [];
}

console.log(primeArray);
