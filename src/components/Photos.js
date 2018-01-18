import React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../actions/index.js';
import DisplayPhoto from './DisplayPhoto.js';

class Photos extends React.Component {
  
 

  showPhotos = () => {
    return this.props.photos.map(data => {
      return (
        <DisplayPhoto
          photo={data}
          key={data.id}
          onPhotoSelect={this.props.onPhotoSelect}
        />
      );
    });
  };
  render() {
    return (
      <div className="row">
        <div className="col-ms-4">{this.showPhotos()}</div>
      </div>
    );
  }
}

function mapStateToProps(state){
    return {
        photos: state.fetch
    }
}

export default connect (mapStateToProps, Actions) (Photos);