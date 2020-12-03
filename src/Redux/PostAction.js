
import axios from 'axios'; 


export const  getPosts=()=>(dispatch)=>{
 axios.get('http://localhost:5000/posts/showposts')
 .then(res=>dispatch({ type:"FETCH_ALL_POSTS", payload:res.data}))
 .catch(error=>console.log(error))


}
export const createPost=(newPost)=>async(dispatch)=>{
   await axios.post('/posts/createpost1', newPost)
    .then(res=>dispatch(getPosts()))
    .catch(error=>console.log(error))

}
/*export const insertPost=(post)=>async(dispatch)=>{

    try{
        const {data}=await createPost(post);
        dispatch({
            type:" CREATE_POST",
            payload:data
        })



    }catch(error){
        console.log(error.message);
    }
}*/