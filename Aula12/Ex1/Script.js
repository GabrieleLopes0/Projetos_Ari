window.onload = function () {
    const url = 'https://swapi.dev/api/planets/';
    var planetas = document.getElementById('planetas');
    
    planetas.onchange = function() 
    {
        function obterDados() {
            fetch(url + planeta)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erro na requisição: ' + response.status);
                    }
                    return response.json();
                })
                .then(data => {
                    var resultado = '<h1>Dados obtidos com sucesso:</h1>' +
                                    '<p>O nome do planeta é ' + data.name +
                                    ', sua população é composta por ' + data.population +
                                    ', e seu clima é ' + data.climate + '</p>';

                    document.getElementById('resultadoPlaneta').innerHTML = resultado;
                })
                .catch(error => {
                    console.error('Erro ao obter dados:', error);
                });
        }
        obterDados();
    }
};
