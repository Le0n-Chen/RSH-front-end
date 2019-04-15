import React, { Component } from 'react';
import { actions } from 'mirrorx';
import PropTypes from 'prop-types';
class Login extends Component{
    constructor(){
        super();
        this._gomain = this.goMain.bind(this);
    }
    goMain(){
        actions.app.changeIsLogin();
    }
    render(){
        return(
            <div className="form-all">
                <div className='login-row'>
                    <label className='login-row__label' htmlFor='usr'>USR: </label>
                    <input className='login-row__input' type='text' name='usr' id='usr'/>
                </div>
                <div className='login-row'>
                    <label className='login-row__label' htmlFor='pwd'>PWD: </label>
                    <input className='login-row__input' type='password' name='pwd' id='pwd'/>
                </div>
                <div className='login-row login-go' onClick={this._gomain}>GO</div>
            </div>
        )
    }
}
Login.propTypes = {
    history: PropTypes.object,
};

export default Login;