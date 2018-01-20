import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import Photos from './Photos.js';
import PhotoModal from './PhotoModal.js';
import * as Actions from '../actions/index.js';
import {connect} from 'react-redux';

class App extends Component {

onPhotoSelect = (photo) => {
   this.props.openModal(photo);
     
     this.props.getExifData(photo.id)
     console.log('photo.id', photo.id)
   };

  closePhoto = () => {
    this.props.closeModal();
  };

  render() {
    return (
      <div className='container-fluid'>
        <SearchBar />
        <Photos onPhotoSelect={this.onPhotoSelect}/>
        <PhotoModal
          modalIsOpen={this.props.modalIsOpen}
          selectedPhoto={this.props.selectedPhoto}
          onRequestClose={this.closePhoto}
          exif={this.props.exif}
         />
      </div>
    );
  }
};

function mapStateToProps (state){
  console.log ('exif', state.exif)
  return {
    modalIsOpen: state.modal.modalIsOpen,
    selectedPhoto: state.modal.selectedPhoto,
    exif: state.exif
  }
};

export default connect (mapStateToProps, Actions) (App);
