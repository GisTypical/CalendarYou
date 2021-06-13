package helpers;

import java.util.ArrayList;
import java.util.Enumeration;

import javax.servlet.http.HttpServletRequest;

public class ValuesArray {

    private ValuesArray() {
    }

    public static ArrayList<String> getArrayList(HttpServletRequest req) {
        Enumeration<String> enumeration = req.getParameterNames();
        ArrayList<String> values = new ArrayList<>();
        while (enumeration.hasMoreElements()) {
            values.add(req.getParameter(enumeration.nextElement()));
        }
        return values;
    }
}
