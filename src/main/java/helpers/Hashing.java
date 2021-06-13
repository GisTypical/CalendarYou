package helpers;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class Hashing {

    private Hashing() {
    }

    public static String getHash(String message) {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] encodedhash = digest.digest((message + "usr").getBytes(StandardCharsets.UTF_8));
            return byteToHex(encodedhash);
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return message;
    }

    private static String byteToHex(byte[] hash) {
        StringBuilder hexString = new StringBuilder(2 * hash.length);
        for (int i = 0; i < hash.length; i++) {
            String hex = Integer.toHexString(0xff & hash[i]);
            if (hex.length() == 1) {
                hexString.append('0');
            }
            hexString.append(hex);
        }
        return hexString.toString();
    }
}