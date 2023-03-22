public class ReverseString {
  public static void main(String[] args) {
    String str1 = "horse";
    String str2 = "cabbage";

    System.out.println(reverseString(str1));
    System.out.println(reverseString(str2));
  }

  public static String reverseString(String str) {
    if (str.length() == 1)
      return str.charAt(0) + "";

    String lastChar = str.charAt(str.length() - 1) + "";
    String nextStr = str.substring(0, str.length() - 1);

    String nextChar = reverseString(nextStr);
    String reversedStr = lastChar + nextChar;

    return reversedStr;
  }
}
