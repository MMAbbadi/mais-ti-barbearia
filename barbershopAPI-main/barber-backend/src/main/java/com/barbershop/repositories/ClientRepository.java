package com.barbershop.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

interface ClientRepository extends JpaRepository<String, Long> {
}