// 2. Write an algorithm that returns a new array which is the reverse of the input.
const returnReversedArray = (array: number[]): number[] => {
  let revArray: number[] = [];
  for (let i = 0; i < array.length; i++) {
    revArray[i] = array[array.length - (i + 1)];
  }
  return revArray;
};

const numArray = [1, 2, 3, 4, 5];
const numArray2 = [9, 8, 7, 6, 5];

console.log(returnReversedArray(numArray2));
