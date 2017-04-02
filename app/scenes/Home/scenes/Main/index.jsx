import React from 'react';
import {Link} from 'react-router';

class HomeMain extends React.Component {
  render() {
    return (
      <div>
        <p><strong>Welcome!</strong> This is a ReactJS app where we can draw in a HTML5 canvas.</p>
        <p>We can also change color from a defined palette and stroke width within 4 different sizes.</p>
        <p>The palette and stroke available widths are stored in Redux so we can add or substract colors or widths at will.</p>
        <br />
        <p>No more talking, <Link to="/paint"><strong>let's test it!</strong></Link></p>
      </div>
    );
  }
}

export default HomeMain;
