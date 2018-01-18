import React from 'react';
export default class DisplayPhoto extends React.Component{
    render(){
        console.log ('diplsay photo', this.props.photo)
        const {farm, server, id, secret}=this.props.photo
       
        return <div>
                  <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`}></img>
              </div>
    }
}