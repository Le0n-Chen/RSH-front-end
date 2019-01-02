import React, { Component } from 'react';

class Secret extends Component{
    constructor() {
        super();
        this.state={
            fileValue: '未选择任何文件'
        }
        this._fileChange = this.fileChange.bind(this);
    }

    fileChange(e) {
        this.setState({fileValue: e.target.value});
    }
    render(){
        return(
            <div className="file">
                <label htmlFor="file">文件：</label>
                <div className="userdefined-file">
                　　<input type="text" name="userdefinedFile" id="userdefinedFile" value={ this.state.fileValue } />
                　　<button type="button">上传</button>
                </div>
                <input type="file" name="file" id="file" onChange={ this._fileChange }/>            
            </div>
        )
    }
}

export default Secret;