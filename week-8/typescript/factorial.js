var numA = 8;
function factorial(num) {
    var counter = num - 1;
    var result = num;
    if (counter === 1)
        return result;
    result = num * factorial(counter);
    return result;
}
console.log(factorial(numA));
