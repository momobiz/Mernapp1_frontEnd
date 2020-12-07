
import './App.css';
import Footer from './Components/Footer/Footer';
import FormPost from './Components/Form/FormPost';
import FormUser from './Components/Form/FormUser';
import Header from './Components/Header/Header';
import Posts from './Components/Posts/Posts';
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getPosts} from './Redux/PostAction';
import axios from 'axios'; 
import {Route, Switch} from 'react-router-dom'; 






function App() {

  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getPosts());
  },[dispatch])

  const [motsCle, setMotsCle]=useState(''); 
 

  return (

    
    <div className="App">
 
     
      <Header setMotsCle={setMotsCle}/>

     
   
    <Switch>
      <Route exact path="/" render={()=><Posts motsCle={motsCle} />}/>
     <Route exact path="/:categorie" render={({match})=><Posts  motsCle={motsCle} match={match}/>}/>
   
     </Switch>

    <FormPost/>
    <Footer/>

   




   
   
   


    
      
   
    </div>
  );
}

export default App;
