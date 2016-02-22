import ol from 'openlayers';

// Try adding vector (marker)
let iconFeature = new ol.Feature({
  geometry: new ol.geom.Point([
    13480929.954728967,
    1645313.0054812531
  ]),
  name: 'Sta. Lucia Mall',
  population: 4000,
  rainfall: 500
});

let iconStyle = new ol.style.Style({
  image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
    anchor: [0.5, 46],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    opacity: 0.75,
    src: 'data/icon.png'
  }))
});

iconFeature.setStyle(iconStyle);

let vectorSource = new ol.source.Vector({
  features: [iconFeature]
});

let vectorLayer = new ol.layer.Vector({
  source: vectorSource
});

// end vector


const localhostMapserver = new ol.source.OSM({
  url: 'http://localhost/osm_tiles/{z}/{x}/{y}.png'
});

const exampleData = {
  center: [121.1067147216795, 14.60966442647526],
  fromLocation: [
    //[13480944.883836057, 1645313.6026455371],
    [1645313.6026455371,  13480944.883836057],
    [13481344.834614918, 1643710.9629997532]
  ]
};

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
