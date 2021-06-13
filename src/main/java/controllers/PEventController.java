package controllers;

import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.UUID;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;

import helpers.DB;
import helpers.ImageStorage;
import helpers.PropertiesReader;
import helpers.ValuesArray;

public class PEventController {

    private PEventController() {
    }

    public static String create(HttpServletRequest req) throws IOException, ServletException {
        ArrayList<String> values = ValuesArray.getArrayList(req);
        UUID uuid = UUID.randomUUID();
        values.add(0, uuid.toString());
        String path = req.getServletContext().getRealPath("");
        values.add(ImageStorage.store(req.getPart("img_path"), path));
        try {
            DB.getInstance().preparedStatement(PropertiesReader.readValue("EVENT_PQ"), values);
        } catch (IOException | SQLException e) {
            e.printStackTrace();
            if (e.getMessage().contains("Already exists")) {
                return "{\"status\": \"409 Conflict\"}";
            }
            return "{\"status\": \"500 Server error\"}";
        }
        return "{\"status\": \"200 OK\"}";
    }
}
