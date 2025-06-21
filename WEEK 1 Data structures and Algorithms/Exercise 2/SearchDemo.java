package search;

import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

public class SearchDemo {

    // Linear search by product name
    public static Product linearSearch(Product[] products, String name) {
        for (Product p : products) {
            if (p.productName.equalsIgnoreCase(name)) {
                return p;
            }
        }
        return null;
    }

    // Binary search by product name
    public static Product binarySearch(Product[] products, String name) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            int result = name.compareToIgnoreCase(products[mid].productName);

            if (result == 0) return products[mid];
            else if (result < 0) right = mid - 1;
            else left = mid + 1;
        }

        return null;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Sample product list
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Chair", "Furniture"),
            new Product(103, "Shoes", "Fashion"),
            new Product(104, "Watch", "Accessories"),
            new Product(105, "Mobile", "Electronics")
        };

        // User input for product name
        System.out.print("Enter product name to search: ");
        String searchName = sc.nextLine();

        // User input for search method
        System.out.print("Enter search method (L for Linear, B for Binary): ");
        String method = sc.nextLine().trim().toUpperCase();

        Product result = null;

        if (method.equals("L")) {
            System.out.println("\n Performing Linear Search...");
            result = linearSearch(products, searchName);
        } else if (method.equals("B")) {
            // Sort array before binary search
            Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));
            System.out.println("\n Performing Binary Search...");
            result = binarySearch(products, searchName);
        } else {
            System.out.println(" Invalid search method. Please enter 'L' or 'B'.");
            sc.close();
            return;
        }

        // Output the result
        if (result != null) {
            System.out.println(" Product found: " + result);
        } else {
            System.out.println(" Product not found.");
        }

        sc.close();
    }
}
