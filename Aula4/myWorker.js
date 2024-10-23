self.addEventListener('message', function(event)
{
    const inputNumber = event.data;
    const square = inputNumber * inputNumber;
    this.self.postMessage(square);
});