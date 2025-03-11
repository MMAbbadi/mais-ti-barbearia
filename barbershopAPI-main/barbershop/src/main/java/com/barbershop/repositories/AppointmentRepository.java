package com.barbershop.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

interface AppointmentRepository extends JpaRepository<String, Long> {
}