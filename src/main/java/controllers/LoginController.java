package controllers;

import java.util.ArrayList;
import java.util.Enumeration;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import helpers.Authentication;
import helpers.Hashing;

public class LoginController {

    private LoginController() {
    }

    public static String login(HttpServletRequest req) {
        Enumeration<String> enumeration = req.getParameterNames();
        ArrayList<String> values = new ArrayList<>();
        while (enumeration.hasMoreElements()) {
            values.add(req.getParameter(enumeration.nextElement()));
        }
        values.set(values.size() - 1, Hashing.getHash(values.get(values.size() - 1)));
        if (Boolean.TRUE.equals(Authentication.exec(values))) {
            HttpSession session = req.getSession();
            session.setAttribute("username", values.get(0));
            return "{\"status\":\"200 OK\"}";
        }
        return "{\"status\":\"401 Unauthorized\"}";
    }

}
