
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





function App() {

  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getPosts());
  },[dispatch])

  return (

    <div className="App">
     
      <Header/>
      <FormPost/>
   
    {/*
  
    <Footer/>*/}
    <Posts/>
   
   
   
   
   


    
      
   
    </div>
  );
}

export default App;
