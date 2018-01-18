import{FETCH_PHOTOS} from '../actions/index.js'
export default function (state=[], action){
    console.log ('reducerfetch', action.payload)
    switch(action.type){
        case FETCH_PHOTOS:
        return action.payload

    default: 
      return state
    }
}