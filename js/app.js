function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('i think we got this number',pin);
        return getPin();
    }
}

function generatePin() {
    
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad'
).addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('type-numbers');
    if (isNaN(number)) {
        console.log(number);
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        
    
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;

    }
});


function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('type-numbers').value;

    const successMeg = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if (pin == typedNumber) {
        
        failError.style.display = 'none';
        successMeg.style.display = 'block';
    }
    else {
        successMeg.style.display = 'none';
        failError.style.display = 'block';
    }
}