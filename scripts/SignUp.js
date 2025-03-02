'use strict'

document.addEventListener('DOMContentLoaded', () => {

    //5. Сообщения пользователю в форме регистрации

    const button = document.getElementById('sign-up__button');

    if (button) {
        const error = document.querySelector('.sign-up__error');
        const surname = document.getElementById('sign-up__surname');
        const name = document.getElementById('sign-up__name');
        const patronymic = document.getElementById('sign-up__patronymic');
        const email = document.getElementById('sign-up__email');
        const pass = document.getElementById('sign-up__pass');

        button.addEventListener('click', function (event) {
            event.preventDefault();

            if ((surname.value === '') || (name.value === '') || (patronymic.value === '') || (email.value === '') || (pass.value === '')) {
                error.style.display = 'block';
                button.style.marginTop = '4%'
            } else {
                error.style.display = 'none';
                form.submit();
            }

        });
    }
});