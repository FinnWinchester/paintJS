import React from 'react';
import {Title, HeaderBar, SubheaderBar, Footer} from 'components';

class MainLayout extends React.Component {
  render() {
    return (
      <div>
        <HeaderBar/>
        <SubheaderBar/>
        <div className="section">
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default MainLayout;
