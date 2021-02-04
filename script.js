var mymap = L.map('mapid').setView([38.63, -90.3], 11);

L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(mymap);


var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);


var greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});


var marker1 = L.marker([38.627555, -90.346005], {icon: greenIcon}).addTo(mymap);
marker1.bindPopup("<b>Restaurant 1</b><br>Bonefish Grill").openPopup();

var marker2 = L.marker([38.637013, -90.230629], {icon: greenIcon}).addTo(mymap);
marker2.bindPopup("<b>Restaurant 2</b><br>Vito's Sicilian Pizzeria").openPopup();

var marker3 = L.marker([38.636765, -90.246631], {icon: greenIcon}).addTo(mymap);
marker3.bindPopup("<b>Restaurant 3</b><br>The Scottish Arms Pub").openPopup();

var marker4 = L.marker([38.601186, -90.242025], {icon: greenIcon}).addTo(mymap);
marker4.bindPopup("<b>Restaurant 4</b><br>Rooster").openPopup();

var marker5 = L.marker([38.630457, -90.189476], {icon: greenIcon}).addTo(mymap);
marker5.bindPopup("<b>Restaurant 5</b><br>Sugarfire Smoke House").openPopup();
