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

public class PostEventController {

    private static DB db = DB.getInstance();

    private PostEventController() {
    }

    public static String create(HttpServletRequest req) throws IOException, ServletException {
        ArrayList<String> values = ValuesArray.getArrayList(req);
        UUID uuid = UUID.randomUUID();
        values.add(0, uuid.toString());
        String path = req.getServletContext().getRealPath("");
        values.add(ImageStorage.store(req.getPart("img_path"), path));
        try {
            db.preparedStatement(PropertiesReader.readValue("EVENT_PQ"), values);
        } catch (IOException | SQLException e) {
            e.printStackTrace();
            if (e.getMessage().contains("is not present")) {
                System.out.println(e.getMessage());
                return "{\"status\": \"409 Conflict\", \"message\":\"Calendar does not exists\"}";
            }
            return "{\"status\": \"500 Server error\"}";
        }
        return "{\"status\": \"200 OK\"}";
    }
}
