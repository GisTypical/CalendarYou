package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import controllers.PInviteController;

@MultipartConfig()
@WebServlet("/invite")
public class Invite extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");
        try {
            PrintWriter out = resp.getWriter();
            out.println(PInviteController.invite(req));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
