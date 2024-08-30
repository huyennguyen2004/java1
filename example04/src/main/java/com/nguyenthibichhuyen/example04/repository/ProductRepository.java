package com.nguyenthibichhuyen.example04.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.nguyenthibichhuyen.example04.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
