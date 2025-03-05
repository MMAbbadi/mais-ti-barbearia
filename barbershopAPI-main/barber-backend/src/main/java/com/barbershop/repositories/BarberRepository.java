package com.barbershop.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

interface BarberRepository extends JpaRepository<String, Long> {
}