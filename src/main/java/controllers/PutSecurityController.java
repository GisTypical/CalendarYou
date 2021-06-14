package controllers;

import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import helpers.DB;
import helpers.Hashing;
import helpers.PropertiesReader;
import helpers.ValuesArray;

public class PutSecurityController {

    private static DB db = DB.getInstance();

    public static void update(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
        ArrayList<String> values = ValuesArray.getArrayList(req);
        values.set(0, Hashing.getHash(values.get(0)));
        try {
            db.preparedStatement(PropertiesReader.readValue("SECURITY"), values);
            resp.setStatus(200);
        } catch (SQLException e) {
            e.printStackTrace();
            resp.setStatus(500);
        }
    }
}
