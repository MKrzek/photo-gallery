import React from "react";
export default class DisplayPhoto extends React.Component {
  render() {
    const { farm, server, id, secret, title } = this.props.photo;

    return (
      <div id="photo-list">
        <div className="photo-item">
          <img
            src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`}
            alt={title}
            onClick={() => this.props.onPhotoSelect(this.props.photo)}
          />
        </div>
      </div>
    );
  }
}
