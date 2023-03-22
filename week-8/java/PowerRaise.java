public class PowerRaise {
  public static void main(String[] args) {
    System.out.println(raiseToPower(2, 3));
    System.out.println(raiseToPower(3, 3));
    System.out.println(raiseToPower(5, 4));
    System.out.println(raiseToPower(5, 3));
    System.out.println(raiseToPower(97, 12));
  }

  public static long raiseToPower(int base, int exp) {
    if (exp == 1)
      return base;
    int nextBase = base * base;
    exp--;
    return raiseToPower(base, nextBase, exp);
  }

  public static long raiseToPower(int base, int newBase, int exp) {
    if (exp == 1)
      return newBase;
    int nextBase = base * newBase;
    exp--;
    return raiseToPower(base, nextBase, exp);
  }
}
