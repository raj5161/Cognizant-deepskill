package singleton_pattern;

public class Logger {
    // Step 2: Private static instance of Logger
    private static Logger instance;

    // Step 2: Private constructor to prevent instantiation
    private Logger() {
        System.out.println("Logger initialized.");
    }

    // Step 3: Public static method to get the single instance
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    // Sample logging method
    public void log(String message) {
        System.out.println("[LOG]: " + message);
    }
}
