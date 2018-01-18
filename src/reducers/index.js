import {combineReducers } from "redux";
import FetchReducer from './reducer_fetch.js';
import ModalReducer from './reducer_modal.js'
import {reducer as FormReducer } from "redux-form";


const rootReducer = combineReducers({
  form: FormReducer,
  fetch: FetchReducer,
  modal: ModalReducer,
  
});
export default rootReducer;
