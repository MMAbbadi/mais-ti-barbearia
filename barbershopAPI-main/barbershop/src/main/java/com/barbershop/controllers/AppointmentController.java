package com.barbershop.controllers;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/appointments")

class AppointmentController {
    private final List<String> appointments = new ArrayList<>();

    @GetMapping
    public List<String> getAppointments() {
        return appointments;
    }

    @PostMapping
    public void addAppointment(@RequestBody String appointment) {
        appointments.add(appointment);
    }

    @DeleteMapping("/{appointment}")
    public void deleteAppointment(@PathVariable String appointment) {
        appointments.remove(appointment);
    }
}
