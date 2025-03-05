package com.barbershop.controllers;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/barbers")
class BarberController {
    private final List<String> barbers = new ArrayList<>();

    @GetMapping
    public List<String> getBarbers() {
        return barbers;
    }

    @PostMapping
    public void addBarber(@RequestBody String name) {
        barbers.add(name);
    }

    @DeleteMapping("/{name}")
    public void deleteBarber(@PathVariable String name) {
        barbers.remove(name);
    }
}