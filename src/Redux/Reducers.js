import {combineReducers} from 'redux';
import postReducer from './PostReducer';
import userReducer from './UserReducer';


 const  Reducers=combineReducers({
    postReducer,
    userReducer
    

})
export default Reducers;
