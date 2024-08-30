package com.nguyenthibichhuyen.exercise01.entity;

import java.time.LocalDateTime;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "products")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productID; // Sửa kiểu dữ liệu thành Long

    @Column(name = "productSKU", length = 50, nullable = false)
    private String productSKU;

    @Column(name = "productName", length = 100, nullable = false)
    private String productName;

    @Column(name = "productPrice", nullable = false)
    private float productPrice;

    @Column(name = "productWeight")
    private float productWeight;

    @Column(name = "productCartDesc", length = 250)
    private String productCartDesc;

    @Column(name = "productShortDesc", length = 1000)
    private String productShortDesc;

    @Column(name = "productLongDesc", columnDefinition = "TEXT")
    private String productLongDesc;

    @Column(name = "productImage", length = 100)
    private String productImage;

    @Column(name = "productUpdateDate")
    private LocalDateTime productUpdateDate;

    @Column(name = "productStock")
    private float productStock;

    @Column(name = "productLive", nullable = false)
    private boolean productLive;

    @Column(name = "productUnlimited", nullable = false)
    private boolean productUnlimited;

    @Column(name = "productLocation", length = 250)
    private String productLocation;
}
