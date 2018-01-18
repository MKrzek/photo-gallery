import {OPEN_MODAL, CLOSE_MODAL} from '../actions/index.js';

const initialState={
    selectedPhoto: null,
    modalIsOpen: false,
}
export default function (state=initialState, action){
    console.log ('reducer modal', action.payload)
    switch(action.type){
        case OPEN_MODAL:
            return {
                ...state, 
                modalIsOpen: true,
                selectedPhoto: action.payload
            }
        case CLOSE_MODAL:
            return{
                ...state,
                modalIsOpen: false,
                selectedPhoto: null
            }
        default: 
           return state;
    }
}