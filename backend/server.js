const express = require('express');

const app = express();

// Middlewares
app.use(express.static('../frontend'))
app.use(express.json());

// First route
app.get('/', (req, res) => {
    res.send('Welcome to NoteFlow API!');
});

app.get('/hello/:name', (req, res) => {
    const username = req.params.name;

    res.send(`Hello, ${username}!`);
});

app.get('/search', (req, res) => {
    const keyword = req.query.keyword;

    res.send(`You searched for: ${keyword}`);
});

app.post('/notes', (req, res) => {
    const { title, content } = req.body;

    res.json({
        message: 'Note received successfully',
        note: {
            title: title,
            content: content
        }
    });
});




// Start server
app.listen(3000, () => {
    console.log('Server running on port http://localhost:3000');
});