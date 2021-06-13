package helpers;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

public class Authentication {
    private static DB db = DB.getInstance();

    private Authentication() {
    }

    public static Boolean exec(List<String> values) {
        try {
            return db.preparedStatement(PropertiesReader.readValue("LOGIN_QUERY"), values).next();
        } catch (SQLException | IOException e) {
            e.printStackTrace();
        }
        return false;
    }
}
