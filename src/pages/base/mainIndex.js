import React, { Component } from 'react';
import {bind} from '../../utils/bindUtil';

class MainIndex extends Component{
    constructor() {
        super();
        this.state={
            items:['blackWhite', 'webStatus', 'aboutMe', 'secret']
        }
        this._goToItem=this.goToItem.bind(this);
    }
    goToItem (itemName) {
        this.props.history.push('/'+itemName);
    }
    render(){
        return(
            <div className='main-page'>
                <div className='main-page--box'>
                {this.state.items.map((item, i)=>(
                    <div className='main-page__item' onClick={this.goToItem.bind(this, item)} key={i}>
                        <div className='main-page__border'>
                            {item}
                        </div>
                    </div>
                ))}
                </div>
            </div>
            
        )
    }
}
export default MainIndex;