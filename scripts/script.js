'use strict'
document.addEventListener('DOMContentLoaded', () => {

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

    //1. Динамический вывод карточек лучших специалистов 

    const specialistsContainer = document.querySelector('#specialists');

    if (specialistsContainer) {
        const dataPerson = ['Волкова Наталья Сергеевна. Стаж работы 20 лет.', 'Смирнов Виктор Михайлович. Стаж работы 18 лет.',
            'Соколова Анна Владимировна. Стаж работы 6 лет.'
        ];

        const descriptionBlocks = specialistsContainer.querySelectorAll('.person-block__block-description');

        descriptionBlocks.forEach((item, index) => {
            item.textContent = dataPerson[index];
        });
    }

    // 2. Динамический вывод карточек отзывов

    const reviewsContainer = document.querySelector('#reviews');
    
    if (reviewsContainer) {
        const dataAuthorReviews = ['Марина Белова', 'Светлана Ковалёва', 'Елена Федорова'];
        const dataTextReviews = ['Я очень довольна работой логопеда в этом центре. Мой сын значительно улучшил свою речь за короткий срок. Специалист подошёл к занятиям с большой заботой и вниманием. Рекомендуем!',
            'Спасибо всем сотрудникам за помощь нашей дочери. После курса занятий мы заметили огромный прогресс. Обязательно вернемся для дальнейшей работы.',
            'Меня впечатлила высокая квалификация специалистов. Здесь работают настоящие профессионалы своего дела, у которых большой опыт. Занятия проходят в игровой форме, что очень подходит для детей. Спасибо за вашу работу!'
        ];
        const authorBlocks = reviewsContainer.querySelectorAll('.review-author');
        const textBlocks = reviewsContainer.querySelectorAll('.review-text');
        authorBlocks.forEach((item, index) => {
            item.textContent = dataAuthorReviews[index];
        });
        textBlocks.forEach((item,index) => {
            item.textContent = dataTextReviews[index];
        });
    }



    //5. Scroll up

    const scrollUpButton = document.querySelector('.scroll-up');

    if (scrollUpButton) {
        const windowHeight = document.documentElement.clientHeight;

        document.addEventListener('scroll', () => {
            let scrollPageY = this.scrollY;

            if (scrollPageY >= windowHeight) {
                scrollUpButton.style.display = 'block';
            } else {
                scrollUpButton.style.display = 'none';
            }
        });

        scrollUpButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    console.log('Проверка подключения файла скриптов')
});

