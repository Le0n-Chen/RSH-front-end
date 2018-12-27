import React, { Component } from 'react';
import {bind} from '../../utils/bindUtil';

class MainIndex extends Component{
    constructor() {
        super();
        this.state={
            items:[
                { name: 'Black&White', url: 'blackWhite'},
                { name: 'Web Status', url: 'webStatus'},
                { name: 'About ME', url: 'aboutMe'},
                { name: 'Secret', url: 'secret'}
            ]
        }
        this._goToItem=this.goToItem.bind(this);
    }
    goToItem (itemName) {
        this.props.history.push('/'+itemName.url);
    }
    render(){
        return(
            <div className='main-page'>
                <div className='main-page--box'>
                {this.state.items.map((item, i)=>(
                    <div className='main-page__item' onClick={this.goToItem.bind(this, item)} key={i}>
                        <div className='main-page__border'>
                            {item.name}
                        </div>
                    </div>
                ))}
                </div>
            </div>
            
        )
    }
}
export default MainIndex;