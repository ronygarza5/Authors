const mongoose = require('mongoose');
require('../models/action');
const Author = mongoose.model('Author');
Book = mongoose.model("Book")

module.exports = {
    index: (req,res) => {
        Author.find()
        .then(authors => {
            res.json({results : authors})
        })
        .catch(err => {
            res.json({errors : err.errors})
        })
    },
    single: (req,res) => {
        Author.findOne({_id: req.params.id})
            .then(authors => {
                res.json({results: authors})
            })
            .catch(err => {
                res.json({errors : err.errors})
            })
    },
    create: (req,res) => {
        const author = new Author();
        author.name = req.body.name;
        author.save()
        .then(newAuthor => {
            res.json({results : newAuthor})
        })
        .catch(err => {
            console.log(err)
            res.json({ errors : err.errors })
        })
    },
    update: (req,res) => {
        Author.findByIdAndUpdate(req.params.id, req.body)
        .then(author => {
            res.json({results : author})
        })
        .catch(err => {
            res.json({errors : err.errors})
        })
    },
    delete: (req, res) => {
        console.log(req.params.id)
        Author.remove({_id: req.params.id})
            .then(authors => {
                res.json({results : authors})
            })
            .catch(err => {
                res.json({errors : err.errors })
            })
    },
    createBook: (req,res) => {
        Book.create(req.body)
            .then(book => {
                Author.findOneAndUpdate({_id: req.params.id}, {$push:{books: book}})
                    .then(author => {
                        res.json({results: author})
                    })
                    .catch(err => {
                        res.json({errors: err.errors})
                    })
            })
            .catch(err => {
                res.json({errors:err.errors})
            })
    }
}