package ru.blog.services;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import ru.blog.dto.BlogArticleDto;
import ru.blog.models.entities.BlogArticle;
import ru.blog.repositories.BlogRepository;

import java.util.List;

@Service
public class BlogService {

    private final BlogRepository repository;
    private final ModelMapper mapper;

    public BlogService(BlogRepository repository, ModelMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    public BlogArticleDto createArticle(BlogArticleDto dto) {
        BlogArticle blogArticle = repository.saveAndFlush(mapper.map(dto, BlogArticle.class));
        return mapper.map(blogArticle, BlogArticleDto.class);
    }

    public void deleteArticle(String id) {
        repository.deleteById(id);
    }

    public void archiveArticle(String id) {
        BlogArticle blogArticle = repository.findById(id).orElseThrow();
        blogArticle.setArchived(true);
        repository.saveAndFlush(blogArticle);
    }

    public List<BlogArticleDto> getAll() {
        return repository.findAllByArchivedFalse()
                .stream()
                .map(blogArticle -> mapper.map(blogArticle, BlogArticleDto.class))
                .toList();
    }

    public List<BlogArticleDto> getArchived() {
        return repository.findAllByArchivedTrue()
                .stream()
                .map(blogArticle -> mapper.map(blogArticle, BlogArticleDto.class))
                .toList();
    }
}
