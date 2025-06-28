package com.example.JUnitDemo;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest2 {

    private Calculator calculator;

    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setup before test");
    }

    @After
    public void tearDown() {
        calculator = null;
        System.out.println("Teardown after test");
    }

    @Test
    public void testAddition() {
        // Act
        int result = calculator.add(5, 3);

        // Assert
        assertEquals(8, result);
    }

    @Test
    public void testSubtraction() {
        // Act
        int result = calculator.subtract(4, 3);

        // Assert
        assertEquals(1, result);
    }
}
