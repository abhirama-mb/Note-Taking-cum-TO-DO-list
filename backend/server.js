const express = require('express');

const app = express();

// First route
app.get('/', (req, res) => {
    res.send('Welcome to NoteFlow API!');
});

// Start server
app.listen(3000, () => {
    console.log('Server running on port http://localhost:3000');
});