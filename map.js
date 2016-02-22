import ol from 'openlayers';
import points from './sampleData';

let iconStyle = new ol.style.Style({
  image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
    anchor: [0.5, 46],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    opacity: 0.75,
    src: 'data/icon.png'
  }))
});

let apartments = points.map((e) => {
  let apartment = new ol.Feature({
    geometry: new ol.geom.Point(e.coords),
    name: e.name
  });
  apartment.setStyle(iconStyle);
  return apartment;
});

let vectorSource = new ol.source.Vector({
  features: apartments
});

let vectorLayer = new ol.layer.Vector({
  source: vectorSource
});

const localhostMapserver = new ol.source.OSM({
  url: 'http://localhost/osm_tiles/{z}/{x}/{y}.png'
});

let localserve = new ol.layer.Tile({ source: localhostMapserver });

const kvcr = ol.proj.fromLonLat([121.1067147216795, 14.60966442647526]);
const view = new ol.View({ center: kvcr, zoom: 18 });

const map = new ol.Map({
  target: 'map',
  layers: [ localserve, vectorLayer ],
  view: view
});

map.on('click', (e) => {
  console.log(e);
});
