import {combineReducers} from 'redux';
import postReducer from './PostReducer';
import userReducer from './UserReducer';
import authReducer from './AuthReducer';


 const  Reducers=combineReducers({
    postReducer,
    userReducer, 
    authReducer
    

})
export default Reducers;
