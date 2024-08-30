package com.nguyenthibichhuyen.example01.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class HelloController {
    @GetMapping("/a")
    public String hello() {
        return "hello world";
    }

    @GetMapping("/path")
    public String getMethodName(@RequestParam String param) {
        return param;
    }
}
