public class SumNumbers {
  public static void main(String[] args) {
    // int[] numArrayB = { 1, 2, 3, 4, 5 };
    int[] numArrayA = { 1, 2, 3 };
    System.out.println(sumNums(numArrayA, 0, 0));
  }

  public static int sumNums(int[] arr, int index, int sum) {
    if (index == arr.length - 1)
      return sum + arr[index];

    sum += arr[index];

    index++;

    return sumNums(arr, index, sum);
  }
}
