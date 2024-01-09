document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const label1 = document.getElementById('label1');
    const label2 = document.getElementById('label2');
    const button2 = document.getElementById('button2');

    function checkInputs() {
        return usernameInput.value.trim() !== '' && passwordInput.value.trim() !== '';
    }

    function updateButtonStyle() {
        if (checkInputs()) {
            button2.style.backgroundColor = 'yellow';
            button2.style.color = 'black';
        } else {
            button2.style.backgroundColor = '#BBBBBB';
            button2.style.color = 'white';
        }
    }

    usernameInput.addEventListener('input', function() {
        if (this.value.trim() !== '') {
            label1.classList.remove('hide');
        } else {
            label1.classList.add('hide');
        }
        updateButtonStyle();
    });

    passwordInput.addEventListener('input', function() {
        if (this.value.trim() !== '') {
            label2.classList.remove('hide2');
        } else {
            label2.classList.add('hide2');
        }
        updateButtonStyle();
    });

    updateButtonStyle(); 
});
