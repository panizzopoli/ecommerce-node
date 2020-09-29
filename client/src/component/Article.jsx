import React from 'react';
import { Item, Image, Icon,  Button, Segment } from 'semantic-ui-react'

const Article = (props) => (
    <Item>
        <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
        <Item.Content>
            <Item.Header as='a' >{props.name}</Item.Header>
            <Item.Meta>
                Availbility: {props.available_quantity}
            </Item.Meta>
            <Item.Description>
                <p>Price: {props.price}$</p>
                <p>Quantity: {props.qty}</p>
            </Item.Description>
        </Item.Content>
        <Item.Extra>
            <Button icon floated='right' onClick={()=> {props.addOneArticle()}}>
                <Icon name='plus square' /> 
            </Button>
            <Button icon floated='right' onClick ={() => { props.removeArticle()}}>
                <Icon name='remove circle' />
            </Button>
        </Item.Extra>
    </Item>

);

export default Article;
