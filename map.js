// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
var map, infoWindow;
var myLatLng = {
    lat: 51.0450,
    lng: -114.0611
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 11,
        mapTypeControl: true,
        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
        }
    });
    infoWindow = new google.maps.InfoWindow;
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Glenbow Museum'
    });
    var marker2 = new google.maps.Marker({
        position: {
            lat: 51.0443,
            lng: -114.0631
        },
        map: map,
        title: 'Calgary Tower'
    });
    var marker3 = new google.maps.Marker({
        position: {
            lat: 51.0459,
            lng: -114.0237
        },
        map: map,
        title: 'Calgary Zoo'
    });

    var marker4 = new google.maps.Marker({
        position: {
            lat: 51.0539,
            lng: -114.0244
        },
        map: map,
        title: 'Telus Spark'
    });

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
                var accuracy = position.coords.accuracy;
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,

                };

                infoWindow.setPosition(pos);
                infoWindow.setContent('<b style="background-color:blue;color:white"> You are here');
                infoWindow.open(map);
                map.setCenter(pos);
            },
            function() {
                handleLocationError(true, infoWindow, map.getCenter());
            });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}