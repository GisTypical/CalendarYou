package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import controllers.GEventController;
import controllers.PEventController;

@MultipartConfig()
@WebServlet("/event")
public class Event extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");
        try {
            PrintWriter out = resp.getWriter();
            out.println(GEventController.get(req));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");
        try {
            PrintWriter out = resp.getWriter();
            out.println(PEventController.create(req));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
