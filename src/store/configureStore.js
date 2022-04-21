import {createStore,combineReducers} from 'redux'
import isLoginReducer from '../reducer/isLoginReducer'
import dataReducer from '../reducer/dataReducer'

const configureStore=()=>{
    const store=createStore(combineReducers({
        isLogin:isLoginReducer,
        data:dataReducer
    }))
    
    return store
}
export default configureStore