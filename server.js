const express = require('express');
const mongoose = require('mongoose');
const controller = require('./controllers');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));


// DB related operation
// db connection locally
const dbName = 'e-commerce';
let db;
mongoose.set('debug', true)
//Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1:27017/ecommerce';
mongoose.connect(mongoDB, { useNewUrlParser: true });
db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.set('useFindAndModify', false);

// Useful to restart with always 
// Orders.findByIdAndUpdate("5e4fdfbd21146d12587ffe03",  {$set: {status: 'pending'}}, {returnOriginal: false, upsert: true}, (err, doc) => console.log(doc));

// routes and api
app.get('/',function(req, res) {
    res.sendFile(path.join(__dirname+ '/index.html'))
  });
  
app.get('/users/:user_id', (req, res) => {
    if (!req.params.user_id) {
      return res.status(400).send('Missing parameter User')
    }
    console.log('getting user ' + req.params.user_id);
    controller.queryUser(req.params.user_id, user => res.json(user));
})

app.get('/users/:user_id/cart', (req, res) => {

    if (!req.params.user_id) {
      return res.status(400).send('Missing parameter User')
    }
    const useridCart = {
      user: req.params.user_id,
      status: 'pending',
    };
    controller.queryOrder(useridCart, order => res.json(order))
})  

app.get('/orders/:order_id', (req, res) => {
  if (!req.params.order_id) {
    return res.status(400).send('Missing parameter Order')
  }
  const order_id = req.params.order_id;
  controller.queryOrderById(order_id)
    .then(order => res.json(order))
    .catch(err => res.status(500).json(err))
});

app.get('/articles/:article_id', (req, res) => {
  if (!req.params.article_id) {
    return res.status(400).send('Missing parameter Article')
  }
  const article_id = req.params.article_id;
  controller.queryArticle(article_id, user => res.json(user));
});

app.put('/orders/:order_id', (req, res) => {
  if (!req.params.order_id) {
    return res.status(400).send('Missing parameter Order')
  }
  const order_id = req.params.order_id;
  controller.updateOrder({_id: order_id}, req.body)
    .then( order => res.json(order))
    .catch( err => res.status(500).json(err))
});

app.put('/article/:article_id', (req, res) => {
  if (!req.query.article_id) {
    return res.status(400).send('Missing parameter Article')
  }
  const article_id = req.params.article_id;
  const update = {
    $set: req.body,
  };
  controller.updateArticles({_id: article_id}, update)
    .then( article => res.json(article))
    .catch( err => res.status(500).json(err))
});

app.get('*', function(req, res){
  res.status(404).send('Content not found, so sorry about');
});

app.listen(process.env.PORT || 5000, function() {
  console.log('listening on 5000')
});

