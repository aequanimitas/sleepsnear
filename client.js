import React, { Component } from 'react';
import { render } from 'react-dom';

import ol from 'openlayers';

let localserve = new ol.layer.Tile({
  source: new ol.source.OSM({
    url: 'http://localhost/osm_tiles/{z}/{x}/{y}.png'
  })
});
const kvcr = ol.proj.fromLonLat([121.1067147216795, 14.60966442647526]);
const view = new ol.View({ center: kvcr, zoom: 18 });

const map = new ol.Map({
  target: 'map',
  layers: [ localserve ],
  view: view
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
