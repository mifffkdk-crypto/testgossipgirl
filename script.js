// --- 1. Генерация фоновых надписей XOXO (из правого верхнего в левый нижний) ---
const xoxoContainer = document.getElementById('xoxo-bg');
for (let i = 0; i < 15; i++) {
    const div = document.createElement('div');
    div.className = 'xoxo-item';
    div.textContent = 'XOXO';
    
    // Стартуем справа (от 95vw до 140vw) и сверху (от -20vh до 50vh)
    const startX = 90 + Math.random() * 50;
    const startY = -20 + Math.random() * 70;
    
    const duration = 12 + Math.random() * 10;
    const delay = Math.random() * 12;
    const fontSize = 16 + Math.random() * 22;

    div.style.left = `${startX}vw`;
    div.style.top = `${startY}vh`;
    div.style.animationDuration = `${duration}s`;
    div.style.animationDelay = `-${delay}s`;
    div.style.fontSize = `${fontSize}px`;

    xoxoContainer.appendChild(div);
}

// --- 2. Генерация золотых мерцающих блестяшек (1px) ---
const sparklesContainer = document.getElementById('sparkles-bg');
for (let i = 0; i < 70; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${Math.random() * 100}vw`;
    sparkle.style.top = `${Math.random() * 100}vh`;
    sparkle.style.animationDuration = `${1 + Math.random() * 2.5}s`;
    sparkle.style.animationDelay = `${Math.random() * 2}s`;
    sparklesContainer.appendChild(sparkle);
}

// --- 3. Полный массив из 20 вопросов с индивидуальными ссылками на картинки ---
const questions = [
    {
        question: "1. Какое место на Манхэттене выберете для утреннего кофе?",
        image: "https://avatars.mds.yandex.net/i?id=30de64768b807a39d047d2c96fddb47a49373e66-7045478-images-thumbs&n=13",
        options: [
            { text: "Уютное кафе рядом с Центральным парком", result: "serena" },
            { text: "Элитная кофейня на Верхнем Ист-Сайде", result: "blair" },
            { text: "Закрытый бар в отеле Empire", result: "chuck" },
            { text: "Небольшая кофейня в Бруклине", result: "dan" }
        ]
    },
    {
        question: "2. Ваш любимый осенний элемент одежды:",
        image: "https://avatars.mds.yandex.net/i?id=4f4ca3d166716753d762a23d11690e34d8a6c28a-5876168-images-thumbs&n=13",
        options: [
            { text: "Легкое пальто с распущенными волосами", result: "serena" },
            { text: "Элегантный ободок и брендовый костюм", result: "blair" },
            { text: "Строгий костюм-тройка с идеальным платком", result: "chuck" },
            { text: "Потертое теплое пальто и шарф", result: "dan" }
        ]
    },
    {
        question: "3. Как вы проводите вечера пятницы?",
        image: "https://avatars.mds.yandex.net/i?id=5869e8095613dae22e81d265e79e6178c305530d-5583556-images-thumbs&n=13",
        options: [
            { text: "На самой громкой и стильной вечеринке сезона", result: "serena" },
            { text: "Планирую грандиозное мероприятие и список гостей", result: "blair" },
            { text: "Заключаю миллионную сделку в приватной зоне клуба", result: "chuck" },
            { text: "Пишу новую главу своего романа под джаз", result: "dan" }
        ]
    },
    {
        question: "4. Ваше отношение к социальным сетям и сплетням:",
        image: "https://avatars.mds.yandex.net/i?id=acfe86cbca722b914f4f0a7dc0d4e40fcbb9dbc9-5100139-images-thumbs&n=13",
        options: [
            { text: "Стараюсь не обращать внимания, но меня все обсуждают", result: "serena" },
            { text: "Контролирую каждую деталь того, что обо мне говорят", result: "blair" },
            { text: "Использую информацию как рычаг влияния", result: "chuck" },
            { text: "Иронично наблюдаю со стороны за этим цирком", result: "dan" }
        ]
    },
    {
        question: "5. Идеальный спутник для осенней прогулки:",
        image: "https://avatars.mds.yandex.net/i?id=6913dc79cd4b7d564121df8a7ca5898c127c43d6-5500501-images-thumbs&n=13",
        options: [
            { text: "Тот, кто разделяет мою жажду спонтанных приключений", result: "serena" },
            { text: "Человек равного мне статуса и амбиций", result: "blair" },
            { text: "Единственная женщина, ради которой я готов измениться", result: "chuck" },
            { text: "Интеллектуал, с которым можно часами говорить о литературе", result: "dan" }
        ]
    },
    {
        question: "6. Что для вас значит понятие «власть»?",
        image: "https://avatars.mds.yandex.net/i?id=54e260a7277a2756181cfc029e6d78c6376fb5d9-12421110-images-thumbs&n=13",
        options: [
            { text: "Она мне неинтересна, я предпочитаю свободу", result: "serena" },
            { text: "Абсолютный контроль над школой, обществом и судьбами", result: "blair" },
            { text: "Финансовая империя, которая подчиняет себе город", result: "chuck" },
            { text: "Власть слова и возможность донести правду до людей", result: "dan" }
        ]
    },
    {
        question: "7. Как вы реагируете на предательство близкого человека?",
        image: "https://avatars.mds.yandex.net/i?id=b6b21db8bb32c0157480f73a18a5236beb8e34c0-4384990-images-thumbs&n=13",
        options: [
            { text: "Пытаюсь понять и простить, ведь все мы ошибаемся", result: "serena" },
            { text: "Готовлю изощренный план мести, который запомнят надолго", result: "blair" },
            { text: "Закрываюсь в себе и наношу ответный удар вдвойне больнее", result: "chuck" },
            { text: "Разочарованно отстраняюсь и делаю выводы", result: "dan" }
        ]
    },
    {
        question: "8. Ваша любимая осенняя локация в Нью-Йорке:",
        image: "https://avatars.mds.yandex.net/i?id=a071478024be327f0e7bdd05c791682e64c0a0a2-4876323-images-thumbs&n=13",
        options: [
            { text: "Ступени музея Метрополитен под лучами солнца", result: "serena" },
            { text: "Элитные бутики на Пятой авеню", result: "blair" },
            { text: "Мрачный и роскошный пентхаус на Манхэттене", result: "chuck" },
            { text: "Тихие улочки старого Бруклина", result: "dan" }
        ]
    },
    {
        question: "9. Какой напиток согреет вас холодным вечером?",
        image: "https://avatars.mds.yandex.net/i?id=1b4ccab9d6eb8c63faf4e29682c890bd0b076a50-12496607-images-thumbs&n=13",
        options: [
            { text: "Свежий фруктовый фреш или легкий коктейль", result: "serena" },
            { text: "Изысканный горячий шоколад с корицей", result: "blair" },
            { text: "Элитный шотландский виски выдержки 25 лет", result: "chuck" },
            { text: "Крепкий черный кофе из любимой кофейни у дома", result: "dan" }
        ]
    },
    {
        question: "10. Какую книгу или журнал выберете для чтения?",
        image: "https://avatars.mds.yandex.net/i?id=6f722f7c08b78adfec4c32b1b0056303b08ad09b-5389050-images-thumbs&n=13",
        options: [
            { text: "Яркий глянец о путешествиях и моде", result: "serena" },
            { text: "Биографии великих правителей и исторические романы", result: "blair" },
            { text: "Деловая литература по управлению активами", result: "chuck" },
            { text: "Классическая проза или глубокий поэтический сборник", result: "dan" }
        ]
    },
    {
        question: "11. Ваша главная жизненная амбиция:",
        image: "https://avatars.mds.yandex.net/i?id=96da7d11aa2bb2051fe1da96f910a5f9321d95c0-12371092-images-thumbs&n=13",
        options: [
            { text: "Найти гармонию с собой и внутреннее счастье", result: "serena" },
            { text: "Поступить в Йель и стать иконой высшего света", result: "blair" },
            { text: "Превзойти успех отца и построить свою империю", result: "chuck" },
            { text: "Написать бестселлер, который изменит литературу", result: "dan" }
        ]
    },
    {
        question: "12. Как вы относитесь к правилам в обществе?",
        image: "https://avatars.mds.yandex.net/i?id=3df1e9b1aca2fc19eedefc0ad4b26f2e343da067-12463602-images-thumbs&n=13",
        options: [
            { text: "Правила существуют для того, чтобы их иногда нарушать ради драйва", result: "serena" },
            { text: "Правила устанавливаю я, и все обязаны им подчиняться", result: "blair" },
            { text: "Законы написаны для слабых, сильные их обходят", result: "chuck" },
            { text: "Правила часто лицемерны, я предпочитаю честность", result: "dan" }
        ]
    },
    {
        question: "13. Какая черта характера преобладает в вас?",
        image: "https://avatars.mds.yandex.net/i?id=8da25e9f34d19f69f1a27d0fd70173762802e454-7546766-images-thumbs&n=13",
        options: [
            { text: "Харизма и естественное обаяние", result: "serena" },
            { text: "Целеустремленность и безупречный вкус", result: "blair" },
            { text: "Загадочность и железная деловая хватка", result: "chuck" },
            { text: "Наблюдательность и тонкая ирония", result: "dan" }
        ]
    },
    {
        question: "14. Ваш идеальный способ расслабиться после стресса:",
        image: "https://avatars.mds.yandex.net/i?id=48771414dd700a9349755363e6d30cb3905f71c9-5235576-images-thumbs&n=13",
        options: [
            { text: "Спонтанная поездка за город на выходные", result: "serena" },
            { text: "День в элитном спа-салоне с подругами", result: "blair" },
            { text: "Игра в покер в закрытом клубе до рассвета", result: "chuck" },
            { text: "Уединение с любимым ноутбуком и чашкой чая", result: "dan" }
        ]
    },
    {
        question: "15. Ваше отношение к роскоши и дорогим вещам:",
        image: "hhttps://avatars.mds.yandex.net/i?id=4139dcadacd420b85ed5cffed161c1bb12230019-5271165-images-thumbs&n=13",
        options: [
            { text: "Это приятно, но не самое главное в жизни", result: "serena" },
            { text: "Роскошь подчеркивает мой статус настоящей королевы", result: "blair" },
            { text: "Я могу позволить себе абсолютно всё, что захочу", result: "chuck" },
            { text: "Предпочитаю скромность и душевное богатство", result: "dan" }
        ]
    },
    {
        question: "16. Что для вас значит любовь?",
        image: "https://avatars.mds.yandex.net/i?id=12e9915147c8924675e7ccd99a39745f-4476821-images-thumbs&n=13",
        options: [
            { text: "Красивое и захватывающее приключение полного страсти", result: "serena" },
            { text: "Великий союз двух равных и сильных личностей", result: "blair" },
            { text: "Единственное спасение от моей внутренней тьмы", result: "chuck" },
            { text: "Искреннее сближение душ без светской фальши", result: "dan" }
        ]
    },
    {
        question: "17. Какой подарок вы бы оценили больше всего?",
        image: "https://avatars.mds.yandex.net/i?id=2c093f3124065439ef8a71e7ddf53f7942f89d4b-12658662-images-thumbs&n=13",
        options: [
            { text: "Неожиданный билет на самолет в экзотическую страну", result: "serena" },
            { text: "Эксклюзивное платье из новой коллекции кутюр", result: "blair" },
            { text: "Ключи от нового роскошного отеля или клуба", result: "chuck" },
            { text: "Редкое коллекционное издание любимого поэта", result: "dan" }
        ]
    },
    {
        question: "18. Как вы справляетесь с провалами?",
        image: "https://avatars.mds.yandex.net/i?id=ee47f38cc2cc10ec4e046f3b57c3720054f2133b-4348031-images-thumbs&n=13",
        options: [
            { text: "Переворачиваю страницу и начинаю жизнь с чистого листа", result: "serena" },
            { text: "Злюсь, но тут же разрабатываю план реванша", result: "blair" },
            { text: "Анализирую ошибку и выхожу победителем из тени", result: "chuck" },
            { text: "Превращаю неудачу в материал для размышлений", result: "dan" }
        ]
    },
    {
        question: "19. Какую роль вы обычно играете в компании?",
        image: "https://avatars.mds.yandex.net/i?id=980357325a9e1b3e578c3c068d28de256b146a0c-4824090-images-thumbs&n=13",
        options: [
            { text: "Любимица публики, за которой все идут", result: "serena" },
            { text: "Бессменный лидер и строгий организатор", result: "blair" },
            { text: "Серый кардинал, контролирующий всё изнутри", result: "chuck" },
            { text: "Внимательный аналитик и критик", result: "dan" }
        ]
    },
    {
        question: "20. Финальный аккорд вашей идеальной осени в Нью-Йорке:",
        image: "https://avatars.mds.yandex.net/i?id=4dddcf3c2ce89fed77fffd6b8682447e456ab41e-5645067-images-thumbs&n=13",
        options: [
            { text: "Яркий закат над мостом и ощущение свободы", result: "serena" },
            { text: "Триумфальная победа на главном балу сезона", result: "blair" },
            { text: "Обретение семьи и верности под вспышки камер", result: "chuck" },
            { text: "Выход в свет моей первой книги воспоминаний", result: "dan" }
        ]
    }
];

// --- 4. Результаты с возможностью вставки своих ссылок на фотографии ---
const resultsData = {
    serena: {
        title: "Серена ван дер Вудсен ✨",
        desc: "Вы — душа компании, яркая и притягательная звезда Манхэттена. Вас обожают все вокруг, хотя сами вы порой просто хотите найти внутренний покой, искренность и гармонию.",
        img: "https://avatars.mds.yandex.net/i?id=8273f4bb84fb8f9d290bb74b5963696cd119c3de-5172151-images-thumbs&n=13"
    },
    blair: {
        title: "Блэр Уолдорф 👑",
        desc: "Истинная королева Верхнего Ист-Сайда. Вы амбициозны, невероятно умны, обладаете безупречным вкусом и никогда не отступаете от своих грандиозных и амбициозных целей.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Leighton_Meester_2011.jpg/640px-Leighton_Meester_2011.jpg"
    },
    chuck: {
        title: "Чак Басс 🍸",
        desc: "Харизматичный наследник империи Бассов. За маской циника, любителя роскоши и ночной жизни скрывается человек, способный на самую глубокую, преданную и сильную любовь.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Ed_Westwick_2012.jpg/640px-Ed_Westwick_2012.jpg"
    },
    dan: {
        title: "Дэн Хамфри ☕",
        desc: "Парень из Бруклина, тонкий наблюдатель и писатель. Вы цените искренность превыше фальшивого блеска светской тусовки и умеете видеть истинную суть вещей.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Penn_Badgley_2023.jpg/640px-Penn_Badgley_2023.jpg"
    }
};

let currentQuestion = 0;
let userScores = { serena: 0, blair: 0, chuck: 0, dan: 0 };

function startTest() {
    document.getElementById('start-screen').classList.remove('active');
    document.getElementById('quiz-screen').classList.add('active');
    currentQuestion = 0;
    userScores = { serena: 0, blair: 0, chuck: 0, dan: 0 };
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('question-text').textContent = q.question;
    document.getElementById('question-img').src = q.image; // Подстановка ссылки на картинку текущего вопроса
    
    const progressPercent = (currentQuestion / questions.length) * 100;
    document.getElementById('progress').style.width = `${progressPercent}%`;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt.text;
        btn.onclick = () => selectOption(opt.result);
        optionsContainer.appendChild(btn);
    });
}

function selectOption(resultKey) {
    userScores[resultKey]++;
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz-screen').classList.remove('active');
    document.getElementById('result-screen').classList.add('active');

    let bestMatch = 'serena';
    let maxScore = -1;
    for (let key in userScores) {
        if (userScores[key] > maxScore) {
            maxScore = userScores[key];
            bestMatch = key;
        }
    }

    const res = resultsData[bestMatch];
    document.getElementById('result-title').textContent = res.title;
    document.getElementById('result-desc').textContent = res.desc;
    document.getElementById('result-img').src = res.img; // Подстановка ссылки на картинку результата
}

function restartTest() {
    document.getElementById('result-screen').classList.remove('active');
    document.getElementById('start-screen').classList.add('active');
}