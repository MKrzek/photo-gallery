import React from "react";
export default class DisplayPhoto extends React.Component {
  render() {
    const { farm, server, id, secret, title } = this.props.photo;

    return (
      
        <div className="photo-item text-center">
          <img
            src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`}
            alt={title}
            className='photo'
            onClick={() => this.props.onPhotoSelect(this.props.photo)}
          />
        
      </div>
    );
  }
}
