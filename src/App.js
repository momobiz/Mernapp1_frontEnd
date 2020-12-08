
import './App.css';
import Footer from './Components/Footer/Footer';
import FormPost from './Components/Form/FormPost';
import FormUser from './Components/Form/FormUser';
import Header from './Components/Header/Header';
import Posts from './Components/Posts/Posts';
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getPosts} from './Redux/PostAction';
import {getUsers} from './Redux/UserAction'; 
import axios from 'axios'; 
import {Route, Switch} from 'react-router-dom'; 
import PostDecription from './Components/PostDescription/PostDecription';






function App() {

  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getPosts());
    dispatch(getUsers());
    
  },[dispatch])
 

  const [motsCle, setMotsCle]=useState(''); 

  const users=useSelector(state=>state.userReducer);
  console.log('users=>', users);
 

  return (

    
    <div className="App">
 
     
      <Header setMotsCle={setMotsCle}/>
     

     
   
    <Switch>
      <Route exact path="/" render={()=><Posts motsCle={motsCle} />}/>
     <Route exact path="/:categorie" render={({match})=><Posts  motsCle={motsCle} match={match}/>}/>
      <Route path="/postDescription/:id" component={ PostDecription} />
     </Switch>

    <FormPost/>
    <Footer/>

   




   
   
   


    
      
   
    </div>
  );
}

export default App;
