function showDetails(articleId) {
    const article = document.getElementById(articleId);
    alert(`You are now reading: ${article.querySelector('h2').innerText}`);
}
