package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Enumeration;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import controllers.SignupController;

/**
 * Servlet implementation class Registro
 */

@MultipartConfig()
@WebServlet("/signup")
public class Signup extends HttpServlet {
    private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
     *      response)
     */

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException {
        Enumeration<String> enumeration = req.getParameterNames();
        ArrayList<String> values = new ArrayList<>();
        while (enumeration.hasMoreElements()) {
            values.add(req.getParameter(enumeration.nextElement()));
        }
        resp.setContentType("application/json");
        try {
            PrintWriter out = resp.getWriter();
            out.println(SignupController.signUp(values));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}