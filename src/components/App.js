import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import Photos from './Photos.js';
import PhotoModal from './PhotoModal.js';
import * as Actions from '../actions/index.js';
import {connect} from 'react-redux';

class App extends Component {

onPhotoSelect = (photo) => {
   this.props.openModal(photo);
     console.log("dziala",photo);
   };

  closePhoto = () => {
    this.props.closeModal();
  };

  render() {
    return (
      <div>
        <SearchBar />
        <Photos onPhotoSelect={this.onPhotoSelect}/>
        <PhotoModal
          modalIsOpen={this.props.modalIsOpen}
          selectedPhoto={this.props.selectedPhoto}
          onRequestClose={this.closePhoto}
         />
      </div>
    );
  }
};

function mapStateToProps (state){
  console.log ('modal is open', state.modal.modalIsOpen)
  console.log ('app selected photo', state.modal.selectedPhoto)
  return {
    modalIsOpen: state.modal.modalIsOpen,
    selectedPhoto: state.modal.selectedPhoto
  }
};

export default connect (mapStateToProps, Actions) (App);
