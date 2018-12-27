import React, { Component } from 'react';

class AnimateRoll extends Component{
    constructor(){
        super();
        this.state={
            rect1: {
                x: 10
            }
        }
    }

    componentDidMount(){
        this.setState({'WINDOW_WIDTH':});
        var canvas=document.getElementById('canvas');
        this.state.WINDOW_WIDTH = canvas.clientWidth;
        this.state.WINDOW_HEIGHT = canvas.clientHeight;
        var context=canvas.getContext("2d");
        let _this = this;
        setInterval(
            function(){
                _this.renderCanvas(context);
                _this.updateCanvas();
            },
            500
        );
    }

    renderCanvas(cxt) {
        cxt.clearRect(0,0,this.state.WINDOW_WIDTH,this.state.WINDOW_HEIGHT);
        cxt.fillStyle="#A09C9C";
        cxt.beginPath();
        cxt.rect(this.state.rect1.x, 18,1,6);
        cxt.closePath();
        cxt.fill();
    }

    updateCanvas() {
        this.state.rect1.x += 10;
    }
    render(){
        return(
            <canvas className="window-canvas" id='canvas'>

            </canvas>
        )
    }
}
export default AnimateRoll;