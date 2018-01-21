import React from 'react';
export default class DisplayExif extends React.Component{

  renderTable=()=>{
      (console.log ('tablica', this.props.exif.label))
      
      
     return this.props.exif.map((data, index)=>{
       
         return <tr key={index}>
                   <td className='md-4'>{data.label}</td>
                   <td className='md-4'>{data.raw._content}</td>
                </tr>
        
     })
    
}
    render(){
       
        return <div className="col col-md-8 justify-content-center">
            <table className="table-exif table table-bordered table-striped table-hover offset-md-2">
              <thead>
                <tr>
                  <th className="md-8" colSpan="2">
                    Exif Data
                  </th>
                </tr>
              </thead>
              <tbody>{this.renderTable()}</tbody>
            </table>
          </div>;
   
}
}
