const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const categoryDetails = require('./data/categoryDetails.json');

app.get('/', (req, res) => {
    res.send('Programming data is running')
});

app.get('/course-categories', (req, res) => {
    res.send(categories);
});

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = categoryDetails.find(n => n.id === id)
    res.send(selectedNews);
})

app.listen(port, () => {
    console.log('Programming api data running on', port);
})