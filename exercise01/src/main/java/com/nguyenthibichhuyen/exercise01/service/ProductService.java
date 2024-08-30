package com.nguyenthibichhuyen.exercise01.service;

import java.util.List;
import com.nguyenthibichhuyen.exercise01.entity.Product;

public interface ProductService {
    Product createProduct(Product product);

    Product getProduct(Long productId);

    List<Product> getAllProducts();

    Product updateProduct(Product product);

    void deleteProduct(Long productId);
}
