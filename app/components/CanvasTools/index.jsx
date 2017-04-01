import React from 'react';
import {connect} from 'react-redux';

class CanvasToolsComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='canvas-tools-wrapper'>
        <div className='colors'>
          {this.props.config.colors.map(e => {
            let style = {
              backgroundColor: e
            };

            return (
              <div className='color-preview-wrapper' key={e}>
                <div className='color-preview' style={style}></div>
              </div>
            )
          })}
          <br className='clear-fix'/>
        </div>

        <div className='widths'>
          <div className='widths-list'>
            {this.props.config.widths.map(e => {
              let style = {
                height: e
              };

              return (
                <div className='width-preview-wrapper valign-wrapper' key={e}>
                  <div className='width-preview valign' style={style}></div>
                </div>
              )
            })}
            <br className='clear-fix'/>
          </div>

          <div className='widths-selected'>
            {this.props.config.widths.map(e => {
              let style = {
                height: e
              };

              let selected = false;

              return (
                <div className={selected && 'selected'} key={e}></div>
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
  return {config: state.canvas.tools};
};
const mapDispatchToProps = dispatch => {
  return {};
}

var CanvasTools = connect(mapStateToProps, mapDispatchToProps)(CanvasToolsComponent);

export default CanvasTools;
