
import './App.css';
import Footer from './Components/Footer/Footer';
import FormPost from './Components/Form/FormPost';
import FormUser from './Components/Form/FormUser';
import Header from './Components/Header/Header';
import Posts from './Components/Posts/Posts';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getPosts} from './Redux/PostAction';

function App() {
  const posts=useSelector((state)=>state.postReducer); 

  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getPosts());
  },[dispatch])

  console.log(posts)



  return (

    <div className="App">
     
      <Header/>
      <FormUser/>
      <FormPost/>


    
      <Posts/>
      <Footer/>
   
    </div>
  );
}

export default App;
