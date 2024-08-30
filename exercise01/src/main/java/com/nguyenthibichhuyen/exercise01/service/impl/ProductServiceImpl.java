package com.nguyenthibichhuyen.exercise01.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import com.nguyenthibichhuyen.exercise01.service.ProductService;
import com.nguyenthibichhuyen.exercise01.entity.Product;
import com.nguyenthibichhuyen.exercise01.repository.ProductRepository;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepository;

    @Override
    public Product createProduct(Product product) {
        product.setProductUpdateDate(LocalDateTime.now());
        return productRepository.save(product);
    }

    @Override
    public Product getProduct(Long productId) {
        Optional<Product> optionalProduct = productRepository.findById(productId);
        return optionalProduct.orElse(null);
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product updateProduct(Product product) {
        Optional<Product> optionalProduct = productRepository.findById(product.getProductID());
        if (optionalProduct.isPresent()) {
            Product existingProduct = optionalProduct.get();
            existingProduct.setProductSKU(product.getProductSKU());
            existingProduct.setProductName(product.getProductName());
            existingProduct.setProductPrice(product.getProductPrice());
            existingProduct.setProductWeight(product.getProductWeight());
            existingProduct.setProductCartDesc(product.getProductCartDesc());
            existingProduct.setProductShortDesc(product.getProductShortDesc());
            existingProduct.setProductLongDesc(product.getProductLongDesc());
            existingProduct.setProductImage(product.getProductImage());
            existingProduct.setProductUpdateDate(LocalDateTime.now());
            existingProduct.setProductStock(product.getProductStock());
            existingProduct.setProductLive(product.isProductLive());
            existingProduct.setProductUnlimited(product.isProductUnlimited());
            existingProduct.setProductLocation(product.getProductLocation());
            return productRepository.save(existingProduct);
        } else {
            return null;
        }
    }

    @Override
    public void deleteProduct(Long productId) {
        productRepository.deleteById(productId);
    }
}
