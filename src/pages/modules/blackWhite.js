import React, { Component } from 'react';
import {blackIpList} from '../../data/dataTest';
class BlackWhite extends Component{
    constructor() {
        super();
        this.state={
            blackList: blackIpList
        }
    }
    render(){
        console.log(blackIpList);
        return(
            <div className="list-black">
                <ul className="list-black__ul">
                    {this.state.blackList.map((ip, i)=>(
                        <li className='list-black__li' key={i}>IP: {ip}</li>
                    ))}
                </ul>
                <div className="list-black__bottom list-black__edit">Edit</div>
                <div className="list-black__bottom list-black__refresh">Refresh</div>
            </div>
        )
    }
}

export default BlackWhite;