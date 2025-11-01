package com.hr_solution.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.hr_solution.dto.GeminiRequest;
import com.hr_solution.dto.GeminiResponse;

@Service
public class GeminiService {

    @Value("${gemini.api.key}")
    private String apiKey;

    @Value("${gemini.api.url}")
    private String apiUrl;

    private final RestTemplate restTemplate = new RestTemplate();

    public String sendPrompt(String prompt) {
        // build request
        GeminiRequest request = GeminiRequest.fromPrompt(prompt);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("x-goog-api-key", apiKey);

        HttpEntity<GeminiRequest> entity = new HttpEntity<>(request, headers);

        GeminiResponse response = restTemplate.postForObject(apiUrl, entity, GeminiResponse.class);

        if (response != null
                && response.getCandidates() != null
                && !response.getCandidates().isEmpty()
                && response.getCandidates().get(0).getContent() != null
                && !response.getCandidates().get(0).getContent().getParts().isEmpty()) {

            return response.getCandidates()
                           .get(0)
                           .getContent()
                           .getParts()
                           .get(0)
                           .getText();
        }

        throw new RuntimeException("Empty or invalid response from Gemini API");
    }
}
