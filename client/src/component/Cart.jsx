import React from 'react';
import { Card, Item, Button, Container, Divider } from 'semantic-ui-react';
import Article from './Article';

const calculateAmount = items => {
    let sum = 0;
    if (Array.isArray(items)) {
        sum = items.reduce((accumulator, currentValue) => {
            const price = currentValue.price || 0;
            const qty = currentValue.qty || 0;
            return accumulator + price*qty;
          }, 0);
    }
    return sum;
}

const Cart = (props) => {
    const amount = props.items ? calculateAmount(props.items) : 0;
    const Articles = Array.isArray(props.items) ? 
        props.items.map(item => (
            <Article 
                name={item.name}
                available_quantity={item.available_quantity}
                price={item.price}
                qty={item.qty}
                removeArticle={() => {
                    props.removeArticleFromCart(item.article_id);
                }}
                addOneArticle={() => {
                    props.addOneArticleToCart(item.article_id);
                }}
            ></Article>
        )) : 
        [];
    return (
        <div>
            <Container>
                <Item.Group divided>
                    {Articles}
                </Item.Group>
                
            </Container>
            <Divider></Divider>
            <Container>
                <p>Total Amount is $ {amount}</p>
                <Button onClick={()=> props.checkOut()}>Checkout</Button>
            </Container>
        </div>
    );
};

export default Cart;