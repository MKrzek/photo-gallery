import {combineReducers } from "redux";
import FetchReducer from './reducer_fetch.js';
import ModalReducer from './reducer_modal.js'
import {reducer as FormReducer } from "redux-form";
import ExifREducer from './reducer_exif.js'

const rootReducer = combineReducers({
  form: FormReducer,
  fetch: FetchReducer,
  modal: ModalReducer,
  exif:ExifREducer,
  
});
export default rootReducer;
