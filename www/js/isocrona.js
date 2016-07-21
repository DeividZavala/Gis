
 
                            
var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'pacobahena.0n4o2cli',
    accessToken: 'pk.eyJ1IjoicGFjb2JhaGVuYSIsImEiOiJjaXF0c3B1YnkwMDY5ZzJuaHVtajhheDY2In0.jgWAHJDg0y8D6JydEWag-A'
}).addTo(mymap);



                        