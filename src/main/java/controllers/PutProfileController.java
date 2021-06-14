package controllers;

import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import helpers.DB;
import helpers.ImageStorage;
import helpers.PropertiesReader;
import helpers.ValuesArray;

public class PutProfileController {

    private static DB db = DB.getInstance();

    public static void update(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
        ArrayList<String> values = ValuesArray.getArrayList(req);
        String path = req.getServletContext().getRealPath("");
        values.add(values.size() - 2, ImageStorage.store(req.getPart("img_path"), path));
        try {
            db.preparedStatement(PropertiesReader.readValue("PROFILE"), values);
            resp.setStatus(200);
        } catch (SQLException e) {
            e.printStackTrace();
            resp.setStatus(500);
        }
    }
}
