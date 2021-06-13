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

public class SignupController {

    private SignupController() {
    }

    public static String signUp(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
        ArrayList<String> values = ValuesArray.getArrayList(req);
        values.set(values.size() - 1, Hashing.getHash(values.get(values.size() - 1)));
        String path = req.getServletContext().getRealPath("");
        values.add(ImageStorage.store(req.getPart("img_path"), path));
        try {
            DB.getInstance().preparedStatement(PropertiesReader.readValue("SIGNUP_QUERY"), values);
        } catch (SQLException e) {
            e.printStackTrace();
            if (e.getMessage().contains("Already exists")) {
                resp.setStatus(409);
                return "{\"message\": \"Username already exists\"}";
            }
            resp.setStatus(500);
            return "{\"message\": \"Server error\"}";
        }
        resp.setStatus(200);
        return "{\"message\": \"Signup successfull\"}";
    }
}