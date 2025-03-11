package com.barbershop.repositories;

import com.barbershop.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

// Database Access
public interface UserRepository extends JpaRepository<User, Long> {}
