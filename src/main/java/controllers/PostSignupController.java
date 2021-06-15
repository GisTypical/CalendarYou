package controllers;

import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import helpers.DB;
import helpers.Hashing;
import helpers.ImageStorage;
import helpers.PropertiesReader;
import helpers.ValuesArray;

public class PostSignupController {

    private static DB db = DB.getInstance();

    private PostSignupController() {
    }

    public static String signUp(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
        ArrayList<String> values = ValuesArray.getArrayList(req);
        values.set(values.size() - 1, Hashing.getHash(values.get(values.size() - 1)));
        try {
            db.preparedStatement(PropertiesReader.readValue("SIGNUP_QUERY"), values);
        } catch (SQLException e) {
            e.printStackTrace();
            if (e.getMessage().contains("Already exists")) {
                return "{\"status\": \"409 Conflict\"}";
            }
            return "{\"status\": \"500 Internal Server Erro\"}";
        }
        return "{\"status\": \"200 OK\"}";
    }
}