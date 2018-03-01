jQuery(document).ready(function(){

	// CAROUSEL
	var $ = jQuery;
	var $carousel = $('#top-carousel');
	if($carousel.find('.carousel-inner > .item').size() <= 1) {
		$carousel.find('.carousel-control').remove();
		$carousel.find('.carousel-indicators').remove();
	}

	$carousel.find('.carousel-inner > .item').each(function(i) {
		(i === 0) ? $carousel.find('.carousel-indicators').append("<li data-target='#"+$carousel.attr('id')+"' data-slide-to='"+i+"' class='active'></li>") : $carousel.find('.carousel-indicators').append("<li data-target='#"+$carousel.attr('id')+"' data-slide-to='"+i+"'></li>");
		var src = $(this).find('img').attr('src');
		if(src) {
			$(this).css('background','url('+src+')');
		}
	});
	$carousel.find('.carousel-inner > .item').first().addClass('active');

	// NAVBAR
	$( '.top-header .navbar-nav a' ).on( 'click', function () {
		$( '.top-header .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
		$( this ).parent( 'li' ).addClass( 'active' );
	});

	// CENTER ELEMENTS
	$('.hc-content').each(function() {
		$(this).css({ 'top': '50%', 'margin-top': -($(this).height() / 2) });
	});

});

// GOOGLE MAPS
function initMap() {
	var myLatLng = {lat: 23.7805718, lng: 90.4172313};

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: myLatLng,
		disableDefaultUI: true,
		styles: [
		{
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#f5f5f5"
			}
			]
		},
		{
			"elementType": "labels.icon",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#616161"
			}
			]
		},
		{
			"elementType": "labels.text.stroke",
			"stylers": [
			{
				"color": "#f5f5f5"
			}
			]
		},
		{
			"featureType": "administrative.land_parcel",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#bdbdbd"
			}
			]
		},
		{
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#eeeeee"
			}
			]
		},
		{
			"featureType": "poi",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#757575"
			}
			]
		},
		{
			"featureType": "poi.park",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#e5e5e5"
			}
			]
		},
		{
			"featureType": "poi.park",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#9e9e9e"
			}
			]
		},
		{
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#ffffff"
			}
			]
		},
		{
			"featureType": "road.arterial",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#757575"
			}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#dadada"
			}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#616161"
			}
			]
		},
		{
			"featureType": "road.local",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#9e9e9e"
			}
			]
		},
		{
			"featureType": "transit.line",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#e5e5e5"
			}
			]
		},
		{
			"featureType": "transit.station",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#eeeeee"
			}
			]
		},
		{
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#c9c9c9"
			}
			]
		},
		{
			"featureType": "water",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#9e9e9e"
			}
			]
		}
		]
	});

	// var marker = new google.maps.Marker({
	// 	position: myLatLng,
	// 	map: map,
	// 	title: "We're Here!",
	// 	icon: 'none'
	// });
}