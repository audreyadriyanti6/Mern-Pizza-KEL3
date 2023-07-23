import {combineReducers} from 'redux'


import {createStore, applyMiddleware} from 'redux'
//import { configureStore} from '@reduxjs/toolkit'

import thunk from 'redux-thunk'

import {composeWithDevTools} from '@redux-devtools/extension'

import { registerUserReducer } from './reducers/userReducer'
import { loginUserReducer } from './reducers/userReducer'

const finalReducer  = combineReducers({
    registerUserReducer : registerUserReducer,
    loginUserReducer : loginUserReducer
})

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const initialState = {
    loginUserReducer : {
        currentUser : currentUser
    }
}

const composeEnhancers= composeWithDevTools({})

const store = createStore(finalReducer , initialState , composeEnhancers(applyMiddleware(thunk)))
//const store = configureStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store