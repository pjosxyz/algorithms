function getNthFibNumber(
  nthNum: number,
  fibArray: number[] = [0, 1, 1, 2],
  index: number = 0
) {
  if (index === nthNum - 1) return fibArray[index];
  fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
  index++;
  return getNthFibNumber(nthNum, fibArray, index);
}

console.log(getNthFibNumber(8));
