
import './App.css';
import Footer from './Components/Footer/Footer';
import FormPost from './Components/Form/FormPost';
import FormUser from './Components/Form/FormUser';
import Header from './Components/Header/Header';
import Posts from './Components/Posts/Posts';
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getPosts} from './Redux/PostAction';
import {getUsers, loadUser} from './Redux/UserAction'; 
import axios from 'axios'; 
import {Route, Switch} from 'react-router-dom'; 
import PostDecription from './Components/PostDescription/PostDecription';
import setAuthToken from './Utils/setAuthToken'; 
import FormLogin from './Components/Form/FormLogin';

if(localStorage.token) setAuthToken(localStorage.token); 


function App() {

  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getPosts());
    dispatch(getUsers());
    dispatch(loadUser()); 
    
  
    
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
      <Route exact path="/user/inscription" component={FormUser}/>
      <Route exact path="/user/connexion" component={FormLogin}/>
  </Switch>

    {/*<FormPost/>*/}
    <Footer/>

   




   
   
   


    
      
   
    </div>
  );
}

export default App;
