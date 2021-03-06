package servlets;

import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import controllers.PostLoginController;

@MultipartConfig()
@WebServlet("/login")
public class Login extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException {
        resp.setContentType("application/json");
        try {
            PrintWriter out = resp.getWriter();
            out.println(PostLoginController.login(req));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}