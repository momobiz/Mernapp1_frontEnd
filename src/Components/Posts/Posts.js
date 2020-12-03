import React from 'react';
import Post from '../Post/Post';
import {useSelector} from 'react-redux';



const Posts = () => {
    const posts=useSelector((state)=>state.postReducer); 
    
    console.log(posts);


    return (

        <div>
            Affichages des annonces 
            <Post/>
            
        </div>
    );
}

export default Posts;
