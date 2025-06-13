package ru.blog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.blog.models.BlogArticle;

import java.util.List;

@Repository
public interface BlogRepository extends JpaRepository<BlogArticle, String>{
    List<BlogArticle> findAllByArchivedTrue();
    List<BlogArticle> findAllByArchivedFalse();
}
