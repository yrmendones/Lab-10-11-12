package src;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {
    private static final String URL = "jdbc:mysql://localhost:3306/school";
    private static final String USER = "root";
    private static final String PASSWORD = "";

    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }

    // Optional: test the connection
    public static void main(String[] args) {
        try (Connection conn = getConnection()) {
            System.out.println("Connected to MySQL database successfully!");
        } catch (SQLException e) {
            System.out.println("Connection failed! " + e.getMessage());
        }
    }
}
