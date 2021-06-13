package controllers;

import java.util.ArrayList;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import helpers.DB;
import helpers.PropertiesReader;
import helpers.ValuesArray;

public class PCalendarController {

    public static String create(HttpServletRequest req) {
        ArrayList<String> values = ValuesArray.getArrayList(req);
        UUID uuid = UUID.randomUUID();
        values.add(0, uuid.toString());
        try {
            DB.getInstance().preparedStatement(PropertiesReader.readValue("CALENDAR_PQ"), values);
        } catch (Exception e) {
            e.printStackTrace();
            if (e.getMessage().contains("Already exists")) {
                return "{\"status\": \"409 Conflict\"}";
            }
            return "{\"status\": \"500 Server error\"}";
        }
        return "{\"status\": \"200 OK\"}";
    }

}
