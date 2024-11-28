document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript carregado e pronto!');
    fetchPosts();
});

function fetchPosts() {
    const API_URL = 'http://localhost:3000/posts'; // Certifique-se de que a porta corresponda ao seu servidor
    
    fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar os posts: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            displayPosts(data);
        })
        .catch(error => {
            console.error('Erro ao buscar os posts:', error);
        });
}

function displayPosts(posts) {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = ''; // Limpa qualquer conteúdo existente

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `;
        postsContainer.appendChild(postElement);
    });
}
