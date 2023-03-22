public class CheckPalindrome {
  public static void main(String[] args) {
    String strA = "cabbage";
    String strB = "racecar";

    System.out.println(checkIsPalindrome(strA));
    System.out.println(checkIsPalindrome(strB));
  }

  public static boolean checkIsPalindrome(String str) {
    String reversedStr = reverseString(str);
    return reversedStr.equals(str);
  }

  public static String reverseString(String str) {
    // base case, coerce char to string
    if (str.length() == 1)
      return str.charAt(0) + "";

    String lastChar = str.charAt(str.length() - 1) + "";
    String nextStr = str.substring(0, str.length() - 1);

    String nextChar = reverseString(nextStr);
    String reversedStr = lastChar + nextChar;

    return reversedStr;
  }
}
