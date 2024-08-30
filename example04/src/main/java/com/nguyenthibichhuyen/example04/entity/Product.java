package com.nguyenthibichhuyen.example04.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String title;
    @Column(nullable = false)
    private double price;
    @Column(nullable = false)
    private String description;
    @Column(nullable = false, unique = true)
    private String photo;
    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;
}
