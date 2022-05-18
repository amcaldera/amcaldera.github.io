var map;
        var x;
        function loadmaps(){
            $.getJSON("https://api.thingspeak.com/channels/1690392/fields/1/last.json?api_key=UUKYCNZYHWOJNOK5", function(result){
        	
            var m = result;
            x=Number(3.3467);
                           alert(x);

        });
            $.getJSON("https://api.thingspeak.com/channels/1690392/fields/2/last.json?api_key=Your_UUKYCNZYHWOJNOK5", function(result){
        	
            var m = result;
            y=Number(m.field2);
                
                
        }).done(function() {
            
                initialize();
        });
            
        }
        
        window.setInterval(function(){
          loadmaps();
              }, 1000);

      function initialize() {
          alert(y);
        var mapOptions = {
          zoom: 18,
          center: {lat: x, lng: y}
        };
        map = new google.maps.Map(document.getElementById('map'),
            mapOptions);

        var marker = new google.maps.Marker({
          position: {lat: x, lng: y},
          map: map
        });

        var infowindow = new google.maps.InfoWindow({
          content: '<p>Marker Location:' + marker.getPosition() + '</p>'
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map, marker);
        });
      }

      google.maps.event.addDomListener(window, 'load', initialize);