const numArray = [2, 89, 4, 567, 45, 748, 99];
const numArray2 = [6, 99, 34, 367, 3773, 3738];
const numArray3 = [6, 9, 78, 10, 67, 88, 1, 3, 5, 17];

const returnLargestNum = (array: number[]): number => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      array[i + 1] = array[i];
    }
  }
  return array[array.length - 1];
};

console.log(returnLargestNum(numArray3));
