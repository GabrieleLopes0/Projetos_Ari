
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
            console.log(pos.coords.latitude, pos.coords.longitude);
            console.log(pos.toJSON());
            

            document.getElementById("lat").innerText = pos.coords.latitude;
            document.getElementById("lon").innerText = pos.coords.longitude;

        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }

    navigator.geolocation.getCurrentPosition((pos) => {
        console.log(pos.coords.latitude, pos.coords.longitude);
    });

}

window.onload = getLocation();

// Com Google Maps
// var lat
// var lon
// function getLocation()
// {
//     if (navigator.geolocation) 
//         {
//             return null
//             navigator.geolocation.getCurrentPosition(function(pos)
//             {
//                 lat = document.getElementById("lat").innerText=pos.coords.latitude
//                 lon = document.getElementById("lat").innerText=pos.coords.longitude
//                 initMap()
//             });
//         }
// }
// function initMap()
// {
//     const minhaLocalizacao = {lat: lat, lng:lon};
//     map = new
//     google.maps.Map(document.getElementById("map"),
//     {
//         zoom:15,
//         center: minhaLocalizacao,
//     });

//     const marker = new google.maps.marker(
//         {
//         position: minhaLocalizacao,
//         map:map,
//     });
// }
// getLocation();