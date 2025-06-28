package com.example.MockitoDemo;


import org.junit.Test;
import static org.mockito.Mockito.*;
import static org.junit.Assert.*;

public class MyServiceTest {

    @Test
    public void testExternalApi() {
        // Step 1: Create mock
        ExternalApi mockApi = mock(ExternalApi.class);

        // Step 2: Stub method
        when(mockApi.getData()).thenReturn("Mock Data");

        // Step 3: Inject into service
        MyService service = new MyService(mockApi);

        // Step 4: Call and assert
        String result = service.fetchData();

        assertEquals("Mock Data", result);

        // (Optional) Verify interaction
        verify(mockApi).getData();
    }
}
