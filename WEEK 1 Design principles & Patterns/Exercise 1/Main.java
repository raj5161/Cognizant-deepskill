package singleton_pattern;

public class Main {
    public static void main(String[] args) {
        // Get first instance of Logger
        Logger logger1 = Logger.getInstance();
        logger1.log("First message");

        // Get second instance of Logger
        Logger logger2 = Logger.getInstance();
        logger2.log("Second message");

        // Verify both instances are the same
        if (logger1 == logger2) {
            System.out.println("Both logger instances are the same (Singleton confirmed).");
        } else {
            System.out.println("Different instances exist (Singleton failed).");
        }
    }
}
