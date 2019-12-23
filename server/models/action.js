const mongoose = require('mongoose');


const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "A book must have a title."],
        minlength: [5, "This isnt a short story"],
    },
    published: {
        type: Date, 
        required: [true, "A book must have a publushed date."]
    }
}, {timestamps: true})

const AuthorSchema = new mongoose.Schema({
    name:{
        type: String, 
        required: [true, "An author must have a name."],
        minlength: [3, "Author name must be at least 3 characters long."] ,
    }, books: [BookSchema]
}, {timestamps: true})

mongoose.model("Book", BookSchema);
mongoose.model("Author", AuthorSchema);