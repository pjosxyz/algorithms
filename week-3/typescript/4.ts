const findOddPositions = (array: any): any => {
  let oddArray: any[] = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 !== 0) {
      oddArray.push(array[i]);
    }
  }
  return oddArray;
};

const array1 = [1, 2, 3, 4, 5, 6];
const array2 = ["apple", "cat", "javascript", "software"];

console.log(...findOddPositions(array1));
console.log(...findOddPositions(array2));
