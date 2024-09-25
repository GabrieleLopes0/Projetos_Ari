function desenharRetangulo(contexto) {
    contexto.fillStyle = "blue";
    contexto.fillRect(50, 50, 300, 400);
}

function desenharLinha(contexto) {
    contexto.lineWidth = 5;
    contexto.beginPath();
    contexto.strokeStyle = "red";
    contexto.moveTo(100, 200);
    contexto.lineTo(170, 100);
    contexto.lineTo(240, 300);
    contexto.stroke();
}

function desenharCirculo(contexto) {
    contexto.fillStyle = "yellow";
    contexto.beginPath();
    contexto.arc(200, 200, 50, 0, 2 * Math.PI);
    contexto.fill();
}

function movimento(contexto) {
    function animarCirculo(tempo) {
        contexto.clearRect(0, 0, contexto.canvas.width, contexto.canvas.height);

        desenharRetangulo(contexto);
        desenharLinha(contexto);

        contexto.fillStyle = "yellow";
        contexto.beginPath();
        contexto.arc(200, 200, 50 + 25 * Math.sin(tempo / 500), 0, 2 * Math.PI);
        contexto.fill();
        contexto.lineWidth = 2;
        contexto.strokeStyle = "aqua";
        contexto.stroke();

        requestAnimationFrame(animarCirculo);
    }
    requestAnimationFrame(animarCirculo);
}

function desenharTudo() {
    var canvas = document.querySelector("#minhaTela");
    if (canvas.getContext) {
        var contexto = canvas.getContext("2d");
        desenharRetangulo(contexto);
        desenharLinha(contexto);
        desenharCirculo(contexto);
        movimento(contexto);
    }
}

window.onload = desenharTudo;