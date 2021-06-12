package helpers;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

public class DB {
    private static DB instanceDB;
    private Connection connection;
    private static PropertiesReader pReader = new PropertiesReader();

    private DB() throws SQLException {
        try {
            String url = pReader.readValue("JDBC_DATABASE_URL");
            this.connection = DriverManager.getConnection(url);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public Connection getConnection() {
        return this.connection;
    }

    public static DB getInstance() {
        try {
            if (instanceDB == null || instanceDB.getConnection().isClosed()) {
                instanceDB = new DB();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return instanceDB;
    }

    public ResultSet preparedStatement(String query, List<String> values) throws SQLException {
        PreparedStatement pstmt = instanceDB.getConnection().prepareStatement(query);
        for (int i = 0; i < values.size(); i++) {
            pstmt.setString(i + 1, values.get(i));
        }
        if (query.contains("SELECT")) {
            return pstmt.executeQuery();
        }
        pstmt.executeUpdate();
        return null;
    }
}