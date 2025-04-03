package org.aadi.resume.personify;

import org.aadi.resume.personify.service.ResumeService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.IOException;

@SpringBootTest
class ResumePersonifyAiJavaSpringbootBackendApplicationTests {

	@Autowired
	private ResumeService resumeService;

	@Test
	void contextLoads() throws IOException {

		resumeService.generateResumeResponse("I am Aaditya Bachchu Chatterjee with 2 years of Java full stack experience.");
	}

}
