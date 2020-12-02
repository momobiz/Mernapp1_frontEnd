import {fetchPosts} from '../api/index'; 

export const getPosts=()=>async(dispatch)=>{

    try{
        const {data}=await fetchPosts();
        const action={ type:"ETCH_ALL_POSTS", payload:data}
                    
        dispatch(action);

    } catch(error){
        console.log(error.message);

    }
 
}