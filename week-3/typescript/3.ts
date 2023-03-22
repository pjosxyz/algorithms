const findElement = (
  elem: number | string,
  elemArray: number[] | string[]
): boolean => {
  let bool = false;
  for (let i = 0; i < elemArray.length; i++) {
    if (elemArray[i] === elem) {
      return (bool = true);
    } else {
      bool = false;
    }
  }
  return bool;
};

const numberArray = [1, 2, 3, 4, 5];
const stringArray = ["a", "b", "c", "d", "e"];
const unsortedArray = ["big", "elephants", "can't", "use", "small", "exits"];

console.log(findElement(20, numberArray));
console.log(findElement("b", stringArray));
console.log(findElement("can't", unsortedArray));
