package controllers;

import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;

import helpers.DB;
import helpers.PropertiesReader;

public class GCalendarController {
    private static DB db = DB.getInstance();

    private GCalendarController() {
    }

    public static String get(HttpServletRequest req) {
        ArrayList<String> username = new ArrayList<>();
        username.add(req.getParameter("username"));
        ArrayList<String> table = new ArrayList<>();
        StringBuilder json = new StringBuilder("{\"calendars\":[");
        try {
            ResultSet rs = db.preparedStatement(PropertiesReader.readValue("CALENDAR_GQ"), username);
            while (rs.next()) {
                ArrayList<String> rowValues = new ArrayList<>();
                for (int j = 1; j <= rs.getMetaData().getColumnCount(); j++) {
                    rowValues.add("\"" + rs.getMetaData().getColumnName(j) + "\":" + "\"" + rs.getString(j) + "\"");
                }
                table.add("{" + String.join(",", rowValues) + "}");
            }
            json.append(String.join(",", table));
        } catch (SQLException | IOException e) {
            e.printStackTrace();
        }
        return json.toString() + "]}";
    }
}