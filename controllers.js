//Require Mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// require models
const Articles = require('./models/articles');
const Orders = require('./models/orders');
const Users = require('./models/user');

module.exports.handleError = err => console.log(err);

// use to check if callback is a function 
const isFunction = callback => {

};

module.exports.queryUser = (user_id, callback) => {
    Users.findById(user_id,
        function (err, user) {
            if (err) {
                return handleError(err);
            }
            callback(user);
        }  
    );
};


module.exports.queryOrder = (query, callback) => {
    Orders.find(query, function(err, orders)
    {
        if (err) {
            return handleError(err);
        }
        callback(orders);
    });
};

module.exports.queryOrderById = (order_id) => Orders.findById(order_id);

module.exports.queryArticle = (article_id, callback) => {
    Articles.findById(article_id, 
    function (err, user) {
        if (err) {
            return handleError(err);
        }
        callback(user);
    });
};

module.exports.updateOrder = (id, update) => {
    console.log(update);
    return Orders.findByIdAndUpdate(id, {$set: update}, {returnOriginal: false, upsert: true}).exec();
}  
module.exports.updateArticles = (query, update) => Articles.findOneAndUpdate(query, update, {new: true}).exec();  


/*
// ARTICLES
{
    "_id" : ObjectId("5e4fdcd52db1b299093e2e45"),
    "name" : "keyboard",
    "price" : 10,
    "available_quantity" : 2
}
*/


// ORDERS
/*
{
    "_id" : ObjectId("5e4fdfbd21146d12587ffe03"),
    "user" : ObjectId("5e4fde5d21146d12587ffd98"),
    "articles" : [
            {
                    "article_id" : ObjectId("5e4fdc962db1b299093e2e27"),
                    "qty" : 1
            },
            {
                    "article_id" : ObjectId("5e4fdcd52db1b299093e2e45"),
                    "qty" : 1
            },
            {
                    "article_id" : ObjectId("5e4fdcff2db1b299093e2e54"),
                    "qty" : 1
            }
    ],
    "status" : "pending"
}*/

// USERS
 
/*
{ "_id" : ObjectId("5e4fde5d21146d12587ffd98"), "name" : "It's a me" }
*/
