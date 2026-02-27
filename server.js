const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Express CI/CD Deployed Successfully!');
});

app.listen(3000, '0.0.0.0', () => {
    console.log('Server running on port 3000');
});