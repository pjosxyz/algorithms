import java.util.Arrays;

public class ReverseArray {
  public static void main(String[] args) {
    int[] numArrayA = { 1, 2, 3, 4 };
    int[] numArrayB = { 1, 2, 3, 4, 5 };

    int[] reversedArrayA = revArray(numArrayA, 0);
    int[] reversedArrayB = revArray(numArrayB, 0);

    System.out.println(Arrays.toString(reversedArrayA));
    System.out.println(Arrays.toString(reversedArrayB));
  }

  public static int[] revArray(int[] arr, int index) {
    if (index > (arr.length - 1) / 2)
      return arr;

    int first = arr[index];
    int last = arr[arr.length - 1 - index];

    arr[index] = last;
    arr[arr.length - 1 - index] = first;

    index++;

    return revArray(arr, index);

  }
}
