//Require Mongoose
const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    _id: Schema.Types.ObjectId,
    user: { type: Schema.Types.ObjectId, ref: 'User'},
    articles: [ {
            article_id: Schema.Types.ObjectId,
            qty: { type: Number, min: 0 }
        }],
    status: String
});

module.exports = mongoose.model('Order', OrderSchema);