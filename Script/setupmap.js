function initMap() {
    let mapdata = {};
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: myLatLng,
        mapTypeId: 'hybrid'
    });
    var polygonarea = new geoXML3.parser({
        map: map,
        zoom: false
    });
    polygonarea.parse('Area/Myplace.kml');

    setTimeout(() => {
        map.setZoom(9.5);
        map.setCenter(myLatLng);
    }, 2000);

    $.post('PHP/Select.php', function() {}).done(function(data) {
        let mapdata = JSON.parse(data);
        for (let i = 0; i < mapdata.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(mapdata[i][0], mapdata[i][1]),
                map: map
            });
        }

    }, "json");
}
