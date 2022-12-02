let markers, map;

function initMap() 
{
  const posicion = 
  {
    lat: -25.363,
    lng: 131.044,
  };

  map = new google.maps.Map
  (document.getElementById("map"), 
  {
    zoom: 4,
    center: posicion,
  }
  );

  markers.push
  (
    new google.maps.Marker
    ({
      position: 
      {
        lat: 19.001194208664046,
        lng: -98.21468857155926,
      },  
      map,
      title: "Mi casa",
    })
  );
  markers.push
  (
    new google.maps.Marker
    ({
      position: 
      {
        lat: 19.043732, 
        lng: -98.198023,
      },
      map,
      title: "Centro Pue",
    })
  );
  markers.push
  (
    new google.maps.Marker
    ({
      position: 
      {
        lat: 19.05778367086133, 
        lng: -98.18157403325665,
      },
      map,
      title: "Museo de la Evolucion Pue",
    })
  );
}