import React, {useEffect} from 'react';
import UserInfo from '../UserInfo/UserInfo';
import {useSelector, useDispatch} from 'react-redux'; 
import { getCurrentProfile, loadUser } from '../../Redux/UserAction';




const UserDashboard = () => {
    const dispatch=useDispatch();
   // const profile=useSelector(state=>state.profileReducer);
    //const auth=useSelector(state=>state.authReducer); 

    useEffect(()=>{
        //dispatch(getCurrentProfile())
        
    },[])

   
    return (
        <div>
            UserDashboard
            {/*<UserInfo/>*/}
           
           
        </div>
    );
}

export default UserDashboard;
