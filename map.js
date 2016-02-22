import ol from 'openlayers';

// Try adding vector (marker)
//

let iconFeature = new ol.Feature({
  geometry: new ol.geom.Point([0,0])
});

let iconStyle = new ol.style.Style({
  image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({

  })
});

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

let vectorSource = new ol.source.Vector({});

let markerStyle = {
  'icon': new ol.style.Style({
     image: new ol.style.Icon({
      anchor: [0.5, 0.5],
      src: 'http://openlayers.org/en/master/examples/data/icon.png'
    })
  })
}

let marker = new ol.Feature({
  type: 'icon',
  geometry: new ol.geom.Point(exampleData.fromLocation[0], 'EPSG:4326', 'EPSG:3857')
});

vectorSource.addFeature(marker);

let markerLayer = new ol.layer.Vector({
  source: new ol.source.Vector({
    features: [marker]
  }),
  style: function(feature) {
    console.log(feature);
    return markerStyle[feature.get('type')];
  }
});


let localserve = new ol.layer.Tile({ source: localhostMapserver });

const kvcr = ol.proj.fromLonLat([121.1067147216795, 14.60966442647526]);
const view = new ol.View({ center: kvcr, zoom: 18 });

const map = new ol.Map({
  target: 'map',
  layers: [ markerLayer, localserve ],
  view: view
});

map.on('click', (e) => {
  //console.log(ol.proj.transform(e.coordinate, 'EPSG:4326', 'EPSG:3857'));
  console.log(e);
});
