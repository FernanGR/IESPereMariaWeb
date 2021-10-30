var map;

 function initMap() {

   //map = new google.maps.Map(document.getElementById("mapa"), {
     map = new google.maps.Map(document.getElementById("mapa"), {

    center: {lat: 38.5537, lng:-0.1208},
    zoom: 14, mapTypeId: 'roadmap'
  });


  var marker1 = new google.maps.Marker({position:  {lat:  38.5537, lng: -0.1208}, map: map,  animation: google.maps.Animation.DROP });

 }
