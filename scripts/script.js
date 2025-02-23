'use strict'
document.addEventListener("DOMContentLoaded", () => {

    /*3. Валидация отправки формы вопросов
    Алгоритм
    1. Начало 
    2. Получаем значение поля textarea
    3. Проверка условия (навешиваем слушатель событий на click): если кнопка нажата
        3.1 Да: Сравниваем значение поля textarea с пустым, если пустое:
            3.1.1 Да: меняем свойство блока form-field-error на display: block.
            3.1.2 Нет: Свойство блока form-field-error - display: none.
        3.2 Нет: конец.
    4. Конец
    
    Блок-схема: /img/Block-schema.png*/
    const button = document.getElementById('questions-buttons');

    if (button) {
        console.log('Кнопка существует');

        const field = document.getElementById('form-field');
        const error = document.querySelector('.form-field-error');
        const form = document.getElementById('questions');

        button.addEventListener('click', function (event) {
            console.log('Click работает');
            event.preventDefault(); // Предотвращаем стандартное поведение кнопки

            if (field.value === '') {
                error.style.display = 'block'; 
            } else {
                error.style.display = 'none';
                form.submit();
            }
        });
    }

    console.log("Проверка подключения файла скриптов")
});