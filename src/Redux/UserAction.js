import axios from 'axios'; 
export const  getUsers=()=>(dispatch)=>{
    axios.get('http://localhost:5000/users/showusers')
    .then(res=>dispatch({ type:"FETCH_ALL_USERS", payload:res.data}))
    .catch(error=>console.log(error))
   
   
   }
   export const createUser=(newUser)=>async(dispatch)=>{
    await axios.post('/users/createuser', newUser)
     .then(res=>dispatch(getUsers()))
     .catch(error=>console.log(error))
 
 }