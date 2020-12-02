import Reducers from './Reducers'; 
import {createStore, applyMiddleware, compose} from 'redux'; 
import thunk from 'redux-thunk';


const store=createStore(Reducers,compose(applyMiddleware(thunk)));

export default store;