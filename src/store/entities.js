import {combineReducers} from "@reduxjs/toolkit";
import customersReducer from './customers'


export default combineReducers({
    customers: customersReducer
});