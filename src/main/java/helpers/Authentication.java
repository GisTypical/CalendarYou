package helpers;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

public class Authentication {
    private static PropertiesReader pReader = new PropertiesReader();
    private static DB db = DB.getInstance();

    private Authentication() {
    }

    public static Boolean exec(List<String> values) {
        try {
            return db.preparedStatement(pReader.readValue("LOGIN_QUERY"), values).next();
        } catch (SQLException | IOException e) {
            e.printStackTrace();
        }
        return false;
    }
}
