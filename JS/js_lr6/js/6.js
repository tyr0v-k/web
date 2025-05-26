function attachEventsListeners() {
    let buttons = document.querySelectorAll('input[type="button"]');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            let inputType = button.previousElementSibling.id;
            let inputValue = parseFloat(document.getElementById(inputType).value)
            if (isNaN(inputValue) || inputValue < 0) {
                return;
            }
            let days = 0;
            switch(inputType){
                case 'days':
                    days = inputValue / 1;
                    break;
                case 'hours':
                    days = inputValue / 24;
                    break;
                case 'minutes':
                    days = inputValue / 24 / 60;
                    break;
                case 'seconds':
                    days = inputValue / 24 / 60 / 60;
                    break;
            };
            document.getElementById('days').value = days * 1;
            document.getElementById('hours').value = days * 24;
            document.getElementById('minutes').value = days * 24 * 60;
            document.getElementById('seconds').value = days * 24 * 60 * 60;
        });
    });
}