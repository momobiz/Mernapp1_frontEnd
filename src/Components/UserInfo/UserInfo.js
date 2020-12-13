import React,{useState, useEffect} from 'react';
import {Card, ListGroup, Button} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';

import {Link} from 'react-router-dom';



import './userInfo.css'; 

const UserInfo = ({userInfo}) => {


 const {_id, userName, phone, city, email, avatar, professionnal}=userInfo.profile;
   


    return (
        <div>
            
          
      <Card style={{ width: '40rem', marginLeft:"20px" }} className="userDescription">

            <Card.Title className="postHeadDesc">
            <Card.Img variant="top" src={avatar} className="imageDescription"/>
            <ListGroup variant="flush" className="listUserDescription">
            <ListGroup.Item> <span className="userTitle"> UserName : </span> {userName} </ListGroup.Item>
            <ListGroup.Item> <span className="userTitle"> Email : </span>{email}  </ListGroup.Item>
            <ListGroup.Item> <span className="userTitle"> Phone : </span> {phone} </ListGroup.Item>
            <ListGroup.Item> <span className="userTitle"> City : </span> {city}  </ListGroup.Item>
            <ListGroup.Item> <span className="userTitle"> Professionnel : </span> {professionnal?'oui':'non'} </ListGroup.Item>
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

