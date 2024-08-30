package com.nguyenthibichhuyen.example04.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.nguyenthibichhuyen.example04.entity.Category;
import com.nguyenthibichhuyen.example04.service.CategoryService;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/categories")
@CrossOrigin(origins = "*")
public class CategoryController {
    private CategoryService CategoryService;

    // create
    @PostMapping
    public ResponseEntity<Category> createCategory(@RequestBody Category Category) {
        Category savedCategory = CategoryService.createCategory(Category);
        return new ResponseEntity<>(savedCategory, HttpStatus.CREATED);
    }

    // get Category /Categorys/1
    @GetMapping("{id}")
    public ResponseEntity<Category> getCategoryById(@PathVariable("id") Long CategoryId) {
        Category Category = CategoryService.getCategoryById(CategoryId);
        return new ResponseEntity<>(Category, HttpStatus.OK);
    }

    // get all
    @GetMapping
    public ResponseEntity<List<Category>> getAllCategories() {
        List<Category> Categorys = CategoryService.getAllCategories();
        return new ResponseEntity<>(Categorys, HttpStatus.OK);
    }

    // update
    @PutMapping("{id}")
    public ResponseEntity<Category> updateCategory(@PathVariable("id") Long CategoryId,
            @RequestBody Category Category) {
        Category.setId(CategoryId);
        Category updatedCategoryEntity = CategoryService.updateCategory(Category);
        return new ResponseEntity<>(updatedCategoryEntity, HttpStatus.OK);
    }

    //
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable("id") Long CategoryId) {
        CategoryService.deleteCategory(CategoryId);
        return new ResponseEntity<>("deleted!", HttpStatus.OK);
    }
}
