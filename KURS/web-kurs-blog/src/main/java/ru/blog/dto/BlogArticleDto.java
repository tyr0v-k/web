package ru.blog.dto;

import jakarta.validation.constraints.NotEmpty;

public class BlogArticleDto {
    private String id;
    private String author;
    private String title;
    private String category;
    private String content;
    private boolean archived;

    public String getId(){
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }

    @NotEmpty(message = "Поле с именем автора не может быть пустым!")
    public String getAuthor() {
        return author;
    }
    public void setAuthor(String author) {
        this.author = author;
    }

    @NotEmpty(message = "Название статьи не может быть пустым!")
    public String getTitle(){
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }

    @NotEmpty(message = "Категория не может быть пустой!")
    public String getCategory() {
        return category;
    }
    public void setCategory(String category) {
        this.category = category;
    }

    @NotEmpty(message = "Статья должна иметь содержание!")
    public String getContent() {
        return content;
    }
    public void setContent(String content) {
        this.content = content;
    }

    @NotEmpty(message = "Статья должна иметь статус!")
    public boolean isArchived() {
        return archived;
    }
    public void setArchived(boolean archived) {
        this.archived = archived;
    }
}
