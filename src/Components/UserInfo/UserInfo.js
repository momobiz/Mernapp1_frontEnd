import React,{useState} from 'react';
import {Card, ListGroup} from 'react-bootstrap';
import {useSelector} from 'react-redux';


import './userInfo.css'; 

const UserInfo = () => {
  

    const posts=useSelector(state=>state.postReducer); 
    const infoUser=useSelector(state=>state.authReducer);

   
    
    
    //const {_id, userName, phone, city, email, avatar, professionnal}=infoUser.user;
   


    return (
        <div>
       <Card style={{ width: '50rem' }} className="userDescription">


    
<Card.Title className="postHeadDesc">
<Card.Img variant="top" src="#" className="imageDescription"/>
<ListGroup variant="flush" className="listUserDescription">
   <ListGroup.Item> <span className="userTitle"> UserName : </span> {/*userName*/} </ListGroup.Item>
   <ListGroup.Item> <span className="userTitle"> Email : </span>{/*email*/}  </ListGroup.Item>
   <ListGroup.Item> <span className="userTitle"> Phone : </span> {/*phone*/} </ListGroup.Item>
   <ListGroup.Item> <span className="userTitle"> City : </span> {/*city*/}  </ListGroup.Item>
   <ListGroup.Item> <span className="userTitle"> Professionnel : </span> {/*professionnal?'oui':'non'*/} </ListGroup.Item>
   <ListGroup.Item> <span className="userTitle"> Nombre d'annonces : </span>  </ListGroup.Item>
</ListGroup>
</Card.Title>
<Card.Body>

</Card.Body>
</Card>
            
        </div>
    );
}

export default UserInfo;

