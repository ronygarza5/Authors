const authors = require('../controller/actions');

module.exports = (app) => {
    app.get('/api/all', (req,res) => authors.index(req,res))
    app.get('/api/author/:id', (req,res) => authors.single(req,res))
    app.post('/api/author/create',(req,res) => authors.create(req,res))
    app.put('/api/author/update/:id', (req,res) => authors.update(req,res))
    app.delete('/api/author/delete/:id', (req,res) => authors.delete(req,res))
    app.post('/api/book/create/:id', (req,res) => authors.createBook(req,res))
}