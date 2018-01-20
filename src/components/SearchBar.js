import React from 'react';
import{Field, reduxForm} from 'redux-form';
import{connect} from 'react-redux';
import * as Actions from '../actions/index.js';


class SearchBar extends React.Component{

renderSearchBar=(field)=>{
    
    return <fieldset className='form-group'>
           
            <input {...field.input} type={field.type} placeholder={field.placeholder} className='form-control form-control-lg'/>
            <div style={{color:'red'}}>{field.meta.touched ? field.meta.error: ''}</div>
           </fieldset>
};
handleSubmit=(value)=>{
    this.props.fetchPhotos(value)
};

    render(){
            return <div className='row justify-content-center'>
                <div className='col-10 col-sm-6 col-md-4 mt-4'>
                <h1>Photo Gallery</h1>
                <form onSubmit={this.props.handleSubmit(this.handleSubmit)} className='mt-4'>
                    <Field name='searchBar'
                           type='text'
                           placeholder='Enter your query'  
                           component={this.renderSearchBar}/>
                    <button type='submit' className='btn btn-primary'>Search</button>
                </form>
                </div>
                </div>
            
                
                
    }
}
function validate(value){
    const errors={}
if (!value.searchBar){
    errors.searchBar='Please enter a search term'
}
    return errors;
}

export default connect(null, Actions) (reduxForm({
    form:'searchBar',
    validate: validate
})(SearchBar))
