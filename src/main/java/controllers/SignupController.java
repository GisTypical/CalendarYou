package controllers;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

import helpers.DB;
import helpers.Hashing;
import helpers.PropertiesReader;

public class SignupController {

    private static PropertiesReader pReader = new PropertiesReader();

    private SignupController() {
    }

    public static String signUp(List<String> values) throws IOException {
        values.set(values.size() - 2, Hashing.getHash(values.get(values.size() - 2)));
        try {
            DB.getInstance().preparedStatement(pReader.readValue("SIGNUP_QUERY"), values);
        } catch (SQLException e) {
            if (e.getMessage().contains("already exists")) {
                return "{\"status\": \"409 Conflict\"}";
            }
            return "{\"status\": \"500 Internal Server Error\"}";
        }
        return "{\"status\": \"200 OK\"}";
    }
}