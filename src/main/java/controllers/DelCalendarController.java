package controllers;

import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import helpers.DB;
import helpers.PropertiesReader;

public class DelCalendarController {

    private static DB db = DB.getInstance();

    public static void delete(HttpServletRequest req, HttpServletResponse resp) {
        ArrayList<String> values = new ArrayList<>();
        values.add(req.getParameter("calendarid"));
        try {
            db.preparedStatement(PropertiesReader.readValue("CALENDAR_DELQ"), values);
        } catch (SQLException | IOException e) {
            e.printStackTrace();
            resp.setStatus(500);
        }
        resp.setStatus(200);
    }
}
