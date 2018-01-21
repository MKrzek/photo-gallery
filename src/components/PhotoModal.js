import React from "react";
import Modal from "react-modal";
import DisplayExif from './DisplayExif.js';

export default class PhotoModal extends React.Component {
  render() {
    if (!this.props.selectedPhoto) {
      return <div></div>;
    } else {
      
      console.log('exif photo modal', this.props.exif);
      const { farm, server, id, secret, title } = this.props.selectedPhoto;
      const customStyle = {
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.75)"
        },
        content: {
          position: "absolute",
          top: "40px",
          left: "40px",
          right: "40px",
          bottom: "40px",
          border: "1px solid #ccc",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          outline: "none",
          padding: "20px"
        }
      };
      return <Modal isOpen={this.props.modalIsOpen} onRequestClose={() => this.props.onRequestClose()} ariaHideApp={false} style={customStyle}>
          <div className="photo-modal">
            <div>
              <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={title} className='modal-photo' />
            </div>

            <div className="text-center mt-2">
              <button className="btn btn-primary " onClick={() => this.props.onRequestClose()}>
                close
              </button>
              <div>{title}</div>
            </div>
            <div>
               <DisplayExif exif={this.props.exif} />
            </div>
          </div>
        </Modal>;
    }
  }
}
