const citiesSelect = document.getElementById('city');
        const schoolsSelect = document.getElementById('school-name');

        const schoolsByCity = {
            "Алеково": ["Основно училище \"Христо Ботев\""],
            "Асеново": ["Основно училище \"Св.Св.Кирил и Методий\""],
            "Балван": ["ОУ \"Св. Иван Рилски\""],
            "Батак": ["Основни училище \"Св.св. Кирил и Методий\""],
            "Беброво": ["Основно училище \"Христо Ботев\""],
            "Бяла черква": ["Основно училище \"Бачо Киро\""],
            "Велико Търново": [
                "Основно училище \"Св. Патриарх Евтимий\"",
                "Основно училище \"Петко Р. Славейков\"",
                "Основно училище \"Димитър Благоев\"",
                "Основно училище \"Бачо Киро\"",
                "Основно училище \"Христо Ботев\"",
                "Спортно училище - гр. Велико Търново",
                "Средно  училище \"Владимир Комаров\"",
                "Средно  училище \"Вела Благоева\"",
                "Средно училище \"Георги Раковски\"",
                "Средно училище \"Емилиян Станев\"",
                "Природо-математическа гимназия \"Васил Друмев\"",
                "Профилирина езикова гимназия \"Проф. д-р Асен Златаров\"",
                "Профилирана Хуманитарна Гимназия \"Св. Св. Кирил и Методий\"",
                "Професионална гимназия по строителство, архитектура и геодезия \"Ангел Попов\"",
                "Професионална гимназия по туризъм \"Д-р Васил Берон\"",
                "Старопрестолна професионална гимназия по икономика \"Д-р Петър Аладжов\"",
                "Професионална гимназия по електроника \"Александър Степанович Попов\"",
                "Частна профилирана гимназия Американски Колеж - АРКУС"

            ],
            "Виноград": ["Основно училище \"Свети Климент Охридски\""],
            "Водолей": ["Основно училище \"Христо Смирненски\""],
            "Върбица": ["Основно училище \"Васил Левски\""],
            "Върбовка": ["Основно училище \"Филип Тотю\""],
            "Горна Оряховица": [
                "Основно училище \"Иван Вазов\"",
                "Основно училище \"Св. Паисий Хилендарски\"",
                "Основно училище \"Свети свети Кирил и Методий\"",
                "Средно  училище \"Георги Измирлиев\"",
                "Средно училище \"Вичо Грънчаров\""
            ],
            "Горско Ново село": ["Основно училище \"Христо Ботев\""],
            "Дебелец": ["Основно училище \"Д-р Петър Берон\""],
            "Джулюница": [
                "Основно училище \"Петко Рачев Славейков\"",
            ],
            "Долна Оряховица": [
                "Основно училище \"Св. св. Кирил и Методий\"",
            ],
            "Драганово": [
                "Основно училище \"Климент Охридски\"",
            ],
            "Елена": [
                "Начално училище \"Иларион Макариополски\"",
                "Средно училище \"Иван Николов Момчилов\""
            ],
            "Златарица": ["Средно училище  \"Св. св. Кирил и Методий\""],
            "Камен": ["Средно училище \"Св. Климент Охридски\""],
            "Караисен": ["Основно училище \"Хаджи Димитър и Стефан Караджа\""],
            "Кесарево": ["Основно училище \"Николай Райнов\""],
            "Килифарево": ["Основно училище \" Неофит Рилски \""],
            "Константин": ["Основно училище \"Отец Паисий\""],
            "Леденик": ["Основно училище \"Васил Левски\""],
            "Лясковец": [
                "Начално училище \"Никола Козлев\"",
                "Начално училище \"Цани Гинчев\"",
                "Средно училище \"Максим Райкович\""
            ],
            "Майско": ["Основно училище \"Отец Паисий\""],
            "Морава": [
                "Основно училище \"Свети свети Кирил и Методий\"",
            ],
            "Овча могила": [
                "Основно училище \"Свети свети Кирил и Методий\"",
            ],
            "Ореш": ["Основно училище \"Христо Ботев\""],
            "Павликени": [
                "Основно училище \"Св. Климент Охридски\"",
                "Средно училище \"Бачо Киро\""
            ],
            "Петко Каравелово": ["Основно училище \"Васил Левски\""],
            "Писарево": ["Основно училище \"Отец Паисий\""],
            "Поликраище": [
                "Основно училище \"Св.Св.Кирил и Методий\"",
            ],
            "Полски Тръмбеш": ["Средно  училище   \"Цанко Церковски\""],
            "Първомайци": ["Основно училище \"Елин Пелин\""],
            "Раданово": ["Основно училище   \"Св.Св.Кирил и Методий\""],
            "Ресен": ["Основно училище \"Христо Ботев\""],
            "Русаля": ["Частна начално училище \"Димитър Екимов\""],
            "Самоводене": ["Основно училище \"Христо Смирненски\""],
            "Свищов": [
                "Основно училище \"Филип Сакелариевич\"",
                "Средно училище \"Димитър Благоев\"",
                "Средно училище \"Цветан Радославов\""
            ],
            "Средно село": ["Основно училище \"Васил Левски\""],
            "Стражица": ["Средно училище \"Ангел Каралийчев\""],
            "Страхилово": ["Основно училище \"Св.Св.Кирил и Методий\""],
            "Сухиндол": ["Средно   училище \"Св. Климент Охридски\""],
            "Сушица": ["Начално училище \"Отец Паисий\""],
            "Царски извор": ["Начално училище \"Иван Вазов\""],
            "Церова кория": ["Основно училище \"Петко Рачев Славейков\""]
        };

        citiesSelect.addEventListener('change', function () {
            const selectedCity = citiesSelect.value;
            schoolsSelect.innerHTML = '<option value="">Изберете училище</option>';

            if (selectedCity && schoolsByCity[selectedCity]) {
                schoolsByCity[selectedCity].forEach(school => {
                    const option = document.createElement('option');
                    option.value = school;
                    option.textContent = school;
                    schoolsSelect.appendChild(option);
                });
            }
        });