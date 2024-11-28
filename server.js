const express = require('express');
const app = express();
const port = 8000;

app.use(express.static('public'));

// Dados simulados dos posts
const posts = [
    { title: 'Primeiro Post', body: 'Conteúdo do primeiro post.' },
    { title: 'Segundo Post', body: 'Conteúdo do segundo post.' },
    { title: 'Terceiro Post', body: 'Conteúdo do terceiro post.' }
];

// Rota para retornar os posts
app.get('/posts', (req, res) => {
    res.json(posts);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
