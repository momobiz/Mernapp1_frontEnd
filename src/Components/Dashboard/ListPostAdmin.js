import React from 'react';
import {ListGroup, Button} from 'react-bootstrap';

const ListPostAdmin = ({post}) => {
    const publieDepuis=Math.floor((Date.now()-Date.parse(post.publishedAt))/(1000*24*60*60));
    const dureeDevie=3;
    const expirationDans=dureeDevie-publieDepuis; 

    const style={
        display:"flex",
        justifyContent:"space-between"


    }
    return (
        
    <ListGroup.Item style={style}> 
    <span style={{fontWeight:"bold"}}>{post.title}</span> 
    <span>
     <span style={{marginRight:"10px"}}>{ expirationDans<=0? (<span style={{color:"#f60002", fontWeight:"bold"}}> Annonce expirée </span>):(<span> Expire dans {expirationDans} jours </span>)}</span>
     <Button variant="success" >Supprimer</Button>
     </span>
     </ListGroup.Item>
        
    );
}

export default ListPostAdmin;
