function getNthFibNumber(nthNum, fibArray, index) {
    if (fibArray === void 0) { fibArray = [0, 1, 1, 2]; }
    if (index === void 0) { index = 0; }
    // if (fibArray[nthNum - 1]) return fibArray[index];
    if (index === nthNum - 1)
        return fibArray[index];
    fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
    index++;
    return getNthFibNumber(nthNum, fibArray, index);
}
console.log(getNthFibNumber(8));
