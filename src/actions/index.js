import axios from "axios";
const apiKey = "6b40783a0549a79410db0d03ddce6bcd";

export const FETCH_PHOTOS = "FETCH_PHOTOS";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const EXIF_DATA='EXIF_DATA';
export const SCROLL_PHOTOS='SCROLL_PHOTOS'

export function fetchPhotos(counter, value) {
  const pageNum = counter;
  const searchKeyword = value.searchBar;
  console.log ('pageNum', pageNum)
  console.log('searchterm', searchKeyword)
  return dispatch => {
    axios.get(
        `https://api.flickr.com/services/rest/?api_key=${apiKey}&method=flickr.photos.search&format=json&nojsoncallback=1&&per_page=50&page=${pageNum}&text=${searchKeyword}`
      )
      .then(function(response) {
        console.log("response", response);
        dispatch({
          type: FETCH_PHOTOS,
          payload: response.data.photos.photo
        });
      })
      .catch(function(error) {
        console.log(error.message);
      });
  };
}
export function openModal(photo) {
  console.log("actionmodal photo", photo);
  return {
    type: OPEN_MODAL,
    payload: photo
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  };
}

export function getExifData(id){
  console.log ('action id', id)
  return dispatch=>{
    axios.get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.getExif&api_key=${apiKey}&photo_id=${id}&format=json&nojsoncallback=1`
    ).then(function(response){
      console.log('exif data', response);
      dispatch({
        type: EXIF_DATA,
        payload: response.data.photo.exif
      });
    })
    .catch(function(error){
      console.log (error)
    })
  }
}


export function scrollPhotos(counter, value) {
  const pageNum = counter;
  const searchKeyword = value.searchBar;
  console.log ('pageNum', pageNum)
  console.log('searchterm', searchKeyword)
  return dispatch => {
    axios.get(
        `https://api.flickr.com/services/rest/?api_key=${apiKey}&method=flickr.photos.search&format=json&nojsoncallback=1&&per_page=50&page=${pageNum}&text=${searchKeyword}`
      )
      .then(function(response) {
        console.log("response", response);
        dispatch({
          type: FETCH_PHOTOS,
          payload: response.data.photos.photo
        });
      })
      .catch(function(error) {
        console.log(error.message);
      });
  };
}