package com.example.JUnitDemo;

import static org.junit.Assert.*;

import org.junit.Test;


public class CalculatorTest {

    @Test
    public void testAdd() {
        Calculator calc = new Calculator();
        assertEquals(5, calc.add(2, 3));
    }

    @Test
    public void testSubtract() {
        Calculator calc = new Calculator();
        assertEquals(4, calc.subtract(7, 3));
    }
}

