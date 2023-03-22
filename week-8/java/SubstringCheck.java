public class SubstringCheck {
  public static void main(String[] args) {
    String a = "her and herself";
    String aCheck = "he";
    String b = "he, her and herself he";
    String bCheck = "he";
    String c = "her her her her her";
    String cCheck = "her";

    System.out.println(countSubStr(b, bCheck, 0, 0));
  }

  public static int countSubStr(String str, String check, int index, int count) {
    int checkLength = check.length();

    String slice = str.substring(index, (index + checkLength));

    if (slice.equals(check))
      count++;

    if (index == (str.length()) - checkLength)
      return count;

    index++;

    return countSubStr(str, check, index, count);
  }
}
