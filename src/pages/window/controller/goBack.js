import React, { Component } from 'react';
 class GoBack extends Component{
     constructor() {
         super();
         this._clickBack = this.clickBack.bind(this);
     }
     clickBack() {
         this.props.history.goBack();
     }
     render(){
         return(
             <div className="go-back-forward" onClick={ this._clickBack}>

             </div>
         )
     }
 }

 export default GoBack;