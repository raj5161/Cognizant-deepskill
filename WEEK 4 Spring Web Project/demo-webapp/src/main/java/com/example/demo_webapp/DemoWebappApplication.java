package com.example.demo_webapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@SpringBootApplication
public class DemoWebappApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(DemoWebappApplication.class);

    public static void main(String[] args) {
        LOGGER.info("Starting the Demo Web Application...");
        SpringApplication.run(DemoWebappApplication.class, args);
    }
}
