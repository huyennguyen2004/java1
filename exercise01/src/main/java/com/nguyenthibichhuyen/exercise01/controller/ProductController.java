package com.nguyenthibichhuyen.exercise01.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.nguyenthibichhuyen.exercise01.entity.Product;
import com.nguyenthibichhuyen.exercise01.repository.ProductRepository;

@RestController
@RequestMapping("api/products")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        return productRepository.findById(id)
                .map(product -> ResponseEntity.ok().body(product))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public Product createProduct(@RequestBody Product product) {
        return productRepository.save(product);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product productDetails) {
        return productRepository.findById(id)
                .map(product -> {
                    product.setProductSKU(productDetails.getProductSKU());
                    product.setProductName(productDetails.getProductName());
                    product.setProductPrice(productDetails.getProductPrice());
                    product.setProductWeight(productDetails.getProductWeight());
                    product.setProductCartDesc(productDetails.getProductCartDesc());
                    product.setProductShortDesc(productDetails.getProductShortDesc());
                    product.setProductLongDesc(productDetails.getProductLongDesc());
                    product.setProductImage(productDetails.getProductImage());
                    product.setProductUpdateDate(productDetails.getProductUpdateDate());
                    product.setProductStock(productDetails.getProductStock());
                    product.setProductLive(productDetails.isProductLive());
                    product.setProductUnlimited(productDetails.isProductUnlimited());
                    product.setProductLocation(productDetails.getProductLocation());
                    Product updatedProduct = productRepository.save(product);
                    return ResponseEntity.ok(updatedProduct);
                })
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        return productRepository.findById(id)
                .map(product -> {
                    productRepository.delete(product);
                    return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
                })
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
