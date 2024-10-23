function calculateSquare()
{
    const inputElement = document.getElementById("inputNumber");
    const inputNumber = Number(inputElement.value);
    myWorker.postMessage(inputNumber);
}

const myWorker = new myWorker('myWorker.js');

myWorker.addEventListener('message', function(event)
{
    const square = event.data;
    const resultElement = document.getElementById('result');
    resultElement.textContent = 'O quadrado do número é ' +square;
})