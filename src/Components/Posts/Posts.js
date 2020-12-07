import React, {useState} from 'react';
import Post from '../Post/Post';
import {useSelector} from 'react-redux';
import "./posts.css";



const Posts = ({motsCle, match}) => {
    const postsList=useSelector((state)=>state.postReducer);
 match? console.log(match.params.categorie): console.log('non')


    return (

        <div className="postsContainer">
           
           { postsList.filter(post=>(post.title.toLowerCase().includes(motsCle.toLowerCase()))).map((post, key)=><Post post={post} key={key}/>)



    }
                
            
        </div>
    );
}

export default Posts;
