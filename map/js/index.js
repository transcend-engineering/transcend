L.mapbox.accessToken = 'pk.eyJ1IjoibWZpeDIyIiwiYSI6IjZmNDIwZGZkOWI1ZDgwY2VkNGRkOTVjNjcwMTMxMDEyIn0.QnJDKEfnvhw8u0zVtWVRiw';
        var map = L.mapbox.map('map')
            // .setView([43.075124, -89.38639], 30)
            .setView([43.080788, -89.406], 12)
            .addLayer(L.mapbox.tileLayer('mapbox.streets'));
var MLayer = L.mapbox.featureLayer().addTo(map);

MLayer.on('layeradd', function(e) {
    var marker = e.layer,
        feature = marker.feature;

    // Create custom popup content
    var popupContent =  '<a target="_blank"  class="popup" href="' + feature.url + '">' +
                            feature.properties.title +
                        '</a><br>' + feature.properties.description ;
    var popup2 = feature.properties.title
    // http://leafletjs.com/reference.html#popup
    marker.bindPopup(popupContent,{
        closeButton: true,
        className: 'my_popup',
        minWidth: 320
    });
    // marker.on('mouseover', function (e) {
    //     console.log(this);
    //     this.openPopup();
    // });
    // marker.on('mouseout', function (e) {
    //     this.closePopup();
    // });
});

//set GeoJSON data
MLayer.setGeoJSON(DATA);
//add search functionality
var client = L.mapbox.geocoderControl('mapbox.places');
map.addControl(client);

//local vars
var filter;


$('.legend-img').click(function(){
	filterMap(this);
});

var bools = [false, false, false, false, false];
function filterMap (filterNum) {
	var n = parseInt(filterNum.getAttribute('data-select'));
	if (n == 0 || bools[n-1]){
		bools = [false, false, false, false, false];
		n = 0;
	}
	else{
		bools = [false, false, false, false, false];
		bools[n-1] = true;
		$('.legend-img').addClass('greyscale');
		$(filterNum).removeClass('greyscale');
	}


	switch(n){
		case 1:
			var filter = MLayer.setFilter(function(f){
				return (f.properties['marker-color'] === '#004400') ||
					   (f.properties['marker-color'] === '#006600') ||
					   (f.properties['marker-color'] === '#009900') ||
					   (f.properties['marker-color'] === '#00ff00');
			});
			return false;
			break;
		case 2:
			var filter = MLayer.setFilter(function(f){
				return (f.properties['marker-color'] === '#0511b6');
			});
			return false;
			break;
		case 3:
			var filter = MLayer.setFilter(function(f){
				return f.properties['marker-color'] === '#6f00ae';
			});
			return false;
			break;
		case 4:
			var filter = MLayer.setFilter(function(f){
				return f.properties['marker-color'] === '#fdff16';
			});
			return false;
			break;
		case 5:
			var filter = MLayer.setFilter(function(f){
				return f.properties['marker-color'] === '#fb6d14';
			});
			return false;
			break;
		default:
			$('.legend-img').removeClass('greyscale');
			var filter = MLayer.setFilter(function(f){
				return true;
			});
			return false;
			break;
	}

}
