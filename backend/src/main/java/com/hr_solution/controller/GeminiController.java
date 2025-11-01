package com.hr_solution.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.hr_solution.service.GeminiService;

import lombok.Getter;
import lombok.Setter;

@RestController
@RequestMapping("/api/gemini")
public class GeminiController {

    @Autowired
    private GeminiService geminiService;

    @PostMapping("/prompt")
    public ResponseEntity<PromptResponse> handlePrompt(@RequestBody PromptRequest request) {
        String result = geminiService.sendPrompt(request.getPrompt());
        PromptResponse resp = new PromptResponse(result);
        return ResponseEntity.ok(resp);
    }

    public static class PromptRequest {
        @Getter
        @Setter
        private String prompt;
    }

    public static class PromptResponse {
        @Getter
        @Setter
        private String response;

        public PromptResponse(String response) { this.response = response; }
    }
}
