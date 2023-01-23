const buttons = document.querySelectorAll('button');
const display = document.querySelector('#display');
const allowedChars = '0123456789.+-*/00';

buttons.forEach(button => {
    button.addEventListener('click', event => {
        const value = event.target.textContent;
        if (allowedChars.indexOf(value) !== -1) {

            display.value += value;
        } else if (value === 'c') {

            display.value = '';
        } else if (value === '=') {

            try {

                display.value = new Function("return " + display.value)();
            } catch (error) {

                display.value = 'Error';
            }
        } else if (value === '⌫') {

            display.value = display.value.slice(0, -1);
        } else if (value === '%') {

            try {
                display.value = new Function("return " + display.value + " / 100")() + "%";
            } catch (error) {
                display.value = 'Error';
            }
        }
    });
});




