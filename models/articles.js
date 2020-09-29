//Require Mongoose
const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    price: { type: Number, min: 0 }
});

module.exports = mongoose.model('Articles', ArticleSchema);
