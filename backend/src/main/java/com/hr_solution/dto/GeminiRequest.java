package com.hr_solution.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
public class GeminiRequest {

    private List<Content> contents;

    // static factory helper
    public static GeminiRequest fromPrompt(String prompt) {
        Part part = new Part(prompt);
        Content content = new Content("user", List.of(part));
        GeminiRequest req = new GeminiRequest();
        req.setContents(List.of(content));
        return req;
    }

    @NoArgsConstructor
    @AllArgsConstructor
    @Getter
    @Setter
    public static class Content {
        private String role;
        private List<Part> parts;
    }

    @NoArgsConstructor
    @AllArgsConstructor
    @Getter
    @Setter
    public static class Part {
        private String text;
    }
}
