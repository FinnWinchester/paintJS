import React from 'react';
import {Link} from 'react-router';

let FooterComponent = () => (
  <footer className="page-footer">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">Documentation</h5>
          <ul>
            <li>
              <a href="https://www.w3schools.com/html/html5_canvas.asp" className="grey-text text-lighten-4">HTML5 canvas</a>
            </li>
            <li>
              <a href="https://facebook.github.io/react/" className="grey-text text-lighten-4">ReactJS</a>
            </li>
            <li>
              <a href="http://redux.js.org/" className="grey-text text-lighten-4">Redux</a>
            </li>
            <li>
              <a href="http://brunch.io/" className="grey-text text-lighten-4">Brunch</a>
            </li>
            <li>
              <a href="https://babeljs.io/" className="grey-text text-lighten-4">Babel/ES6</a>
            </li>
            <li>
              <a href="https://facebook.github.io/jest/" className="grey-text text-lighten-4">Jest</a>
            </li>
          </ul>
        </div>
        <div className="col l4 offset-l2 s12">
          <h5 className="white-text">Links</h5>
          <ul>
            <li>
              <Link to="/home" className="grey-text text-lighten-3">Home</Link>
            </li>
            <li>
              <Link to="/paint" className="grey-text text-lighten-3">Paint</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
        Finn Winchester :: PaintJS
        <a className="grey-text text-lighten-4 right" href="Fork me on GitHub!">Fork me on GitHub!</a>
      </div>
    </div>
  </footer>
);

export default FooterComponent;
