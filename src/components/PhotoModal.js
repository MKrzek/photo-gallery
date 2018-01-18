import React from 'react';
import Modal from 'react-modal';

export default class PhotoModal extends React.Component{
    
    render(){
        
        if (!this.props.selectedPhoto){
            return <div></div>
        }else {
            const {farm, server, id, secret, title } = this.props.selectedPhoto;
        return <Modal isOpen={this.props.modalIsOpen} 
                      onRequestClose={() => this.props.onRequestClose()}>
            <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={title} />
            <button onClick={() => this.props.onRequestClose()}>close</button>
          </Modal>;
               
        }    
    }
}