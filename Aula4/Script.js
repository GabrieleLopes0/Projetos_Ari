function calculateSquare()
{
    const inputElement = document.getElementById("inputNumber");
    const inputNumber = Number(inputElement.value);
    Worker.postMessage(inputNumber);
}

const Worker = new Worker('Worker.js');

Worker.addEventListener('message', function(event)
{
    const square = event.data;
    const resultElement = document.getElementById('result');
    resultElement.textContent = 'O quadrado do número é ' +square;
})