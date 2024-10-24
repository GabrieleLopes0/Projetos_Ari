let API = "https://jsonplaceholder.typicode.com/posts";

let resultado;

document.getElementById("btn").addEventListener('click', (e) => {


    fetch(API)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            resultado = data;

            data.forEach(element => {
                let div = document.createElement('div');
                div.style.border = '1px solid #000';
                div.style.margin = '10px';
                div.style.padding = '10px';
                div.style.borderRadius = '20px';
                let h2 = document.createElement('h2');
                h2.innerHTML = element.title;
                let p = document.createElement('p');
                p.innerHTML = element.body;

                div.appendChild(h2);
                div.appendChild(p);

                document.getElementById('resultado').appendChild(div);
            });
        });
});
