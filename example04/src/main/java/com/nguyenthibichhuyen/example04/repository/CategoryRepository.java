package com.nguyenthibichhuyen.example04.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.nguyenthibichhuyen.example04.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

}
