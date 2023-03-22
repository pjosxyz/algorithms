function reverseString(str) {
    // base case
    if (str.length === 1)
        return str[0];
    var lastChar = str.charAt(str.length - 1);
    var nextStr = str.substring(0, str.length - 1);
    var nextChar = reverseString(nextStr);
    var reveresedStr = lastChar + nextChar;
    return reveresedStr;
}
var str1 = "horse";
var str2 = "cabbage";
console.log(reverseString(str1));
console.log(reverseString(str2));
