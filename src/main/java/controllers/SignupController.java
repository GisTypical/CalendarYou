package controllers;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.sql.SQLException;
import java.util.List;

import helpers.DB;
import helpers.Hashing;
import helpers.PropertiesReader;

public class SignupController {

    private static PropertiesReader pReader = new PropertiesReader();

    private SignupController() {
    }

    public static String signUp(List<String> values) throws SQLException, IOException {
        Hashing hash = new Hashing();
        try {
            values.set(values.size() - 2, hash.getHash(values.get(values.size() - 2)));
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        DB.getInstance().preparedStatement(pReader.readValue("signup_query"), values);
        return "\"message\": \"200 OK\"";
    }
}
