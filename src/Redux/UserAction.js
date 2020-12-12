import axios from 'axios'; 
import {REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT} from './ActionTypes';
import setAuthToken from '../Utils/setAuthToken';



export const logout=()=>(dispatch)=>{
    dispatch({
        type:LOGOUT
    })

}

/******************************************************************** */
export const loginUser=(user)=>async(dispatch)=>{
    const config={
        headers:{
            'Content-Type':"application/json"
        }
    }
   
    await axios.post('http://localhost:5000/users/login', user, config)
    .then(res=>{const token=res.data
      
               localStorage.setItem('token', token)
              
             dispatch({type:LOGIN_SUCCESS, payload:res.data})
             dispatch(loadUser)
            
            
            })
             
    .catch(error=>{console.log(error);
        dispatch({type:LOGIN_FAIL})})



}



/************************************************************** */
export const loadUser=()=>async(dispatch)=>{
    if(localStorage.token) {setAuthToken(localStorage.token); 
    console.log('token dans l entete')}
    try{
        const response=await axios.get('http://localhost:5000/users/user');
        dispatch({
            type:USER_LOADED, 
            payload:response.data
        })

    }catch(error){
        dispatch({
            type:AUTH_ERROR
        })

    }

}
/**************************************************** */

export const  getUsers=()=>(dispatch)=>{
    axios.get('http://localhost:5000/users/showusers')
    .then(res=>dispatch({ type:"FETCH_ALL_USERS", payload:res.data}))
    .catch(error=>console.log(error))
   
   
   }
   export const createUser=(newUser)=>async(dispatch)=>{
    await axios.post('http://localhost:5000/users/createuser', newUser)
     .then(res=>dispatch(getUsers()))
     .catch(error=>console.log(error))
 
 }
 /********************************************** */
 export const registerUser=(newUser)=>async(dispatch)=>{
     const config={
         headers:{
             'Content-Type':"application/json"
         }
     }
    
     await axios.post('http://localhost:5000/users/createuser', newUser, config)
     .then(res=>{const token=res.data
       
                localStorage.setItem('token', token)
               
              dispatch({type:REGISTER_SUCCESS, payload:res.data})
              dispatch(loadUser)
            
            })
              
     .catch(error=>{console.log(error);
         dispatch({type:REGISTER_FAIL})})
 


 }
 /********************************************************** */

