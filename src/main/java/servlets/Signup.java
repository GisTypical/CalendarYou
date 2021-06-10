package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.*;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import controllers.SignupController;

import java.util.ArrayList;
import java.util.Enumeration;

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
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        Enumeration<String> enumeration = req.getParameterNames();
        ArrayList<String> keys = new ArrayList<>();
        ArrayList<String> values = new ArrayList<>();
        while (enumeration.hasMoreElements()) {
            keys.add(enumeration.nextElement());
            values.add(req.getParameter(keys.get(keys.size() - 1)));
        }
        try {
            PrintWriter out = resp.getWriter();
            out.println(SignupController.signUp(values));
        } catch (IOException | SQLException e) {
            e.printStackTrace();
        }
    }
}