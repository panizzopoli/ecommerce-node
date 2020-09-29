import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cart from './component/Cart';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: "5e4fde5d21146d12587ffd98"
    }
  }
  
  // Retrieve single article information
  async getArticles(article_id) {
    let article = {};
    if (article_id) {
      try {
        const res = await fetch(`/articles/${article_id}`)
        article = await res.json();
        return article;  
      } catch (e) {
        console.error(e);
      }
    }
    return article;
  }
  // update order status
  async updateOrder(order) {
    let cart = order
    if (order && order._id) {
        // respect db schema of articles
        const updatedArticles = Array.isArray(order.articles) ? order.articles.map(item => { return {
          article_id: item.article_id,
          qty: item.qty,
        }}) : null;
        const update = {
          status: order.status,
          articles: updatedArticles, 
        };
        try {
          const res = await fetch(`/orders/${order._id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(update)
          });
          cart = await res.json();
          return cart;
        } catch (error) {
          console.log(error)
        }
    }
    return cart;
  }
  // get the order with status pending, basically the cart
  async getOrdersPending(user_id) {
  let cart = {};
  if (user_id) {
      try {
        const res = await fetch(`/users/${user_id}/cart`)
        return await res.json();
      } catch (error) {
        console.log(error)
      }
    }
    return cart;
  }
  // fetch user info and cart when mount
  async componentDidMount() {
    if (this.state.user_id) {
      const res = await fetch(`/users/${this.state.user_id}`);
      const userInfo = await res.json();
      let cart = {};
      // retrieve cart
      const orders = await this.getOrdersPending(this.state.user_id);
      if (orders.length > 0){
        cart = orders[0];
        // retrieve articles 
        if (cart.articles && Array.isArray(cart.articles)) {
          const promises = cart.articles.map(async (item) => {
              const article = await this.getArticles(item.article_id);
              return {
                ...item,
                ...article,
              };
          });
          const detailedArticles = await Promise.all(promises);
          cart.articles = detailedArticles;
        }

      }
      
      this.setState({
          userInfo,
          cart,
      });
    }
  }
  // remove article from the cart
  removeArticleFromCart = (article_id) => {
    if (this.state.cart && this.state.cart.articles && article_id) {
      const cart = this.state.cart;
      const articles = cart.articles;
      if ( Array.isArray(articles)){
        // non distruggo l'array di partenza
        const newArticles = articles.filter(item => item.article_id !== article_id);
        cart.articles = newArticles;
        this.setState({
          cart,
        });
      }
    }
  }
  // add more quantity of an article to the cart
  addOneArticleToCart = (article_id) => {
    if (this.state.cart && this.state.cart.articles && article_id) {
        let articles = this.state.cart.articles;
        const idx = articles.findIndex(item => item.article_id === article_id);
        if (idx !== -1 ) {
          const updateArticle = articles[idx];
          updateArticle.qty = articles[idx].qty + 1;
          articles[idx] = updateArticle;
          this.setState({
            cart: {
              ...this.state.cart,
              articles,
            }
          });
        }
    }
  }
  // checking out: send an update order to the server
  async checkOut() {
      if (this.state.cart) {
        const cart = this.state.cart
        const completedOrder = {
          ...cart,
          status: 'sold' 
        }
        const updatedCart = await this.updateOrder(completedOrder);
        this.setState({
          cart: updatedCart,
        });
      }
  }

  render = () => {
    const controlCart = () => {
      if (this.state.cart && this.state.cart.articles && (this.state.cart.articles.length > 0) && this.state.cart.status === 'pending'){
        return (
          <Cart 
            items={this.state.cart && this.state.cart.articles}
            addOneArticleToCart={this.addOneArticleToCart}
            removeArticleFromCart={this.removeArticleFromCart}
            checkOut={() => this.checkOut()}
          ></Cart>
        )
      }
      return (
        <h2>Your Cart is Empty</h2>
      )
    }
    return (
      <div className="App">
          <h1>
            Hello user {(this.state.userInfo && this.state.userInfo.name) || this.state.user_id}
          </h1>
          { controlCart() }
      </div>
    );
  }

}

export default App;
