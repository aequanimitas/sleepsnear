import React, { Component } from 'react';
import { render } from 'react-dom';

import './map';

class App extends Component {
  render() {
    return <div>Test!!!</div>
  }
}

let doc = document.getElementById('root');

render(
  <App />,
  doc
);
