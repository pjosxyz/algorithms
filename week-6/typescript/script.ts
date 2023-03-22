/* 
1. Given a list of numbers return a new list with only the elements of the first list that have a value > 1000
*/

const myList = [10, 100, 500, 1001, 1000, 3000, 9];

function filterOverThousand(array: number[]): number[] {
  const newList: number[] = [];
  array.length > 0 &&
    array.forEach((elem) => (elem > 1000 ? newList.push(elem) : null));
  return newList;
}

const filteredArray = filterOverThousand(myList);

console.log(filteredArray);
