package controllers;

import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import helpers.DB;
import helpers.PropertiesReader;

public class DelProfileController {

    private static DB db = DB.getInstance();

    public static void delete(HttpServletRequest req, HttpServletResponse resp) {
        ArrayList<String> values = new ArrayList<>();
        values.add(req.getParameter("username"));
        try {
            db.preparedStatement(PropertiesReader.readValue("P_DEL"), values);
        } catch (SQLException | IOException e) {
            e.printStackTrace();
            resp.setStatus(500);
        }
        resp.setStatus(200);
    }
}
