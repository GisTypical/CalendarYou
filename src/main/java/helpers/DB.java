package helpers;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

public class DB {

    private static DB instance;
    private Connection connection;
    private String dbName = "calendaryou";
    private String url = "jdbc:postgresql://localhost:5432/" + this.dbName;
    private String username = "postgres";
    private String password = "123";

    private DB() throws SQLException {
        this.connection = DriverManager.getConnection(url, username, password);
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