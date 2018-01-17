import React from 'react';
import{Field, reduxForm} from 'redux-form';
import{connect} from 'react-redux';
import * as Actions from '../actions/index.js';

class SearchBar extends React.Component{

renderSearchBar=(field)=>{
    
    return <fieldset className='form-group'>
            <label className='form-label'>{field.label}</label>
            <input {...field.input} type={field.type}/>
            <div style={{color:'red'}}>{field.meta.touched ? field.meta.error: ''}</div>
           </fieldset>
};
handleSubmit=(value)=>{
    this.props.fetchPhotos(value)
};

    render(){
            return <div>
                <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                    <Field name='searchBar'
                           type='text'
                           label='Enter your query'
                           component={this.renderSearchBar}/>

                    <button type='submit' className='btn btn-primary'>Search</button>
                </form>
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
