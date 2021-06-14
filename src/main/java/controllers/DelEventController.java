package controllers;

import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import helpers.DB;
import helpers.PropertiesReader;

public class DelEventController {

    private static DB db = DB.getInstance();

    public static void delete(HttpServletRequest req, HttpServletResponse resp) {
        ArrayList<String> values = new ArrayList<>();
        values.add(req.getParameter("eventid"));
        try {
            db.preparedStatement(PropertiesReader.readValue("EVENT_DELQ"), values);
        } catch (SQLException | IOException e) {
            e.printStackTrace();
        }
    }
}
