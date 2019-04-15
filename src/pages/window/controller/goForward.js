import React, { Component } from 'react';
 class GoForward extends Component{
     constructor() {
         super();
         this._clickGoForward=this.clickGoForward.bind(this);
     }
     clickGoForward() {
         this.props.history.goForward();
     }
     render(){
         return(
             <div className="go-back-forward" onClick={ this._clickGoForward }>

             </div>
         )
     }
 }

 export default GoForward;