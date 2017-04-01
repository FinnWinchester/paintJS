import React from 'react';
import {connect} from 'react-redux';

class CanvasToolsComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let props = this.props;

    return (
      <div className='canvas-tools-wrapper'>
        <div className='colors'>
          {props.tools.colors.map(e => {
            let style = {
              backgroundColor: e
            };

            let selectCanvasColor = function() {
              props.selectColor(e);
            };

            let selected = props.selected_color === e;

            return (
              <div className='color-preview-wrapper' key={e} onClick={selectCanvasColor}>
                <div className='color-preview' style={style}>
                  {selected && <div className='inner-icon valign-wrapper' dangerouslySetInnerHTML={{__html: '<i class="fa fa-check valign"></i>'}}></div>}
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

              let selectCanvasWidth = function() {
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
                <div className={'bullet' + (selected ? ' selected' : '')} key={e}></div>
              )
            })}
            <br className='clear-fix'/>
          </div>
          <br className='clear-fix'/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {tools: state.canvas.tools, selected_color: state.canvas.config.selected_color, selected_width: state.canvas.config.selected_width};
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
    })
  };
}

var CanvasTools = connect(mapStateToProps, mapDispatchToProps)(CanvasToolsComponent);

export default CanvasTools;
