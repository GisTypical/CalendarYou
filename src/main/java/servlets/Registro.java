package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.*;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.util.Enumeration;
import java.util.logging.Logger;

/**
 * Servlet implementation class Registro
 */

@WebServlet("/Registro")
public class Registro extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private final static Logger LOGGER = Logger.getLogger("Log");

    /**
     * Default constructor.
     */
    public Registro() {

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
     *      response)
     */

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        Enumeration paramaterNames = req.getParameterNames();
        if (paramaterNames.hasMoreElements()) {
            LOGGER.info("Hay elementos");
        }
        resp.setContentType("application/json");
        PrintWriter out = resp.getWriter();
        LOGGER.info("REQUEST: " + req.toString() + "\tNAME: " + req.getParameter("name"));
        out.println("{ \"datos\": \"" + req.getParameter("name") + "\"}");
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
     *      response)
     */

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out = resp.getWriter();
        out.println("<h1>BIENVENIDO</h1>");
    }
}