import React from 'react';
import {ListGroup, Button} from 'react-bootstrap';

const MyPostsCard = ({post}) => {


    const style={
        display:"flex",
        alignItems: "center",
        justifyContent:"space-between"

    }
    return (
        
            <ListGroup.Item style={ style }>{post.title} 
            <div style={{ width:"12rem"}}>
            <Button variant="success">Editer </Button> 
            <Button variant="danger"  style={{marginLeft:"10px"}}>Supprimer </Button> 
            </div>
            </ListGroup.Item>
  

    );
}

export default MyPostsCard;
