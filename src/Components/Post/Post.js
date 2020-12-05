import React from 'react';
import {Card, Button} from "react-bootstrap";
import "./post.css";

const Post = ({post}) => {


    return (

        <Card style={{ width: '12rem' }} className="post">
            <Card.Img variant="top" src={'http://localhost:5000/'+post.photo}/>
            <Card.Body>
            <Card.Title className="carteTitre">Card Title:  </Card.Title>
            <Card.Text className="carteTexte">
                price <span className="professionnel"> Pro</span>
            </Card.Text>
            
            </Card.Body>
      </Card>
    );
}

export default Post;
