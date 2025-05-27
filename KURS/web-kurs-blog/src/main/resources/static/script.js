const API_URL = 'http://localhost:8080/blog';
const form = document.getElementById('articleForm');
const archive = document.getElementById('archive');
const articles = document.getElementById('articles');

window.addEventListener('DOMContentLoaded', () => {
    loadBlogArticles();
    loadArchive();
});

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const newBlogArticle = {
        author: document.getElementById('author').value,
        title: document.getElementById('title').value,
        category: document.getElementById('category').value,
        content: document.getElementById('content').value,
        archived: false
    };

    fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newBlogArticle)
    }).then(res => res.json()).then(blogArticle => {
        addArticleToPage(blogArticle);
        form.reset();}).catch(err => console.error('Ошибка создания статьи:', err));
});

function loadArchive() {
    fetch(API_URL + '/archived').then(res => res.json()).then(data => {
        archive.innerHTML = '';
        data.forEach(blogArticle => {
            const li = document.createElement('li');
            li.textContent = blogArticle.title;
            archive.appendChild(li);});}).catch(err => console.error('Ошибка загрузки архива:', err));
}

function loadBlogArticles() {
    fetch(API_URL).then(res => res.json()).then(data => {
        articles.innerHTML = '';
        data.forEach(addArticleToPage);}).catch(err => console.error('Ошибка загрузки:', err));
}

function addArticleToPage(blogArticle) {
    const article = document.createElement('article');

    const h1 = document.createElement('h1');
    h1.textContent = blogArticle.title;

    const p1 = document.createElement('p');
    p1.innerHTML = 'Категория: <strong>' + blogArticle.category + '</strong>';

    const p2 = document.createElement('p');
    p2.innerHTML = 'Автор: <strong>' + blogArticle.author + '</strong>';

    const p3 = document.createElement('p');
    p3.innerHTML = blogArticle.content;

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Удалить';
    delBtn.className = 'delete-btn';
    delBtn.addEventListener('click', () => {
        fetch(`${API_URL}/${blogArticle.id}`, {
        method: 'DELETE'
        }).then(() => article.remove()).catch(err => console.error('Ошибка удаления:', err));});

    const archiveBtn = document.createElement('button');
    archiveBtn.textContent = 'Архив';
    archiveBtn.className = 'archive-btn';
    archiveBtn.addEventListener('click', () => { fetch(`${API_URL}/archive/${blogArticle.id}`, {method: 'PUT'}).then(() => {
        const li = document.createElement('li');
        li.textContent = blogArticle.title;
        archive.appendChild(li);
        article.remove();
    }).catch(err => console.error('Ошибка архивирования:', err));});

    const article1 = document.createElement('article');
    article1.className = 'buttons-article';
    article1.append(delBtn);
    article1.append(archiveBtn);

    article.append(h1, p1, p2, p3, article1);
    articles.appendChild(article);
}