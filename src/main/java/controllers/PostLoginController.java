package controllers;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import helpers.Authentication;
import helpers.DB;
import helpers.Hashing;
import helpers.ValuesArray;

public class PostLoginController {

    private PostLoginController() {
    }

    public static String login(HttpServletRequest req) {
        ArrayList<String> values = ValuesArray.getArrayList(req);
        values.set(values.size() - 1, Hashing.getHash(values.get(values.size() - 1)));
        if (Boolean.TRUE.equals(Authentication.exec(values))) {
            HttpSession session = req.getSession();
            session.setAttribute("username", values.get(0));
            return "{\"status\":\"200 OK\"}";
        }
        return "{\"status\":\"401 Unauthorized\"}";
    }

}
