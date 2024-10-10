
window.onload = function () {
    var url = "http://api.openweathermap.org/data/2.5/weather?";
    var minhaAPI = "7b5fdc0a857297864aae8cfab4e46ce9";
    var resultado;
    var cidade;
    var cidades = document.getElementById('cidades');
    cidades.onchange = function () 
    {
        var ajax = null;
        if (window.XMLHttpRequest) {
            ajax = new XMLHttpRequest();
        }
        else if (window.ActiveXObject) {
            ajax = new ActiveXObject("Msxml2.XMLHTTP");
        }

        cidade = cidades.value;

        if (cidade != 0) {
            ajax.open("GET", url + 'appid=' + minhaAPI + '&q=' + cidade + '&units=metric&lang=pt', true);
            ajax.send(null);

            ajax.onreadystatechange = function () {
                if (ajax.readyState == 4 && ajax.status == 200) {
                    resultado = JSON.parse(ajax.responseText);
                    console.log(resultado);

                    var resultadoHTML = "<h2>Clima em " + resultado.name + "</h2>";
                    resultadoHTML += "<p>Temperatura minima: " + resultado.main.temp_min + "&deg;C</p>"
                    resultadoHTML += "<p>Temperatura maxima: " + resultado.main.temp_max + "&deg;C</p>"
                    resultadoHTML += "<p>Condição: " + resultado.weather[0].description + "</p>"

                    document.getElementById('resultadoClima').innerHTML = resultadoHTML;
                }
            }
        }
    }
}
