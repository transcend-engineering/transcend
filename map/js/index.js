L.mapbox.accessToken = 'pk.eyJ1IjoibWZpeDIyIiwiYSI6IjZmNDIwZGZkOWI1ZDgwY2VkNGRkOTVjNjcwMTMxMDEyIn0.QnJDKEfnvhw8u0zVtWVRiw';
        var map = L.mapbox.map('map', 'mapbox.streets')
            .setView([43.080788, -89.406], 12);	
var MLayer = L.mapbox.featureLayer(DATA).addTo(map);
var client = L.mapbox.geocoderControl('mapbox.places');
map.addControl(client);
var filter;

$('.legend-img').click(function(){
	// console.log(this.getAttribute('data-select'));
	filterMap(this.getAttribute('data-select'));
});

function filterMap (filterNum) {
	switch(filterNum){
		case '1':
			var filter = MLayer.setFilter(function(f){
				console.log('here');
				return (f.properties['marker-color'] === '#004400') ||
					   (f.properties['marker-color'] === '#006600') ||
					   (f.properties['marker-color'] === '#009900') ||
					   (f.properties['marker-color'] === '#00ff00');
			});
			return false;
			break;
		case '2':
			var filter = MLayer.setFilter(function(f){
				return (f.properties['marker-color'] === '#0511b6');
			});
			return false;
			break;
		case '3':
			var filter = MLayer.setFilter(function(f){
				return f.properties['marker-color'] === '#6f00ae';
			});
			return false;
			break;
		case '4':
			var filter = MLayer.setFilter(function(f){
				return f.properties['marker-color'] === '#fdff16';
			});
			return false;
			break;
		case '5':
			var filter = MLayer.setFilter(function(f){
				return f.properties['marker-color'] === '#fb6d14';
			});
			return false;
			break;
		default:
			var filter = MLayer.setFilter(function(f){
				return true;
			});
			return false;
			break;
	}

}