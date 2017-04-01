import React from 'react';
import {connect} from 'react-redux';

class CanvasComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let mouse = {
      x: 0,
      y: 0
    };

    let canvas_wrapper = document.getElementById('canvas_wrapper');
    let paint_style = getComputedStyle(canvas_wrapper);

    let canvas = document.getElementById('canvas');
    canvas.width = parseInt(this.props.width);
    canvas.height = parseInt(this.props.height);

    let ctx = canvas.getContext('2d');

    let onPaint = function() {
      ctx.lineTo(mouse.x, mouse.y);
      ctx.stroke();
    };

    canvas.addEventListener('mousemove', function(e) {
      mouse.x = e.offsetX;
      mouse.y = e.offsetY;
    }, false);

    ctx.lineWidth = 5;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#12A5CC';

    canvas.addEventListener('mousedown', function(e) {
      ctx.beginPath();
      ctx.moveTo(mouse.x, mouse.y);

      canvas.addEventListener('mousemove', onPaint, false);
    }, false);

    canvas.addEventListener('mouseup', function() {
      canvas.removeEventListener('mousemove', onPaint, false);
    }, false);
  }

  render() {
    let style = {
      width: this.props.width,
      height: this.props.height
    };

    return (
      <div id='canvas_wrapper' className='canvas_wrapper'>
        <canvas id='canvas' className='canvas'></canvas>
      </div>
    );
  }
}

CanvasComponent.defaultProps = {
  width: '450',
  height: '450'
};

const mapStateToProps = state => {
  return {config: state.canvas.config};
};
const mapDispatchToProps = dispatch => {
  return {};
}

var Canvas = connect(mapStateToProps, mapDispatchToProps)(CanvasComponent);

export default Canvas;
