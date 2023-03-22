class Factorial {
  public static void main(String[] args) {
    int myNum = 9;
    System.out.println(getFactorial(myNum));
  }

  public static int getFactorial(int num) {
    int counter = num - 1;
    if (counter == 1)
      return num;
    int result = num * getFactorial(counter);
    return result;
  }
}
