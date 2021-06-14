package controllers;

import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;

import helpers.DB;
import helpers.PropertiesReader;

public class GetInviteController {

    private static DB db = DB.getInstance();

    public static String get(HttpServletRequest req) {
        ArrayList<String> calendarid = new ArrayList<>();
        calendarid.add(req.getParameter("calendarid"));
        ArrayList<String> table = new ArrayList<>();
        System.out.println();
        StringBuilder json = new StringBuilder("{\"invites\":[");
        try {
            ResultSet rs = db.preparedStatement(PropertiesReader.readValue("INVITE_GQ"), calendarid);
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
            return "\"message\":\"Internal Server Error\"";
        }
        return json.toString() + "]}";
    }
}
