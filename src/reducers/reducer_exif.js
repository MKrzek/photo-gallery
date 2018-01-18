import {EXIF_DATA} from '../actions/index.js';

export default function (state=[], action){
    switch(action.type){
        case EXIF_DATA:
          return action.payload
        default:
          return state
    }
}