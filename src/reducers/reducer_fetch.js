import { FETCH_PHOTOS, SCROLL_PHOTOS } from "../actions/index.js";
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PHOTOS:
      return [action.payload];
    case SCROLL_PHOTOS:
      return [...state,action.payload];
    default:
      return state;
  }
}
