
import React from 'react';
import {connect} from 'react-redux';

class CanvasToolsComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let props = this.props;

    return (
      <div>
        <div className='canvas-undo-redo-wrapper'>
          <button type='button' className={'undo-btn' + (props.history_length === 0 ? ' disabled' : '')} onClick={this.props.undo}>
            <i className='fa fa-undo'></i>
          </button>
          <button type='button' className={'redo-btn' + (props.deleted_length === 0 ? ' disabled' : '')} onClick={this.props.redo}>
            <i className='fa fa-repeat'></i>
          </button>
        </div>
        <div className='canvas-tools-wrapper'>
          <div className='colors'>
            {props.tools.colors.map(e => {
              let style = {
                backgroundColor: e
              };

              let selectCanvasColor = function() {
                props.selectColor(e);
              };

              let selected = props.selected_color === e;

              return (
                <div className='color-preview-wrapper' key={e} onClick={selectCanvasColor}>
                  <div className='color-preview' style={style}>
                    {selected && <div className='inner-icon valign-wrapper' dangerouslySetInnerHTML={{
                      __html: '<i class="fa fa-check valign"></i>'
                    }}></div>}
                  </div>
                </div>
              )
            })}
            <br className='clear-fix'/>
          </div>

          <div className='widths'>
            <div className='widths-list'>
              {props.tools.widths.map(e => {
                let style = {
                  height: e
                };

                let selectCanvasWidth = function() {
                  props.selectWidth(e);
                };

                return (
                  <div className='width-preview-wrapper valign-wrapper' key={e} onClick={selectCanvasWidth}>
                    <div className='width-preview valign' style={style}></div>
                  </div>
                )
              })}
              <br className='clear-fix'/>
            </div>

            <div className='widths-selected'>
              {props.tools.widths.map(e => {
                let style = {
                  height: e
                };

                let selected = props.selected_width === e;

                return (
                  <div className={'bullet' + (selected
                    ? ' selected'
                    : '')} key={e}></div>
                )
              })}
              <br className='clear-fix'/>
            </div>
            <br className='clear-fix'/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {tools: state.canvas.tools, selected_color: state.canvas.config.selected_color, selected_width: state.canvas.config.selected_width, history_length: state.canvas.config.history.length, deleted_length: state.canvas.config.deleted.length};
};

const mapDispatchToProps = dispatch => {
  return {
    selectWidth: width => dispatch({
      type: 'CANVAS_SELECT_WIDTH',
      data: {
        width: width
      }
    }),
    selectColor: color => dispatch({
      type: 'CANVAS_SELECT_COLOR',
      data: {
        color: color
      }
    }),
    undo: color => dispatch({type: 'CANVAS_DRAWING_UNDO', data: {}}),
    redo: color => dispatch({type: 'CANVAS_DRAWING_REDO', data: {}})
  };
}

var CanvasTools = connect(mapStateToProps, mapDispatchToProps)(CanvasToolsComponent);

export default CanvasTools;
