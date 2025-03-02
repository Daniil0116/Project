'use strict'

document.addEventListener('DOMContentLoaded', () => {

    //5. Сообщения пользователю в форме входа
    const button = document.getElementById('log-in__button');

    if (button) {
        console.log('Кнопка существует');

        const email = document.getElementById('log-in__email');
        const pass = document.getElementById('log-in__pass')
        const error_email = document.querySelector('.log-in__email-error');
        const error_pass = document.querySelector('.log-in__pass-error')
        const form = document.getElementById('log-in');

        button.addEventListener('click', function (event) {
            console.log('Click работает');
            event.preventDefault(); 

            if ((email.value === '') && (pass.value === '')) {
                error_email.style.display = 'block'; 
                error_pass.style.display = 'block';
            } else if (pass.value === '') {
                error_email.style.display = 'none'; 
                error_pass.style.display = 'block';
            } else if (email.value === '') {
                error_email.style.display = 'block';
                error_pass.style.display = 'none';
            } else {
                error_email.style.display = 'none'; 
                error_pass.style.display = 'none';
                form.submit();
            }
        });
    }

    console.log('Проверка подключения файла скриптов')
});