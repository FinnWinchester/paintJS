import React from 'react';
import {Link} from 'react-router';

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <h4>Oops! Not found!</h4>
        <h5>Go back to <Link to="/" className="underline">Home</Link>.</h5>
      </div>
    );
  }
}


export default NotFound;
