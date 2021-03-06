import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import category from './category'
import questions from './question'


const rootReducer = combineReducers({ category, questions })


export default createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
    applyMiddleware(thunk))