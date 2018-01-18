import {combineReducers } from "redux";
import FetchReducer from './reducer_fetch.js'
import {reducer as FormReducer } from "redux-form";


const rootReducer = combineReducers({
  form: FormReducer,
  fetch: FetchReducer
  
});
export default rootReducer;
