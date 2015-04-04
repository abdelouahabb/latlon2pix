// this is the element you want to place in the image .

function placeDiv(x_pos, y_pos, elem) {
  var d = document.getElementById(elem);
  d.style.position = "absolute";
  d.style.left = x_pos+'px';
  d.style.top = y_pos+'px';
} 
// this is where mathematics begin!

var mapWidth = 1; // replace by your image width (without px).
var mapHeight = 1; // replace by your image height (without px).
var mapLonLeft = 1; // get your latest left point on your map (with a good zoom)
var mapLonRight = 1; // get your latest right point on your map (with a good zoom)
var mapLonDelta = mapLonRight - mapLonLeft;
var mapLatBottom = 1; // get your latest bottom point on your map (with a good zoom)
var mapLatBottomDegree = mapLatBottom * Math.PI / 180;

function convertGeoToPixel(lat, lon)
{
  x = (lon - mapLonLeft) * (mapWidth / mapLonDelta);
  lat = lat * Math.PI / 180;
  worldMapWidth = ((mapWidth / mapLonDelta) * 360) / (2 * Math.PI);
  mapOffsetY = (worldMapWidth / 2 * Math.log((1 + Math.sin(mapLatBottomDegree)) / (1 - Math.sin(mapLatBottomDegree))));
  y = mapHeight - ((worldMapWidth / 2 * Math.log((1 + Math.sin(lat)) / (1 - Math.sin(lat)))) - mapOffsetY);
  
  return placeDiv(x, y);
}
