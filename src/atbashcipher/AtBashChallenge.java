package atbashcipher;

public class AtBashChallenge {

    public static void main(String[] args) {
    String test = "Testing the Cipher";
    System.out.println(Cipher(test));
    }

    public static String Cipher(String in) {
        StringBuilder rev = new StringBuilder();
        for (int i = 0; i < in.length(); i++) {
            char c = in.charAt(i);
            if (!Character.isLetter(c)) {
                rev.append(c);
            } else if (Character.isLowerCase(c)) {
                int sub = ('z'-c) + 'a';
                rev.append((char) sub);
            } else if (Character.isUpperCase(c)) {
                int sub = ('Z'-c) + 'A';
                rev.append((char) sub);
            }
        }
        return rev.toString();
    }
}
