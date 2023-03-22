function reverseString(str: string): string {
  // base case
  if (str.length === 1) return str[0];

  const lastChar = str.charAt(str.length - 1);
  const nextStr = str.substring(0, str.length - 1);

  const nextChar = reverseString(nextStr);
  const reveresedStr = lastChar + nextChar;

  return reveresedStr;
}

const str1 = "horse";
const str2 = "cabbage";
console.log(reverseString(str1));
console.log(reverseString(str2));
