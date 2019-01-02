import React, { Component } from 'react';

class Secret extends Component{
    constructor() {
        super();
    }

    render(){
        return(
            <div className="secret-main">
                <label className="secret-main__label">Browse documents</label>
                <input type="file" name="apkBeforeSign"/>
            </div>
        )
    }
}

export default Secret;