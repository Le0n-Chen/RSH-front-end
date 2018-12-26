import React, { Component } from 'react';

class MainIndex extends Component{
    constructor() {
        super();
        this.state={
            items:['Black&White', 'Web Status', 'About ME', 'Secret']
        }
    }

    render(){
        return(
            <div className='main-page'>
                <div className='main-page--box'>
                {this.state.items.map((item)=>(
                    <div className='main-page__item'>
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