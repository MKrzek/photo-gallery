import axios from 'axios';
const apiKey= '6b40783a0549a79410db0d03ddce6bcd';
 
export const FETCH_PHOTOS ="FETCH_PHOTOS";

export function fetchPhotos(value){
  const pageNum=1;
  const searchKeyword=value.searchBar;
  return dispatch =>{
    axios
      .get(`https://api.flickr.com/services/rest/?api_key=${apiKey}&method=flickr.photos.search&format=json&nojsoncallback=1&&per_page=50&page=${pageNum}&text=${searchKeyword}`)
      .then(function(response) {
        console.log('response', response.data.photos.photo)
        dispatch({ type: FETCH_PHOTOS,
                   payload: response.data.photos.photo});
      })
      .catch(function(error) {
        console.log(error.message);
      });
  }
}
