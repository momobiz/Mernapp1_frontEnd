
import axios from 'axios'; 


export const  getPosts=()=>(dispatch)=>{
 axios.get('/posts/showposts')
 .then(res=>dispatch({ type:"FETCH_ALL_POSTS", payload:res.data}))
 .catch(error=>console.log(error))


}
export const createPost=(newPost)=>async(dispatch)=>{
   await axios.post('/posts/createpost1', newPost)
    .then(res=>dispatch(getPosts()))
    .catch(error=>console.log(error))

}

