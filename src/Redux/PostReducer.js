import {FETCH_ALL_POSTS} from './ActionTypes'; 


const postReducer=(posts=[], action)=>{
    switch(action.type){
        case 'FETCH_ALL_POSTS':
            return action.payload;
        case 'CREATE_POST':
            break; 
        default:
            return posts; 
    }

}
export default postReducer;