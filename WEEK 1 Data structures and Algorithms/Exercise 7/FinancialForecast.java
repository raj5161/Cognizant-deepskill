package forecasting;

import java.util.Scanner;

public class FinancialForecast {

    // Recursive method to compute future value
    public static double predictFutureValue(double principal, double rate, int years) {
        if (years == 0) {
            return principal;
        }
        return (1 + rate) * predictFutureValue(principal, rate, years - 1);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // User input
        System.out.print("Enter the principal amount (₹): ");
        double principal = scanner.nextDouble();

        System.out.print("Enter the annual rate of interest (%): ");
        double ratePercent = scanner.nextDouble();

        
        scanner.nextLine(); // consume leftover newline

        System.out.print("Is the customer a senior citizen? (yes/no): ");
        String isSenior = scanner.nextLine().trim().toLowerCase();

        // Apply senior citizen bonus
        if (isSenior.equals("yes")) {
            ratePercent += 0.5;
            System.out.println("Senior citizen bonus applied: +0.5%");
        }
        System.out.print("Enter the time in years: ");
        int years = scanner.nextInt();


        // Convert percentage rate to decimal
        double rate = ratePercent / 100;

        // Calculate future value
        double futureValue = predictFutureValue(principal, rate, years);

        // Output result
        System.out.printf("\n Projected Value after %d years: ₹%.2f\n", years, futureValue);

        scanner.close();
    }
}
