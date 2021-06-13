package controllers;

import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;

import helpers.DB;
import helpers.PropertiesReader;
import helpers.ValuesArray;

public class PInviteController {

    private PInviteController() {
    }

    public static String invite(HttpServletRequest req) {
        ArrayList<String> values = ValuesArray.getArrayList(req);
        try {
            DB.getInstance().preparedStatement(PropertiesReader.readValue("INVITE_PQ"), values);
        } catch (IOException | SQLException e) {
            e.printStackTrace();
            if (e.getMessage().contains("Already exists")) {
                return "{\"status\": \"409 Conflict\", \"message\":\"Alredy invited\"}";
            }
            if (e.getMessage().contains("is not present")) {
                return "{\"status\": \"409 Conflict\", \"message\":\"User does not exists\"}";
            }
            return "{\"status\": \"500 Server error\"}";
        }
        return "{\"status\": \"200 OK\"}";
    }
}
