import React, { Component } from 'react';
import { render } from 'react-dom';

import ol from 'openlayers';

let localserve = new ol.layer.Tile({
  source: new ol.source.OSM({
    url: 'http://localhost/osm_tiles/{z}/{x}/{y}.png'
  })
});

const map = new ol.Map({
  target: 'map',
  layers: [
    localserve
  ],
  view: new ol.View({
    center: [
      13481363.197416633,
      1644099.866239368
    ],
    zoom: 18
  })
});

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
