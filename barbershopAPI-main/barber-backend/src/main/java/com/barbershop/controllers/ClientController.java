package com.barbershop.controllers;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/clients")
class ClientController {
    private final List<String> clients = new ArrayList<>();

    @GetMapping
    public List<String> getClients() {
        return clients;
    }

    @PostMapping
    public void addClient(@RequestBody String name) {
        clients.add(name);
    }

    @DeleteMapping("/{name}")
    public void deleteClient(@PathVariable String name) {
        clients.remove(name);
    }
}