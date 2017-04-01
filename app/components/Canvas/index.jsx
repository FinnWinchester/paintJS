import React from 'react';
import {connect} from 'react-redux';

class CanvasComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canvas: false,
      ctx: false
    };
  }

  componentWillReceiveProps(nextProps, nextState) {
    // Here we get the new props 'color' and 'width'.
    this.state.ctx.lineWidth = nextProps.selected_width;
    this.state.ctx.strokeStyle = nextProps.selected_color;
  }

  componentDidMount() {
    let _state = this.state;
    let _props = this.props;
    let coords = [];
    let mouse = {
      x: 0,
      y: 0
    };

    let canvas_wrapper = document.getElementById('canvas_wrapper');
    let paint_style = getComputedStyle(canvas_wrapper);

    _state.canvas = document.getElementById('canvas');
    _state.canvas.width = parseInt(this.props.width);
    _state.canvas.height = parseInt(this.props.height);

    _state.ctx = _state.canvas.getContext('2d');

    let onPaint = function() {
      _state.ctx.lineTo(mouse.x, mouse.y);
      _state.ctx.stroke();
    };

    _state.canvas.addEventListener('mousemove', function(e) {
      mouse.x = e.offsetX;
      mouse.y = e.offsetY;
      // coords.push(Object.assign({}, mouse, {index: coords.length}));
    }, false);

    // Setup width and color
    _state.ctx.lineWidth = this.props.selected_width;
    _state.ctx.strokeStyle = this.props.selected_color;

    // Start drawing
    _state.canvas.addEventListener('mousedown', function(e) {
      coords = [];
      _state.ctx.beginPath();
      _state.ctx.moveTo(mouse.x, mouse.y);

      _state.canvas.addEventListener('mousemove', onPaint, false);
    }, false);

    // Finish drawing
    _state.canvas.addEventListener('mouseup', function() {
      // _props.storeDrawing(_state.coords);
      _state.canvas.removeEventListener('mousemove', onPaint, false);
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
  return {selected_color: state.canvas.config.selected_color, selected_width: state.canvas.config.selected_width};
};

const mapDispatchToProps = dispatch => {
  return {
    storeDrawing: coords => dispatch({type: 'CANVAS_DRAWING_STORE', data: coords})
  };
}

var Canvas = connect(mapStateToProps, mapDispatchToProps)(CanvasComponent);

export default Canvas;
