import React from 'react';
import {connect} from 'react-redux';

class CanvasComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canvas: false,
      ctx: false,
      width: props.width,
      height: props.width
    };
  }

  // Here we get the new props 'color' and 'width'.
  componentWillReceiveProps(nextProps, nextState) {
    let _state = this.state;

    _state.ctx.lineWidth = nextProps.selected_width;
    _state.ctx.strokeStyle = nextProps.selected_color;

    if (nextProps.repaint) {
      // First we clear the canvas.
      _state.ctx.clearRect(0, 0, parseInt(nextProps.width), parseInt(nextProps.height));

      // First we check whether we have points to draw or not.
      if (nextProps.history.length > 0) {

        nextProps.history.map(eachHistory => {
          _state.ctx.lineWidth = eachHistory.width;
          _state.ctx.strokeStyle = eachHistory.color;

          // Move cursor to first coord.
          _state.ctx.beginPath();
          _state.ctx.moveTo(eachHistory.coords[0].x, eachHistory.coords[0].y);

          eachHistory.coords.map(eachCoord => {
            _state.ctx.lineTo(eachCoord.x, eachCoord.y);
            _state.ctx.stroke();
          })
        });
      }
    }
  }

  componentDidMount() {
    let _state = this.state;
    let _props = this.props;
    let coords = [];
    let mouse = {
      x: 0,
      y: 0
    };
    let painting = true;

    let canvas_wrapper = document.getElementById('canvas_wrapper');
    let paint_style = getComputedStyle(canvas_wrapper);

    _state.canvas = document.getElementById('canvas');
    _state.canvas.width = parseInt(this.props.width);
    _state.canvas.height = parseInt(this.props.height);

    _state.ctx = _state.canvas.getContext('2d');

    let onPaint = function() {
      if (painting) {
        _state.ctx.lineTo(mouse.x, mouse.y);
        _state.ctx.stroke();
        coords.push(Object.assign({}, mouse));
      }
    };

    _state.canvas.addEventListener('mousemove', function(e) {
      mouse.x = e.offsetX;
      mouse.y = e.offsetY;
    }, false);

    // Setup width and color
    _state.ctx.lineWidth = this.props.selected_width;
    _state.ctx.strokeStyle = this.props.selected_color;

    // Start drawing
    _state.canvas.addEventListener('mousedown', function(e) {
      painting = true;
      coords = [];
      _state.ctx.beginPath();
      _state.ctx.moveTo(mouse.x, mouse.y);

      _state.canvas.addEventListener('mousemove', onPaint, false);
    }, false);

    // Finish drawing
    _state.canvas.addEventListener('mouseup', function() {
      painting = false;
      let hasCoords = coords.length > 0;
      hasCoords && _props.storeDrawing(coords, _state.ctx.strokeStyle, _state.ctx.lineWidth);
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
  // unique_id is needed because the new state's history won't hear about his length change.
  return {selected_color: state.canvas.config.selected_color, selected_width: state.canvas.config.selected_width, history: state.canvas.config.history, repaint: state.canvas.repaint, unique_id: state.canvas.config.history.length};
};

const mapDispatchToProps = dispatch => {
  return {
    storeDrawing: (coords, color, width) => dispatch({
      type: 'CANVAS_DRAWING_STORE',
      data: {
        coords,
        color,
        width
      }
    })
  };
}

var Canvas = connect(mapStateToProps, mapDispatchToProps)(CanvasComponent);

export default Canvas;
