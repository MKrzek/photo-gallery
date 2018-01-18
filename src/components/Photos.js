import React from 'react';
import {connect} from 'react-redux';

import DisplayPhoto from './DisplayPhoto.js';

class Photos extends React.Component{

    showPhotos=()=>{
        return  this.props.photos.map (data=>{
            
                 return <DisplayPhoto photo={data} key={data.id}/>
             })
        
    }  


    render(){
        return <div>
                  {this.showPhotos()}
               </div>
    }
}

function mapStateToProps(state){
    
    return {
        photos: state.fetch
    }
}

export default connect (mapStateToProps, null) (Photos);