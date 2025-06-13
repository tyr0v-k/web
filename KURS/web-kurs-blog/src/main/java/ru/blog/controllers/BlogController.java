package ru.blog.controllers;

import org.springframework.web.bind.annotation.*;
import ru.blog.dto.BlogArticleDto;
import ru.blog.services.BlogService;

import java.util.List;

@RestController
@RequestMapping("/blog")
public class BlogController {

    private final BlogService service;

    public BlogController(BlogService service) {
        this.service = service;
    }

    @PostMapping
    public BlogArticleDto createArticle(@RequestBody BlogArticleDto dto) {
        return service.createArticle(dto);
    }

    @DeleteMapping("/{id}")
    public void deleteArticle(@PathVariable String id) {
        service.deleteArticle(id);
    }

    @PutMapping("/archive/{id}")
    public void archiveArticle(@PathVariable String id) {
        service.archiveArticle(id);
    }

    @GetMapping
    public List<BlogArticleDto> getAll() {
        return service.getAll();
    }

    @GetMapping("/archived")
    public List<BlogArticleDto> getArchived() {
        return service.getArchived();
    }
}
