package com.nguyenthibichhuyen.example04.service.impl;

import java.util.Optional;

import com.nguyenthibichhuyen.example04.entity.Category;
import com.nguyenthibichhuyen.example04.repository.CategoryRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import com.nguyenthibichhuyen.example04.service.CategoryService;
import java.util.List;

@Service
@AllArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private CategoryRepository categoryRepository;

    @Override
    public Category createCategory(Category category) {
        return categoryRepository.save(category);
    }

    @Override
    public Category getCategoryById(Long categoryId) {
        Optional<Category> optionalCategory = categoryRepository.findById(categoryId);
        return optionalCategory.get();
    }

    @Override
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    @Override
    public Category updateCategory(Category category) {
        Category existingCategory = categoryRepository.findById(category.getId()).get();
        existingCategory.setTitle(category.getTitle());
        existingCategory.setPrice(category.getPrice());
        existingCategory.setDescription(category.getDescription());
        existingCategory.setPhoto(category.getPhoto());
        existingCategory.setProducts(category.getProducts());
        Category updateCategory = categoryRepository.save(existingCategory);
        return updateCategory;
    }

    @Override
    public void deleteCategory(Long categoryId) {
        categoryRepository.deleteById(categoryId);
    }
}
