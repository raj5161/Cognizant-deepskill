package com.example.MockitoDemo;
import org.junit.Test;
import static org.mockito.Mockito.*;
import static org.junit.Assert.*;

public class MyServiceTest2 {

    @Test
    public void testVerifyInteraction() {
        // Step 1: Create mock
        ExternalApi mockApi = mock(ExternalApi.class);

        // Step 2: Stub (optional if you’re only verifying)
        when(mockApi.getData()).thenReturn("Mocked");

        // Step 3: Call method
        MyService service = new MyService(mockApi);
        service.fetchData();

        // Step 4: Verify interaction
        verify(mockApi).getData();
        
    }
}
