package ru.blog.models.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "blogArticles")
public class BlogArticle{
    private String id;
    private String author;
    private String title;
    private String category;
    private String content;
    private boolean archived;

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    public String getId() {return id;}
    public void setId(String id) {
        this.id = id;
    }

    @Column(nullable = false)
    public String getAuthor() {
        return author;
    }
    public void setAuthor(String author) {
        this.author = author;
    }

    @Column(nullable = false)
    public String getTitle(){
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }

    @Column(nullable = false)
    public String getCategory() {
        return category;
    }
    public void setCategory(String category) {
        this.category = category;
    }


    @Column(nullable = false, columnDefinition = "TEXT")
    public String getContent() {
        return content;
    }
    public void setContent(String content) {
        this.content = content;
    }

    @Column(nullable = false)
    public boolean isArchived() {
        return archived;
    }
    public void setArchived(boolean archived) {
        this.archived = archived;
    }
}
