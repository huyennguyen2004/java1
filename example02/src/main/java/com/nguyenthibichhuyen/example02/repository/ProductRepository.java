package com.nguyenthibichhuyen.example02.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.nguyenthibichhuyen.example02.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
}