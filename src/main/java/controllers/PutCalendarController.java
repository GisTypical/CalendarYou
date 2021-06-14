package controllers;

import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import helpers.DB;
import helpers.PropertiesReader;
import helpers.ValuesArray;

public class PutCalendarController {

    private static DB db = DB.getInstance();

    public static void update(HttpServletRequest req, HttpServletResponse resp) {
        ArrayList<String> values = ValuesArray.getArrayList(req);
        try {
            db.preparedStatement(PropertiesReader.readValue("CALENDAR_PUTQ"), values);
        } catch (SQLException | IOException e) {
            e.printStackTrace();
            resp.setStatus(500);
        }
        resp.setStatus(200);
    }

}
