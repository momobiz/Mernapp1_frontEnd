import React, {Fragment, useEffect} from 'react';
import UserInfo from '../UserInfo/UserInfo';
import {useSelector, useDispatch} from 'react-redux'; 
import { getCurrentProfile} from '../../Redux/UserAction';
import FormPost from '../Form/FormPost';
import Spinner from './Spinner';





const UserDashboard = () => {

    const dispatch=useDispatch();
    useEffect(()=>{
       dispatch(getCurrentProfile());
    }, [dispatch])

    const  userInfo=useSelector(state=>state.profileReducer);
    const auth=useSelector(state=>state.authReducer);

    const {profile, loading}=userInfo;

  
    return (
        <div>

            <h3 style={{color:"#f60002", marginTop:"25px", marginLeft:"50px"}}> Bienvenu à votre UserDashboard </h3>
           
         {  loading && profile===null? <Spinner/> :<Fragment> 
           
            <UserInfo userInfo={userInfo}/> 
          
           
           </Fragment>}
           
        </div>
    );
}

export default UserDashboard;
