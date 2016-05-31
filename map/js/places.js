function getColor(status){
  if (status == 'Acquired'){
    return '#000000';
  }
  else if (status == 'Accelerator'){
    return '#fdff16';
  }
  else if (status == 'Entrepreneurial Resource'){
    return '#0511b6';
  }
  else if (status == 'Incubator/Coworking Space'){
    return '#6f00ae';
  }
  else if (status == 'Startup'){
    return '#009900';
  }
  else if (status == 'Startup (1 - 10 Employees)'){
    return '#00ff00';
  }
  else if (status == 'Startup (11 - 50 Employees)'){
    return '#006600';
  }
  else if (status == 'Startup (50+ Employees)'){
    return '#004400';
  }
  else if (status == 'Venture Capital'){
    return '#fb6d14';
  }
  else{
    return '#fb6d14';
  }
}

//CLUSTERING
// var markers = new L.MarkerClusterGroup();

// for (var i = 0; i < DATA.length; i++) {
//  console.log("1");
//     var lat = parseFloat(DATA[i].geometry.coordinates[1]);
//  var lon = parseFloat(DATA[i].geometry.coordinates[0]);

//     var title = DATA[i].properties.title;
//     var marker = L.marker(new L.LatLng(lat, lon), {
//         icon: L.mapbox.marker.icon({'marker-symbol': 'post', 'marker-color': '0044FF'}),
//         title: title
//     });
//     marker.bindPopup(title);
//     markers.addLayer(marker);
// }

// map.addLayer(markers);