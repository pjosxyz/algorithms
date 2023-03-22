import java.util.ArrayList;
import java.util.List;

public class Fibonacci {

  public static void main(String[] args) {
    ArrayList<Integer> fibNums = new ArrayList<>(List.of(0, 1, 1, 2));
    System.out.println(getNthFibNumber(8, fibNums, 0));
  }

  public static int getNthFibNumber(int nthNum, ArrayList<Integer> fibArray, int index) {
    if (index == nthNum - 1)
      return fibArray.get(index);

    int n1 = fibArray.get(fibArray.size() - 1);
    int n2 = fibArray.get(fibArray.size() - 2);

    fibArray.add(n1 + n2);
    index++;

    return getNthFibNumber(nthNum, fibArray, index);
  }
}
