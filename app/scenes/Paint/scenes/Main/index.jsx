import React from 'react';
import {Canvas, CanvasTools, PanelHeader} from 'components';

class PaintMain extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 l8">
            <div className="panel z-depth-1">
              <PanelHeader title="Canvas"/>
              <Canvas width='450px' height='450px'/>
            </div>
          </div>
          <div className="col s12 l4">
            <div className="panel z-depth-1">
              <PanelHeader title="Tools"/>
              <CanvasTools />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PaintMain;
