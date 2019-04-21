import React from 'react';
import './index.css';
import App from './App';
import {render} from 'mirrorx';
import {HashRouter} from 'react-router-dom';

render(
    <HashRouter basename='/'>
        <App/>
    </HashRouter>,
  document.getElementById('root')
);

window.getSelection() ? window.getSelection().removeAllRanges() : document.selection.empty(); //这句话干啥用的


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
