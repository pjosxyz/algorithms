public class FindElemArray {
  public static void main(String[] args) {
    char[] testArrayA = { 'a', 'c', 'x', 'j', 'k' };
    boolean resultA = findElem(testArrayA, 'x', 0);
    System.out.println(resultA);
  }

  public static boolean findElem(char[] arr, char elem, int index) {
    if (arr[index] == elem)
      return true;

    if (index == arr.length - 1)
      return false;

    index++;

    return findElem(arr, elem, index);
  }
}
