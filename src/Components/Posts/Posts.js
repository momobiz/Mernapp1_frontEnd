import React from 'react';
import Post from '../Post/Post';
import {useSelector} from 'react-redux';



const Posts = () => {
    const posts=useSelector((state)=>state.postReducer); 
    
    console.log(posts);


    return (

        <div>
            Affichages des annonces 
           { posts.map((post, key)=><Post post={post} key={key}/>)

           }
                
            
        </div>
    );
}

export default Posts;
