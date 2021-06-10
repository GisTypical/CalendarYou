package helpers;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

public class DB {

    private static DB instance;
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
        return connection;
    }

    public static DB getInstance() throws SQLException {
        if (instance == null || instance.getConnection().isClosed()) {
            instance = new DB();
        }

        return instance;
    }

    public void preparedStatement(String query, List<String> values) {
        try (PreparedStatement pstmt = this.connection.prepareStatement(query)) {
            for (int i = 0; i < values.size(); i++) {
                pstmt.setString(i + 1, values.get(i));
            }
            pstmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}