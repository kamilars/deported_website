const PEOPLE = [
  {
    "id": 1,
    "fullName": "Маевская Карина Ивановна",
    "birthDate": "1898",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 2,
    "fullName": "Маевская Ирина Сигизмунтовна",
    "birthDate": "1925",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 3,
    "fullName": "Ивановская Александра Ивановна",
    "birthDate": "1888",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 4,
    "fullName": "Андрушко Фекла Ивановна",
    "birthDate": "1915",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 5,
    "fullName": "Олехнович Степан Иванович",
    "birthDate": "1898",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 6,
    "fullName": "Олехнович Анна Мироновна",
    "birthDate": "1899",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 7,
    "fullName": "Олехнович Петр  Степанович",
    "birthDate": "1928",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 8,
    "fullName": "Олехнович Константин Степанович",
    "birthDate": "1930",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 9,
    "fullName": "Олехнович Зинаида Степановна",
    "birthDate": "1927",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 10,
    "fullName": "Олехнович Екатерина Степановна",
    "birthDate": "1929",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 11,
    "fullName": "Лесько Дмитрий Иванович",
    "birthDate": "1900",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 12,
    "fullName": "Лесько Теона Павловна",
    "birthDate": "1903",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 13,
    "fullName": "Лесько Вера Дмитревна",
    "birthDate": "1932",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 14,
    "fullName": "Лесько Олег Дмитревич",
    "birthDate": "1935",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 15,
    "fullName": "Лесько Каролина Фоминишна",
    "birthDate": "1880",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 16,
    "fullName": "Зибуньска Рахиль Югелевна",
    "birthDate": "1921",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 17,
    "fullName": "Шпирт Мойсей Борисович",
    "birthDate": "1888",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 18,
    "fullName": "Шпирт Мария Иосифовна",
    "birthDate": "1892",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 19,
    "fullName": "Шпирт Клара Майсеевна",
    "birthDate": "1926",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 20,
    "fullName": "Воскорбойник Мария Владимировна",
    "birthDate": "1903",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 21,
    "fullName": "Вайман Арон Шулимович",
    "birthDate": "1897",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 22,
    "fullName": "Кишковский Константин Проконов",
    "birthDate": "1889",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 23,
    "fullName": "Кишковская Елена Ильична",
    "birthDate": "1902",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 24,
    "fullName": "Кишковский Анатолий Константинович",
    "birthDate": "1926",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 25,
    "fullName": "Кишковский Игорь Константинович",
    "birthDate": "1927",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 26,
    "fullName": "Кишковский Генадий Константинович",
    "birthDate": "1932",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 27,
    "fullName": "Гжеськовак Станислава Владимировна",
    "birthDate": "1901",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 28,
    "fullName": "Гжеськовак Ирина Владимировна",
    "birthDate": "1922",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 29,
    "fullName": "Гжеськовак Сабина Владимировна",
    "birthDate": "1927",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 30,
    "fullName": "Гжеськовак Ромуальд Владимироич",
    "birthDate": "1929",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 31,
    "fullName": "Гжеськовак Генриста Владимировна",
    "birthDate": "1930",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 32,
    "fullName": "Гжеськовак Мариан Владимирович",
    "birthDate": "1935",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 33,
    "fullName": "Гжеськовак Эдуард Владимирович",
    "birthDate": "1937",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 34,
    "fullName": "Шпиндель Мойсей Хаскелевия",
    "birthDate": "1915",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 35,
    "fullName": "Шпиндель Мира Лейбишевна",
    "birthDate": "1915",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 36,
    "fullName": "Шпиндель Менаше Мойсеевич",
    "birthDate": "1938",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 37,
    "fullName": "Шпиндель Ревекка Мойсеевна",
    "birthDate": "1940",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 38,
    "fullName": "Борковская Виктория Григориавна",
    "birthDate": "1890",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 39,
    "fullName": "Борковская Мария Станиславна",
    "birthDate": "1918",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 40,
    "fullName": "Хосид Лев Ефимович",
    "birthDate": "1879",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 41,
    "fullName": "Хосид Клара Борисовна",
    "birthDate": "1884",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 42,
    "fullName": "Церкевич Тарас Иванович",
    "birthDate": "1880",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 43,
    "fullName": "Церкевич Елизавета Гаврионовна",
    "birthDate": "1890",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 44,
    "fullName": "Церкевич Николай Тарасович",
    "birthDate": "1921",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 45,
    "fullName": "Фридман Иосиер Айзикович",
    "birthDate": "1911",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 46,
    "fullName": "Шухендлер Рахиль Айзековна",
    "birthDate": "1907",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 47,
    "fullName": "Шухендлер Лейба Айзековна",
    "birthDate": "1935",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 48,
    "fullName": "Шухендлер Фрида Айзековна",
    "birthDate": "1943",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 49,
    "fullName": "Шок Авраам Шоеливич",
    "birthDate": "1918",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 50,
    "fullName": "Шок Сарра Шоеливна",
    "birthDate": "1919",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 51,
    "fullName": "Шок Зисик Шоеливич",
    "birthDate": "1942",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 52,
    "fullName": "Вишневская Виктория Эрастовна",
    "birthDate": "1883",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 53,
    "fullName": "Олейник Гавриил Иванович",
    "birthDate": "1884",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 54,
    "fullName": "Олейник Елена Эрастовна",
    "birthDate": "1887",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 55,
    "fullName": "Зиминская Юлиан Михайлович",
    "birthDate": "1895",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 56,
    "fullName": "Зиминская Каролина Яковлена",
    "birthDate": "1897",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 57,
    "fullName": "Хрупович Анна Семеновна",
    "birthDate": "1909",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 58,
    "fullName": "Хрупович Надежда Антоновна",
    "birthDate": "1929",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 59,
    "fullName": "Хрупович Орист Антонович",
    "birthDate": "1935",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 60,
    "fullName": "Гришпун Мотель Аронович",
    "birthDate": "1887",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 61,
    "fullName": "Гришпун Софья Мотелевна",
    "birthDate": "1919",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 62,
    "fullName": "Гришпун Хаим Мотелевич",
    "birthDate": "1920",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 63,
    "fullName": "Гришпун Илья Мотелевич",
    "birthDate": "1922",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 64,
    "fullName": "Гришпун Борис Мотелевич",
    "birthDate": "1923",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 65,
    "fullName": "Айзенштат Авраам Иохиневич",
    "birthDate": "1904",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 66,
    "fullName": "Айзенштат Фанни Липовна",
    "birthDate": "1912",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 67,
    "fullName": "Айзенштат Ихась Авраамович",
    "birthDate": "1937",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 68,
    "fullName": "Айзенштат Дина Авраамовна",
    "birthDate": "1878",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 69,
    "fullName": "Раубек Юзефа Авраамовна",
    "birthDate": "1883",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 70,
    "fullName": "Несимко Василий Иванович",
    "birthDate": "1897",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 71,
    "fullName": "Несимко Софья Петровна",
    "birthDate": "1896",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 72,
    "fullName": "Несимко Петр Васильевич",
    "birthDate": "1930",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 73,
    "fullName": "Несимко Иван Васильевич",
    "birthDate": "1928",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 74,
    "fullName": "Несимко Михаил Васильевич",
    "birthDate": "1933",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 75,
    "fullName": "Несимко Софья Васильевна",
    "birthDate": "1927",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 76,
    "fullName": "Несимко Прасковья Васильевна",
    "birthDate": "1924",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 77,
    "fullName": "Гасын Иван Григорьевич",
    "birthDate": "1915",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 78,
    "fullName": "Зелигман Цилия Беняминовна",
    "birthDate": "1904",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 79,
    "fullName": "Зелигман Шуля Беняминовна",
    "birthDate": "1929",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 80,
    "fullName": "Зелигман Дора Беняминовна",
    "birthDate": "1935",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 81,
    "fullName": "Шпиндель Шендля Айзиковна",
    "birthDate": "1901",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 82,
    "fullName": "Шпиндель Сусанна Айзиковна",
    "birthDate": "1927",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 83,
    "fullName": "Шпиндель Мотель Айзикович",
    "birthDate": "1932",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 84,
    "fullName": "Бернштейн Ривва Иосифовна",
    "birthDate": "1901",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 85,
    "fullName": "Бернштейн Яков Файвелевич",
    "birthDate": "1923",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 86,
    "fullName": "Бернштейн Израиль Файвелевич",
    "birthDate": "1933",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 87,
    "fullName": "Седлячек Каролина Иосифовна",
    "birthDate": "1871",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 88,
    "fullName": "Клейман Иосиф Срулевич",
    "birthDate": "1873",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 89,
    "fullName": "Клейман Сура-Двойра Срулевна",
    "birthDate": "1879",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 90,
    "fullName": "Лысаковская Теодозия Ивановна",
    "birthDate": "1906",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 91,
    "fullName": "Лысаковский Иван Иосифович",
    "birthDate": "1930",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 92,
    "fullName": "Лысаковский Здислав Иосифович",
    "birthDate": "1932",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 93,
    "fullName": "Лысаковская Тереза Иосифовна",
    "birthDate": "1935",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 94,
    "fullName": "Мелька Юзефа Станиславовна",
    "birthDate": "1902",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 95,
    "fullName": "Мелька Станислав Станиславович",
    "birthDate": "1902",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 96,
    "fullName": "Мелька Ирина Станиславовна",
    "birthDate": "1929",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 97,
    "fullName": "Мелтка Тадеуш Ствниславович",
    "birthDate": "1931",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 98,
    "fullName": "Штахель Борис Нухелович",
    "birthDate": "1919",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 99,
    "fullName": "Сагат Мария Александровна",
    "birthDate": "1896",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 100,
    "fullName": "Сагат Петр Александрович",
    "birthDate": "1922",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 101,
    "fullName": "Свиж Станислав Вейцехович",
    "birthDate": "1886",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 102,
    "fullName": "Джизга Иосиф Францевич",
    "birthDate": "1903",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 103,
    "fullName": "Завиловская Владислава",
    "birthDate": "1905",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 104,
    "fullName": "Малецкая Елена Николаевна",
    "birthDate": "1878",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 105,
    "fullName": "Фридман Толца Григорьевна",
    "birthDate": "1887",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 106,
    "fullName": "Косовская Анастасия Карловна",
    "birthDate": "1907",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 107,
    "fullName": "Косовская Софья Михайлавна",
    "birthDate": "1928",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 108,
    "fullName": "Косовская Мария Михайлавна",
    "birthDate": "1930",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 109,
    "fullName": "Лейша Роман Иосифович",
    "birthDate": "1919",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 110,
    "fullName": "Граф Тодеж Саломоновичь",
    "birthDate": "1908",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 111,
    "fullName": "Дионизюк Станислав Вячеславович",
    "birthDate": "1918",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 112,
    "fullName": "Холендер Натан Борисович",
    "birthDate": "1914",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 113,
    "fullName": "Дворецкая Татьяна Алексеевна",
    "birthDate": "1914",
    "village": "Мамлютка",
    "nat": "Белорусы",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 114,
    "fullName": "Дворецкий Вальдер Алексеевич",
    "birthDate": "1940",
    "village": "Мамлютка",
    "nat": "Белорусы",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 115,
    "fullName": "Уздовская Янина Станиславовна",
    "birthDate": "1920",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 116,
    "fullName": "Уздовская Лех Владиславович",
    "birthDate": "1940",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 117,
    "fullName": "Вайзберг Павел Адольфович",
    "birthDate": "1916",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 118,
    "fullName": "Тютюн Янкель Ихелевич",
    "birthDate": "1919",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 119,
    "fullName": "Борис Натан Васильевич",
    "birthDate": "1911",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 120,
    "fullName": "Майер Яков Шумилевич",
    "birthDate": "1919",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 121,
    "fullName": "Кугерук Андрей Яковлевич",
    "birthDate": "1918",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 122,
    "fullName": "Серветер Сарра Беняминовна",
    "birthDate": "1900",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 123,
    "fullName": "Серветер Авраам Лейзерович",
    "birthDate": "1828",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 124,
    "fullName": "Виделец Берко Лейбович",
    "birthDate": "1889",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 125,
    "fullName": "Виделец Сарра Зальмоновна",
    "birthDate": "1900",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 126,
    "fullName": "Виделец Зельда Берковна",
    "birthDate": "1923",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 127,
    "fullName": "Виделец Михля Берковна",
    "birthDate": "1922",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 128,
    "fullName": "Виделец Мордух Беркович",
    "birthDate": "1924",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 129,
    "fullName": "Виделец Фейга Берковна",
    "birthDate": "1925",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 130,
    "fullName": "Виделец Шейна Берковна",
    "birthDate": "1926",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 131,
    "fullName": "Виделец Бейла Берковна",
    "birthDate": "1928",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 132,
    "fullName": "Виделец Двойра Берковна",
    "birthDate": "1930",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 133,
    "fullName": "Гофман Герш Аронович",
    "birthDate": "1878",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 134,
    "fullName": "Шарф Софья Гершевна",
    "birthDate": "1919",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 135,
    "fullName": "Лидия Кельмоновсна",
    "birthDate": "1941",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 136,
    "fullName": "Копкий  Витовд Петрович",
    "birthDate": "1908",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 137,
    "fullName": "Петровский Павел Иванович",
    "birthDate": "1899",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 138,
    "fullName": "Петровская Мария Ивановна",
    "birthDate": "1909",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 139,
    "fullName": "Петровский Мечислав Павлович",
    "birthDate": "1927",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 140,
    "fullName": "Вишневская -Милевская Елена Иосифовна",
    "birthDate": "1905",
    "village": "Мамлютка",
    "nat": "Русские",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 141,
    "fullName": "Вишневский-Милевский Владислав Иосифович",
    "birthDate": "1932",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 142,
    "fullName": "Вишневский-Милевский Роман Иософович",
    "birthDate": "1935",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 143,
    "fullName": "Вишневский-Милевский Иван Иософович",
    "birthDate": "1936",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 144,
    "fullName": "Вишневская-Милевская Ванда Иософивна",
    "birthDate": "1937",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 145,
    "fullName": "Ящишин Дмитрий Андреевич",
    "birthDate": "1917",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 146,
    "fullName": "Ящишина Анна Гавриловна",
    "birthDate": "1916",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 147,
    "fullName": "Ящишина Мария Андреевна",
    "birthDate": "1920",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 148,
    "fullName": "Данилкович Алексей Михайлович",
    "birthDate": "1922",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 149,
    "fullName": "Данилкович Иван Михайлович",
    "birthDate": "1922",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 150,
    "fullName": "Мандель Людовик Кальманович",
    "birthDate": "1917",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 151,
    "fullName": "Сауль Арон Авраамович",
    "birthDate": "1918",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 152,
    "fullName": "Ротницкий Юлиан Александрович",
    "birthDate": "1915",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 153,
    "fullName": "Вульфсон Михаил Маркович",
    "birthDate": "1916",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 154,
    "fullName": "Долголенцкий Степан Марианович",
    "birthDate": "1910",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 155,
    "fullName": "Конахович Мария Игнатывна",
    "birthDate": "1871",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 156,
    "fullName": "Конахович Станислав Антонович",
    "birthDate": "1912",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 157,
    "fullName": "Конахович Валентина Антовна",
    "birthDate": "1926",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 158,
    "fullName": "Беднарская Феодосия Лаврентоевна",
    "birthDate": "1864",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 159,
    "fullName": "Ступницкий Сергей Леонидович",
    "birthDate": "1931",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 160,
    "fullName": "Захаевич Евгений Болеславович",
    "birthDate": "1899",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 161,
    "fullName": "Хармац Бенцион Хаимович",
    "birthDate": "1879",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 162,
    "fullName": "Хармац Пера Бенционовна",
    "birthDate": "1916",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 163,
    "fullName": "Фишер Нухим Залманович",
    "birthDate": "1912",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 164,
    "fullName": "Фишер Гольда Нухимовна",
    "birthDate": "1943",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 165,
    "fullName": "Гриншпун Бенимин Альтерович",
    "birthDate": "1917",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 166,
    "fullName": "Рубникович Владимир Романович",
    "birthDate": "1891",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 167,
    "fullName": "Рубникович Анна Лукьяновна",
    "birthDate": "1895",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 168,
    "fullName": "Рубникович Витольд Владимирович",
    "birthDate": "1926",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 169,
    "fullName": "Рубникович Владимир Владимирович",
    "birthDate": "1913",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 170,
    "fullName": "Рубникович Иван Владимирович",
    "birthDate": "1934",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 171,
    "fullName": "Рубникович Альфреда Владимировна",
    "birthDate": "1937",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 172,
    "fullName": "Борковский Ипполит Андреевич",
    "birthDate": "1918",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 173,
    "fullName": "Бельская Мария Владимировна",
    "birthDate": "1884",
    "village": "Мамлютка",
    "nat": "Русские",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 174,
    "fullName": "Спиридов Иван Леонтьевич",
    "birthDate": "1918",
    "village": "Мамлютка",
    "nat": "Русские",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 175,
    "fullName": "Иордан Елена Казимировна",
    "birthDate": "1913",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 176,
    "fullName": "Иордан Маргарита Иосифовна",
    "birthDate": "1938",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 177,
    "fullName": "Скоропад Петр Иосифович",
    "birthDate": "1881",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 178,
    "fullName": "Скоропад Анна Николаевна",
    "birthDate": "1907",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 179,
    "fullName": "Скоропад Агнешка Михайловна",
    "birthDate": "1884",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 180,
    "fullName": "Скоропад Тадеуш Иосифович",
    "birthDate": "1929",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 181,
    "fullName": "Костёлек Тадеуш Антонович",
    "birthDate": "1925",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 182,
    "fullName": "Фесюк Яков Васильевич",
    "birthDate": "1917",
    "village": "Мамлютка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 183,
    "fullName": "Бодыхова Анна Станиславовна",
    "birthDate": "1902",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 184,
    "fullName": "Барнасева Ванда Иосифовна",
    "birthDate": "1914",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 185,
    "fullName": "Карблюд Леон Мойсивич",
    "birthDate": "1902",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 186,
    "fullName": "Перейстман Соломон",
    "birthDate": "1918",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 187,
    "fullName": "Белоус Анна",
    "birthDate": "1939",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 188,
    "fullName": "Печепка Мечислав",
    "birthDate": "1930",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 189,
    "fullName": "Печепка Тепафефа",
    "birthDate": "1940",
    "village": "Мамлютка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 190,
    "fullName": "Гримберг  Яковлевич",
    "birthDate": "1911",
    "village": "Мамлютка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 191,
    "fullName": "Памяч Николай Мойсеевия",
    "birthDate": "1880",
    "village": "Покровка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 192,
    "fullName": "Памяч Александра Филиповна",
    "birthDate": "1850",
    "village": "Покровка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 193,
    "fullName": "Памяч Василий Николаевич",
    "birthDate": "1922",
    "village": "Покровка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 194,
    "fullName": "Памяч Павел Николаевич",
    "birthDate": "1920",
    "village": "Покровка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 195,
    "fullName": "Лещинович Аделия",
    "birthDate": "1918",
    "village": "Покровка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 196,
    "fullName": "Лещинович Збигнев Марианович",
    "birthDate": "1938",
    "village": "Покровка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 197,
    "fullName": "Лещинович Данута Мариановна",
    "birthDate": "1941",
    "village": "Покровка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 198,
    "fullName": "Айдлер Давид Мойсеевич",
    "birthDate": "1909",
    "village": "Покровка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 199,
    "fullName": "Корольчук Станислав Иванович",
    "birthDate": "1915",
    "village": "Покровка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 200,
    "fullName": "Олейник Василий Иван",
    "birthDate": "1919",
    "village": "Покровка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 201,
    "fullName": "Нахамчик Сарра",
    "birthDate": "1915",
    "village": "Дубровное",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 202,
    "fullName": "Круль Мария Ивановна",
    "birthDate": "1885",
    "village": "Дубровное",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 203,
    "fullName": "Круль Елена Михайловна",
    "birthDate": "1923",
    "village": "Дубровное",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 204,
    "fullName": "Круль Варвара Михайловна",
    "birthDate": "1925",
    "village": "Дубровное",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 205,
    "fullName": "Бриц Иван Петрович",
    "birthDate": "1888",
    "village": "Дубровное",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 206,
    "fullName": "Бриц Аделя Петровна",
    "birthDate": "1901",
    "village": "Дубровное",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 207,
    "fullName": "Бриц Иван Петрович",
    "birthDate": "1926",
    "village": "Дубровное",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 208,
    "fullName": "Бриц Алина Петровна",
    "birthDate": "1925",
    "village": "Дубровное",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 209,
    "fullName": "Бриц Эвальда Петровна",
    "birthDate": "1931",
    "village": "Дубровное",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 210,
    "fullName": "Бриц Елена Петровна",
    "birthDate": "1935",
    "village": "Дубровное",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 211,
    "fullName": "Бриц Антон Петрович",
    "birthDate": "1937",
    "village": "Дубровное",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 212,
    "fullName": "Бриц Аделяйда Петровна",
    "birthDate": "1876",
    "village": "Дубровное",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 213,
    "fullName": "Крутко Фекла Казимировна",
    "birthDate": "1888",
    "village": "Дубровное",
    "nat": "Белорусы",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 214,
    "fullName": "Масальская Ванда Адамовская",
    "birthDate": "1872",
    "village": "Дубровное",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 215,
    "fullName": "Оношко Станислава Владиславовна",
    "birthDate": "1899",
    "village": "Дубровное",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 216,
    "fullName": "Оношко Тереза",
    "birthDate": "1937",
    "village": "Дубровное",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 217,
    "fullName": "Буевич Иосиф Иванович",
    "birthDate": "1859",
    "village": "Дубровное",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 218,
    "fullName": "Буевич Аделяйда",
    "birthDate": "1874",
    "village": "Дубровное",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 219,
    "fullName": "Буевич Леокардия",
    "birthDate": "1918",
    "village": "Дубровное",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 220,
    "fullName": "Буевич Кристина Владиславовна",
    "birthDate": "1940",
    "village": "Дубровное",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 221,
    "fullName": "Чернявокий Петр станиславович",
    "birthDate": "1892",
    "village": "Дубровное",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 222,
    "fullName": "Буевич Бронислава Викторовна",
    "birthDate": "1910",
    "village": "Дубровное",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 223,
    "fullName": "Буевич Мирослава",
    "birthDate": "1929",
    "village": "Дубровное",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 224,
    "fullName": "Войцехович Янина Аполинарьевна",
    "birthDate": "1917",
    "village": "Дубровное",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 225,
    "fullName": "Войцехович Здзислав",
    "birthDate": "1933",
    "village": "Дубровное",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 226,
    "fullName": "Войцехович Георгий",
    "birthDate": "1935",
    "village": "Дубровное",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 227,
    "fullName": "Войцехович Лех",
    "birthDate": "1939",
    "village": "Дубровное",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 228,
    "fullName": "Олисов Григорий Егорович",
    "birthDate": "1880",
    "village": "Дубровное",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 229,
    "fullName": "Олисова Дарья Егоровна",
    "birthDate": "1886",
    "village": "Дубровное",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 230,
    "fullName": "Олисова Анна Егоровна",
    "birthDate": "1925",
    "village": "Дубровное",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 231,
    "fullName": "Олисова Анфиса Егоровна",
    "birthDate": "1932",
    "village": "Дубровное",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 232,
    "fullName": "Мордзинский Семен",
    "birthDate": "1895",
    "village": "Дубровное",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 233,
    "fullName": "Мордзинский Рахиль",
    "birthDate": "1898",
    "village": "Дубровное",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 234,
    "fullName": "Мордзинский Саломон Семьенович",
    "birthDate": "1920",
    "village": "Дубровное",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 235,
    "fullName": "Мордзинский Юдель Семьенович",
    "birthDate": "1922",
    "village": "Дубровное",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 236,
    "fullName": "Мординский Израил Семьенович",
    "birthDate": "1924",
    "village": "Дубровное",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 237,
    "fullName": "Мординская Вита Семьеновна",
    "birthDate": "1926",
    "village": "Дубровное",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 238,
    "fullName": "Мординская Янкель Семьеновна",
    "birthDate": "1928",
    "village": "Дубровное",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 239,
    "fullName": "Мордиская Геня Семьеновна",
    "birthDate": "1930",
    "village": "Дубровное",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 240,
    "fullName": "Мординская Пера Семьеновна",
    "birthDate": "1932",
    "village": "Дубровное",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 241,
    "fullName": "Свидерская Ядвига Ипполитовна",
    "birthDate": "1898",
    "village": "Дубровное",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 242,
    "fullName": "Свидерская Янина Ипполитовна",
    "birthDate": "1923",
    "village": "Дубровное",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 243,
    "fullName": "Свидерская Ирина Ипполитовна",
    "birthDate": "1919",
    "village": "Дубровное",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 244,
    "fullName": "Новак Юзек Яйцехович",
    "birthDate": "1889",
    "village": "Дубровное",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 245,
    "fullName": "Трейстмац Иосиф Сухимович",
    "birthDate": "1913",
    "village": "Дубровное",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 246,
    "fullName": "Радек Максим Антонович",
    "birthDate": "1904",
    "village": "Смирновка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 247,
    "fullName": "Радек Анна Григорьевна",
    "birthDate": "1908",
    "village": "Смирновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 248,
    "fullName": "Радек Владимир Максимович",
    "birthDate": "1930",
    "village": "Смирновка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 249,
    "fullName": "Радек Мария Максимовна",
    "birthDate": "1934",
    "village": "Смирновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 250,
    "fullName": "Радек Василий Максимович",
    "birthDate": "1943",
    "village": "Смирновка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 251,
    "fullName": "Хжановская Юстина Пропаньевна",
    "birthDate": "1912",
    "village": "Смирновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 252,
    "fullName": "Хжановский Иван Антонович",
    "birthDate": "1931",
    "village": "Смирновка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 253,
    "fullName": "Михальская Фекла Петровна",
    "birthDate": "1912",
    "village": "Смирновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 254,
    "fullName": "Михальская Данута Владиславовна",
    "birthDate": "1937",
    "village": "Смирновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 255,
    "fullName": "Слипельская Янина Акимовна",
    "birthDate": "1902",
    "village": "Смирновка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 256,
    "fullName": "Слипельская Ванда Болеславовна",
    "birthDate": "1924",
    "village": "Смирновка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 257,
    "fullName": "Слипельский Вацлав Болеславович",
    "birthDate": "1926",
    "village": "Смирновка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 258,
    "fullName": "Зёмек Янина Людовиковна",
    "birthDate": "1912",
    "village": "Смирновка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 259,
    "fullName": "Зёмек Данута Люциановна",
    "birthDate": "1930",
    "village": "Смирновка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 260,
    "fullName": "Зёмек Вальдемар Люциановна",
    "birthDate": "1932",
    "village": "Смирновка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 261,
    "fullName": "Мамишевский Иван Владиславович",
    "birthDate": "1941",
    "village": "Смирновка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 262,
    "fullName": "Никель Надежда Ивановна",
    "birthDate": "1900",
    "village": "Смирновка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 263,
    "fullName": "Никель Галина Ивановна",
    "birthDate": "1926",
    "village": "Смирновка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 264,
    "fullName": "Нагорняк Михаил Васильевич",
    "birthDate": "1903",
    "village": "Смирновка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 265,
    "fullName": "Рега Антон Нижифарович",
    "birthDate": "1909",
    "village": "Смирновка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 266,
    "fullName": "Хитрушко Александр Константинович",
    "birthDate": "1907",
    "village": "Смирновка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 267,
    "fullName": "Мазурец Мария Константиновна",
    "birthDate": "1902",
    "village": "Смирновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 268,
    "fullName": "Лясота-Стопера Франсиска Ивановна",
    "birthDate": "1899",
    "village": "Смирновка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 269,
    "fullName": "Ковальская Констанция Антоновна",
    "birthDate": "1899",
    "village": "Смирновка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 270,
    "fullName": "Ковальская Елизавета Федоровна",
    "birthDate": "1924",
    "village": "Смирновка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 271,
    "fullName": "Мичка Викентий Яковлевич",
    "birthDate": "1907",
    "village": "Смирновка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 272,
    "fullName": "Мичка Мария Федоровна",
    "birthDate": "1905",
    "village": "Смирновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 273,
    "fullName": "Мичка Валентина Викентьевна",
    "birthDate": "1930",
    "village": "Смирновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 274,
    "fullName": "Мичка Михаил Викентьевич",
    "birthDate": "1932",
    "village": "Смирновка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 275,
    "fullName": "Богуцкий Виенший Яковлевич",
    "birthDate": "1882",
    "village": "Смирновка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 276,
    "fullName": "Злоткевич Борис Михайлович",
    "birthDate": "1920",
    "village": "Смирновка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 277,
    "fullName": "Плотницкий Израил Мойсеевич",
    "birthDate": "1916",
    "village": "Смирновка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 278,
    "fullName": "Трояновская Пелагея Варфоломовна",
    "birthDate": "1905",
    "village": "Новый Свет",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 279,
    "fullName": "Трояновская Грижина Владиславовна",
    "birthDate": "1932",
    "village": "Новый Свет",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 280,
    "fullName": "Щепаняк Владеслава Чеславовна",
    "birthDate": "1917",
    "village": "Новый Свет",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 281,
    "fullName": "Щепаняк Мариан Степанович",
    "birthDate": "1937",
    "village": "Новый Свет",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 282,
    "fullName": "Щепаняк Богдан Степанович",
    "birthDate": "1938",
    "village": "Новый Свет",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 283,
    "fullName": "Майхшак Розалия Петровна",
    "birthDate": "1909",
    "village": "Новый Свет",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 284,
    "fullName": "Майхшак Янина Иосифовна",
    "birthDate": "1932",
    "village": "Новый Свет",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 285,
    "fullName": "Майхшак Леокадия иосифовна",
    "birthDate": "1930",
    "village": "Новый Свет",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 286,
    "fullName": "Краковский Люциан Францевич",
    "birthDate": "1928",
    "village": "Новый Свет",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 287,
    "fullName": "Карпинский Ликанор Иванович",
    "birthDate": "1884",
    "village": "Новый Свет",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 288,
    "fullName": "Карпинская Анна Ильична",
    "birthDate": "1909",
    "village": "Новый Свет",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 289,
    "fullName": "Карпинский Трофим Романович",
    "birthDate": "1934",
    "village": "Новый Свет",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 290,
    "fullName": "Карпинская Нина Романовна",
    "birthDate": "1937",
    "village": "Новый Свет",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 291,
    "fullName": "Рудковская Елена Андреевна",
    "birthDate": "1914",
    "village": "Новый Свет",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 292,
    "fullName": "Рудковский Тадеуш Францевич",
    "birthDate": "1932",
    "village": "Новый Свет",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 293,
    "fullName": "Дигало Федор Ильич",
    "birthDate": "1896",
    "village": "Новый Свет",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 294,
    "fullName": "Дигало Иван Ефимович",
    "birthDate": "1932",
    "village": "Новый Свет",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 295,
    "fullName": "Муковоз Мариия Андреевна",
    "birthDate": "1900",
    "village": "Новый Свет",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 296,
    "fullName": "Борковский Петр Яковлевич",
    "birthDate": "1903",
    "village": "Новый Свет",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 297,
    "fullName": "Полищук Мария Федоровна",
    "birthDate": "1896",
    "village": "Новый Свет",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 298,
    "fullName": "Полищук Андрей Афанасьевич",
    "birthDate": "1924",
    "village": "Новый Свет",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 299,
    "fullName": "Полищук Яков Афанасьевич",
    "birthDate": "1937",
    "village": "Новый Свет",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 300,
    "fullName": "Дигало Анастасия Никифоровна",
    "birthDate": "1918",
    "village": "Новый Свет",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 301,
    "fullName": "Дармограй Степан Григорьевич",
    "birthDate": "1905",
    "village": "Новый Свет",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 302,
    "fullName": "Дармограй Мария Николаевна",
    "birthDate": "1912",
    "village": "Новый Свет",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 303,
    "fullName": "Дармограй Владимир Степанович",
    "birthDate": "1937",
    "village": "Новый Свет",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 304,
    "fullName": "Дармограй Фома Григорьевич",
    "birthDate": "1913",
    "village": "Новый Свет",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 305,
    "fullName": "Бочковская Елена Антоновна",
    "birthDate": "1896",
    "village": "Токаровка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 306,
    "fullName": "Бочковская Галина Владимировна",
    "birthDate": "1919",
    "village": "Токаровка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 307,
    "fullName": "Бочковская Янина Владимировна",
    "birthDate": "1929",
    "village": "Токаровка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 308,
    "fullName": "Чарноцкая Владислава Алексеевна",
    "birthDate": "1871",
    "village": "Токаровка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 309,
    "fullName": "Буйвид Софья Станиславовна",
    "birthDate": "1904",
    "village": "Токаровка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 310,
    "fullName": "Бойвид Ванда Владиславовна",
    "birthDate": "1931",
    "village": "Токаровка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 311,
    "fullName": "Бойвид Владислава Владиславовна",
    "birthDate": "1940",
    "village": "Токаровка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 312,
    "fullName": "Иордан Янина Болеславовна",
    "birthDate": "1878",
    "village": "Токаровка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 313,
    "fullName": "Богданович Андрей Карлович",
    "birthDate": "1952",
    "village": "Токаровка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 314,
    "fullName": "Барановский Вацлав Станиславович",
    "birthDate": "1888",
    "village": "Токаровка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 315,
    "fullName": "Барановская Стефания Станиславовна",
    "birthDate": "1885",
    "village": "Токаровка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 316,
    "fullName": "Кенц Софья Павловна",
    "birthDate": "1890",
    "village": "Токаровка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 317,
    "fullName": "Кенц Георгий Степанович",
    "birthDate": "1928",
    "village": "Токаровка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 318,
    "fullName": "Кенц Казимир Степанович",
    "birthDate": "1930",
    "village": "Токаровка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 319,
    "fullName": "Кенц Иван Степанович",
    "birthDate": "1933",
    "village": "Токаровка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 320,
    "fullName": "Юхневич Игнатий Михайлович",
    "birthDate": "1874",
    "village": "Токаровка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 321,
    "fullName": "Юхневич Ванда Александровна",
    "birthDate": "1891",
    "village": "Токаровка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 322,
    "fullName": "Юхневич Владислава Игнатовна",
    "birthDate": "1921",
    "village": "Токаровка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 323,
    "fullName": "Юхневич Камилия Игнатовна",
    "birthDate": "1924",
    "village": "Токаровка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 324,
    "fullName": "Юхневич Галина Игнатовна",
    "birthDate": "1927",
    "village": "Токаровка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 325,
    "fullName": "Галей Казимир Антонович",
    "birthDate": "1911",
    "village": "Токаровка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 326,
    "fullName": "Галей Богдан Иосифович",
    "birthDate": "1939",
    "village": "Токаровка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 327,
    "fullName": "Стацевич Анеля Никодимовна",
    "birthDate": "1871",
    "village": "Токаровка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 328,
    "fullName": "Стацевич Ванда Михайловна",
    "birthDate": "1900",
    "village": "Токаровка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 329,
    "fullName": "Стацевич Виталий Михайлович",
    "birthDate": "1901",
    "village": "Токаровка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 330,
    "fullName": "Стацевич Иван Михайлович",
    "birthDate": "1903",
    "village": "Токаровка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 331,
    "fullName": "Квасьневский Виктор Юлианович",
    "birthDate": "1863",
    "village": "Дубровное",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 332,
    "fullName": "Климко Чеслав Михайлович",
    "birthDate": "1927",
    "village": "Дубровное",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 333,
    "fullName": "Климко Эдуард Михайлович",
    "birthDate": "1929",
    "village": "Дубровное",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 334,
    "fullName": "Шепетюк Иван Васильевич",
    "birthDate": "1911",
    "village": "Дубровное",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 335,
    "fullName": "Сулима Матвей Никифор",
    "birthDate": "1886",
    "village": "Пробуждение",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 336,
    "fullName": "Гринипун Яков Мотслевич",
    "birthDate": "1917",
    "village": "Пробуждение",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 337,
    "fullName": "Гринипун Гуця Авраамовна",
    "birthDate": "1915",
    "village": "Пробуждение",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 338,
    "fullName": "Гринипун Ида Яковлевна",
    "birthDate": "1943",
    "village": "Пробуждение",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 339,
    "fullName": "Домброва Яков Иванович",
    "birthDate": "1891",
    "village": "Красная Украинка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 340,
    "fullName": "Домброва Анна Федоровна",
    "birthDate": "1884",
    "village": "Красная Украинка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 341,
    "fullName": "Бачинская Елена Владиславовна",
    "birthDate": "1885",
    "village": "Сенжарка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 342,
    "fullName": "Черницкая Матрина Петровна",
    "birthDate": "1875",
    "village": "Сенжарка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 343,
    "fullName": "Черницкий Эдуард Людовикович",
    "birthDate": "1905",
    "village": "Сенжарка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 344,
    "fullName": "Черницкий Георгий Эдуардович",
    "birthDate": "1928",
    "village": "Сенжарка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 345,
    "fullName": "Черницкая Сабля-Елена Эдуардовна",
    "birthDate": "1930",
    "village": "Сенжарка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 346,
    "fullName": "Черницкая Тереза Эдуардовна",
    "birthDate": "1940",
    "village": "Сенжарка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 347,
    "fullName": "Грызунов Степан Иванович",
    "birthDate": "1878",
    "village": "Сенжарка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 348,
    "fullName": "Грызунова Надежда Васильевна",
    "birthDate": "1935",
    "village": "Сенжарка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 349,
    "fullName": "Грызунова Раиса Васильевна",
    "birthDate": "1937",
    "village": "Сенжарка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 350,
    "fullName": "Квасюк Ирина Емильяновна",
    "birthDate": "1905",
    "village": "Сенжарка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 351,
    "fullName": "Козыра Пелагея Ивановна",
    "birthDate": "1896",
    "village": "Сенжарка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 352,
    "fullName": "Козыра Мария Юстиновна",
    "birthDate": "1922",
    "village": "Сенжарка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 353,
    "fullName": "Козыра Нина Юстиновна",
    "birthDate": "1927",
    "village": "Сенжарка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 354,
    "fullName": "Козыра Анна Юстиновна",
    "birthDate": "1930",
    "village": "Сенжарка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 355,
    "fullName": "Ваксманьская Елена Феликсовна",
    "birthDate": "1913",
    "village": "Сенжарка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 356,
    "fullName": "Ваксманьская Ромуальд Станиславович",
    "birthDate": "1939",
    "village": "Сенжарка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 357,
    "fullName": "Процюк Ефимья Ивановна",
    "birthDate": "1875",
    "village": "Сенжарка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 358,
    "fullName": "Кокуруза Агафья Степановна",
    "birthDate": "1911",
    "village": "Сенжарка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 359,
    "fullName": "Кокуруза Прасковья Акимовна",
    "birthDate": "1930",
    "village": "Сенжарка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 360,
    "fullName": "Кокуруза Иван Акимович",
    "birthDate": "1937",
    "village": "Сенжарка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 361,
    "fullName": "Базан Ефросиния Антоновна",
    "birthDate": "1865",
    "village": "Сенжарка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 362,
    "fullName": "Левчук Дарья Степановна",
    "birthDate": "1921",
    "village": "Сенжарка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 363,
    "fullName": "Левчук Владимир Михайлович",
    "birthDate": "1941",
    "village": "Сенжарка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 364,
    "fullName": "Хицянович Гавриил Антонович",
    "birthDate": "1866",
    "village": "Симаки",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 365,
    "fullName": "Хицянович Мария Гавриловна",
    "birthDate": "1906",
    "village": "Симаки",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 366,
    "fullName": "Хицянович Генрих Мартинович",
    "birthDate": "1931",
    "village": "Симаки",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 367,
    "fullName": "Домбровская Магдолина Игнатовна",
    "birthDate": "1914",
    "village": "Симаки",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 368,
    "fullName": "Домбровский Иван Станиславович",
    "birthDate": "1936",
    "village": "Симаки",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 369,
    "fullName": "Коткович Адольф Францевич",
    "birthDate": "1882",
    "village": "Симаки",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 370,
    "fullName": "Коткович Мария Викентьевна",
    "birthDate": "1894",
    "village": "Симаки",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 371,
    "fullName": "Котович Софья Амброзивна",
    "birthDate": "1898",
    "village": "Симаки",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 372,
    "fullName": "Котович Мария Сергеевна",
    "birthDate": "1936",
    "village": "Симаки",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 373,
    "fullName": "Соколовская Ирина Леонардьевна",
    "birthDate": "1928",
    "village": "Ульяновка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 374,
    "fullName": "Соколович Мечислав Леонардьевич",
    "birthDate": "1929",
    "village": "Ульяновка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 375,
    "fullName": "Косовский Антон Антонович",
    "birthDate": "1869",
    "village": "Ульяновка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 376,
    "fullName": "Шевчук Вера Авсенитьевна",
    "birthDate": "1922",
    "village": "Ульяновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15  июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 377,
    "fullName": "Мальчик Раиса Николаевна",
    "birthDate": "1933",
    "village": "Ульяновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 378,
    "fullName": "Мальчик Ефросиния Трофимовна",
    "birthDate": "1914",
    "village": "Ульяновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 379,
    "fullName": "Мальчик Ирина Кондратьевна",
    "birthDate": "1889",
    "village": "Ульяновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 380,
    "fullName": "Мальчик Вера Васильевна",
    "birthDate": "1925",
    "village": "Ульяновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 381,
    "fullName": "Мальчик Николай Александрович",
    "birthDate": "1941",
    "village": "Ульяновка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 382,
    "fullName": "Блащук Семён Александрович",
    "birthDate": "1914",
    "village": "Ульяновка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 383,
    "fullName": "Регинчак Ришард Эдуардович",
    "birthDate": "1927",
    "village": "Ульяновка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 384,
    "fullName": "Регинчак Роман Эдуардович",
    "birthDate": "1928",
    "village": "Ульяновка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 385,
    "fullName": "Горшкович Георгий Адамович",
    "birthDate": "1927",
    "village": "Ульяновка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 386,
    "fullName": "Горшкович Кристина Адамовна",
    "birthDate": "1936",
    "village": "Ульяновка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 387,
    "fullName": "Горшкович Ирина Адамовна",
    "birthDate": "1936",
    "village": "Ульяновка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 388,
    "fullName": "Владецкая Галина Петровна",
    "birthDate": "1928",
    "village": "Ульяновка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 389,
    "fullName": "Владецкий Ромуальд Петрович",
    "birthDate": "1930",
    "village": "Ульяновка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 390,
    "fullName": "Владецкий Мирослав Петрович",
    "birthDate": "1933",
    "village": "Ульяновка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 391,
    "fullName": "Заяц Юстина Васильевна",
    "birthDate": "1906",
    "village": "Ульяновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 392,
    "fullName": "Заяц Иван Иосифович",
    "birthDate": "1930",
    "village": "Ульяновка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 393,
    "fullName": "Заяц Галина Иосифовна",
    "birthDate": "1937",
    "village": "Ульяновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 394,
    "fullName": "Заяц Карл Иосифович",
    "birthDate": "1939",
    "village": "Ульяновка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 395,
    "fullName": "Дорава Янина Блажеевна",
    "birthDate": "1935",
    "village": "Фролово",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 396,
    "fullName": "Дорава Богулина Блажеевна",
    "birthDate": "1940",
    "village": "Фролово",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 397,
    "fullName": "Березовская Ирина Рудольфовна",
    "birthDate": "1928",
    "village": "Фролово",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 398,
    "fullName": "Черманьская Эмилия Романовна",
    "birthDate": "1931",
    "village": "Фролово",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 399,
    "fullName": "Черманьский Иосиф Романович",
    "birthDate": "1935",
    "village": "Фролово",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 400,
    "fullName": "Черманьская Мария Романовна",
    "birthDate": "1940",
    "village": "Фролово",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 401,
    "fullName": "Квасюк Ирина Юлиановна",
    "birthDate": "1905",
    "village": "Фролово",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 402,
    "fullName": "Цюирих Виктория Фомишна",
    "birthDate": "1875",
    "village": "Фролово",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 403,
    "fullName": "Дуплевич Ирина Владиславовна",
    "birthDate": "1932",
    "village": "Фролово",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 404,
    "fullName": "Траиищонок Иосиф Константинович",
    "birthDate": "1899",
    "village": "Фролово",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 405,
    "fullName": "Траиищонок Эмилия Константиновна",
    "birthDate": "1889",
    "village": "Фролово",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 406,
    "fullName": "Траиищонок Викентий Константинович",
    "birthDate": "1930",
    "village": "Фролово",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 407,
    "fullName": "Обалевич Анна Антоновна",
    "birthDate": "1890",
    "village": "Фролово",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 408,
    "fullName": "Обалевич Павел Ришардович",
    "birthDate": "1928",
    "village": "Фролово",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 409,
    "fullName": "Риндюк Василий Николаевич",
    "birthDate": "1889",
    "village": "Пчелин",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 410,
    "fullName": "Риндюк Анна Леонтьевна",
    "birthDate": "1897",
    "village": "Пчелин",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 411,
    "fullName": "Бригадир Иван Григорьевич",
    "birthDate": "1907",
    "village": "Пчелин",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 412,
    "fullName": "Бригадир Фекла Ивановна",
    "birthDate": "1885",
    "village": "Пчелин",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 413,
    "fullName": "Дачук Софья Семьеновна",
    "birthDate": "1921",
    "village": "Пчелин",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 414,
    "fullName": "Чудакевич Прасковья Онуфорьевна",
    "birthDate": "1899",
    "village": "Пчелин",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 415,
    "fullName": "Чудакевич Петр Семьенович",
    "birthDate": "1932",
    "village": "Пчелин",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 416,
    "fullName": "Бондарчук Лука Карпович",
    "birthDate": "1880",
    "village": "Пчелин",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 417,
    "fullName": "Бондарчук Фекла Федоровна",
    "birthDate": "1888",
    "village": "Пчелин",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 418,
    "fullName": "Риндюк Марк Иванович",
    "birthDate": "1876",
    "village": "Пчелин",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 419,
    "fullName": "Риндюк Анна Онуфрьевна",
    "birthDate": "1882",
    "village": "Пчелин",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 420,
    "fullName": "Яремчук Ева Григорьевна",
    "birthDate": "1885",
    "village": "Пчелин",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 421,
    "fullName": "Яремчук Карней Фомич",
    "birthDate": "1877",
    "village": "Пчелин",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 422,
    "fullName": "Жак Мария Артемовна",
    "birthDate": "1910",
    "village": "Пчелин",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 423,
    "fullName": "Жак Стефания Ивановна",
    "birthDate": "1931",
    "village": "Пчелин",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 424,
    "fullName": "Жак Чеслава Ивановна",
    "birthDate": "1930",
    "village": "Пчелин",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 425,
    "fullName": "Лысогиз Стефания Ивановна",
    "birthDate": "1927",
    "village": "Пчелин",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 426,
    "fullName": "Лысогиз Мария Никитишна",
    "birthDate": "1900",
    "village": "Пчелин",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 427,
    "fullName": "Лысогиз Зенобий Иванович",
    "birthDate": "1929",
    "village": "Пчелин",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 428,
    "fullName": "Командант Михаил Иванович",
    "birthDate": "1884",
    "village": "Пчелин",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 429,
    "fullName": "Командант Анна Михайловна",
    "birthDate": "1888",
    "village": "Пчелин",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 430,
    "fullName": "Командант Владислав Михайлович",
    "birthDate": "1929",
    "village": "Пчелин",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 431,
    "fullName": "Бик Ольга Михайловна",
    "birthDate": "1905",
    "village": "Белкин",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 432,
    "fullName": "Бик Антонина Серафимовна",
    "birthDate": "1927",
    "village": "Белкин",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 433,
    "fullName": "Бик Людмила Серафимовна",
    "birthDate": "1929",
    "village": "Белкин",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 434,
    "fullName": "Бик Галина Серафимовна",
    "birthDate": "1933",
    "village": "Белкин",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 435,
    "fullName": "Бус Мария Васильевна",
    "birthDate": "1873",
    "village": "Белкин",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 436,
    "fullName": "Горошко Николай Лаврентьевич",
    "birthDate": "1918",
    "village": "Белкин",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 437,
    "fullName": "Горошко Таисия Серафимовна",
    "birthDate": "1923",
    "village": "Белкин",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 438,
    "fullName": "Горошко Мария Николаевна",
    "birthDate": "1941",
    "village": "Белкин",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 439,
    "fullName": "Чехак Деонисий Яковлевич",
    "birthDate": "1888",
    "village": "Белкин",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 440,
    "fullName": "Волохинская Ирина Ивановна",
    "birthDate": "1908",
    "village": "Калдаман",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 441,
    "fullName": "Волохинская Станислава Феликсовна",
    "birthDate": "1932",
    "village": "Калдаман",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 442,
    "fullName": "Волохинская Ядвига Феликсовна",
    "birthDate": "1934",
    "village": "Калдаман",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 443,
    "fullName": "Волохинский Феликс Феликсович",
    "birthDate": "1935",
    "village": "Калдаман",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 444,
    "fullName": "Волохинская Софья Феликсовна",
    "birthDate": "1936",
    "village": "Калдаман",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 445,
    "fullName": "Волохинский Данути Феликсович",
    "birthDate": "1939",
    "village": "Калдаман",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 446,
    "fullName": "Пачесняк Витовд Станиславович",
    "birthDate": "1927",
    "village": "Калдаман",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 447,
    "fullName": "Климек Владислава Мартиновна",
    "birthDate": "1899",
    "village": "Калдаман",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 448,
    "fullName": "Климек Георгий Францевич",
    "birthDate": "1926",
    "village": "Калдаман",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 449,
    "fullName": "Климек Збигнев Францевич",
    "birthDate": "1937",
    "village": "Калдаман",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 450,
    "fullName": "Клос Янина Ивановна",
    "birthDate": "1910",
    "village": "Калдаман",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 451,
    "fullName": "Клос Ирина Александровна",
    "birthDate": "1937",
    "village": "Калдаман",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 452,
    "fullName": "Левандовский Генрих Степанович",
    "birthDate": "1928",
    "village": "Калдаман",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 453,
    "fullName": "Козьмеров Франциск Григорьевич",
    "birthDate": "1928",
    "village": "Калдаман",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 454,
    "fullName": "Онищук Эмилия Николаевна",
    "birthDate": "1885",
    "village": "Калдаман",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 455,
    "fullName": "Зданович Елизавета Витольдовна",
    "birthDate": "1933",
    "village": "Калдаман",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 456,
    "fullName": "Стыврышко Иосиф Адамовна",
    "birthDate": "1871",
    "village": "Калдаман",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 457,
    "fullName": "Стыврышко Виталиса Сильвиновна",
    "birthDate": "1878",
    "village": "Калдаман",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 458,
    "fullName": "Гольфред Тереза Израилевна",
    "birthDate": "1912",
    "village": "Калдаман",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 459,
    "fullName": "Гизиевская Кристина Адольфовна",
    "birthDate": "1937",
    "village": "Калдаман",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 460,
    "fullName": "Нояр Станислав Ильич",
    "birthDate": "1883",
    "village": "Калиновка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 461,
    "fullName": "Нояр Мария Константиновна",
    "birthDate": "1892",
    "village": "Калиновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 462,
    "fullName": "Нояр Григорий Станиславович",
    "birthDate": "1919",
    "village": "Калиновка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 463,
    "fullName": "Нояр Петр Станиславович",
    "birthDate": "1927",
    "village": "Калиновка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 464,
    "fullName": "Дворницкий Лаврентий  Петрович",
    "birthDate": "1877",
    "village": "Калиновка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 465,
    "fullName": "Дворницкая Мария Захарьевна",
    "birthDate": "1887",
    "village": "Калиновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 466,
    "fullName": "Дворницкая Евгения Никитишна",
    "birthDate": "1911",
    "village": "Калиновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 467,
    "fullName": "Дворницкая Мария Григорьевна",
    "birthDate": "1935",
    "village": "Калиновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 468,
    "fullName": "Дякун Анна Викентьевна",
    "birthDate": "1910",
    "village": "Калиновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 469,
    "fullName": "Дякун Анисия Петровская",
    "birthDate": "1910",
    "village": "Калиновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 470,
    "fullName": "Котик Викентий Григорьевич",
    "birthDate": "1880",
    "village": "Калиновка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 471,
    "fullName": "Котик Пелагея Павловна",
    "birthDate": "1880",
    "village": "Калиновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 472,
    "fullName": "Кусы Григорий Семевнович",
    "birthDate": "1880",
    "village": "Калиновка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 473,
    "fullName": "Кусы Варвара Семенович",
    "birthDate": "1885",
    "village": "Калиновка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 474,
    "fullName": "Кусы Франциска Петровна",
    "birthDate": "1910",
    "village": "Калиновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 475,
    "fullName": "Кусы Анна Васильевна",
    "birthDate": "1932",
    "village": "Калиновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 476,
    "fullName": "Грещук Павел Семенович",
    "birthDate": "1898",
    "village": "Калиновка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 477,
    "fullName": "Грещук Людвига Стелановна",
    "birthDate": "1892",
    "village": "Калиновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 478,
    "fullName": "Грещук Феодосия Павловна",
    "birthDate": "1925",
    "village": "Калиновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 479,
    "fullName": "Грещук Анна Владимировна",
    "birthDate": "1934",
    "village": "Калиновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 480,
    "fullName": "Грещук Богдан Владимирович",
    "birthDate": "1938",
    "village": "Калиновка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 481,
    "fullName": "Белоус Мария Ивановна",
    "birthDate": "1882",
    "village": "Калиновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 482,
    "fullName": "Ясиновская Пелагея Андреевна",
    "birthDate": "1890",
    "village": "Калиновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 483,
    "fullName": "Ясиновская Эмилия Игнатьевна",
    "birthDate": "1922",
    "village": "Калиновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 484,
    "fullName": "Ясиновская Мария Игнатьевна",
    "birthDate": "1925",
    "village": "Калиновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 485,
    "fullName": "Ясиновская Анна Игнатьевна",
    "birthDate": "1927",
    "village": "Калиновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 486,
    "fullName": "Ясиновская Стефания Игнатьевна",
    "birthDate": "1929",
    "village": "Калиновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 487,
    "fullName": "Глушен Елена Адольфовна",
    "birthDate": "1914",
    "village": "Воскресеновка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 488,
    "fullName": "Глушен Бронислава Францевна",
    "birthDate": "1937",
    "village": "Воскресеновка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 489,
    "fullName": "Гловаля Генефа",
    "birthDate": "1925",
    "village": "Воскресеновка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 490,
    "fullName": "Моравский Никодим Иосифович",
    "birthDate": "1881",
    "village": "Воскресеновка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 491,
    "fullName": "Моравский Брорислава Ивановна",
    "birthDate": "1882",
    "village": "Воскресеновка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 492,
    "fullName": "Куцен Евдокия Тимофеевна",
    "birthDate": "1867",
    "village": "Воскресеновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 493,
    "fullName": "Куцен Анна Тимофеевна",
    "birthDate": "1932",
    "village": "Воскресеновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 494,
    "fullName": "Рожук Анна Никитишна",
    "birthDate": "1904",
    "village": "Воскресеновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 495,
    "fullName": "Рожук Андрей Иванович",
    "birthDate": "1929",
    "village": "Воскресеновка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 496,
    "fullName": "Рожук Анна Ивановна",
    "birthDate": "1931",
    "village": "Воскресеновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 497,
    "fullName": "Макогон Мария Григорьевна",
    "birthDate": "1902",
    "village": "Воскресеновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 498,
    "fullName": "Макогон Мария Андреевна",
    "birthDate": "1924",
    "village": "Воскресеновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 499,
    "fullName": "Ясиновский Нестро Васильевич",
    "birthDate": "1880",
    "village": "Воскресеновка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 500,
    "fullName": "Ясиновская Варвара Фоминишна",
    "birthDate": "1882",
    "village": "Воскресеновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 501,
    "fullName": "Ясиновская Елена Нестеровна",
    "birthDate": "1923",
    "village": "Воскресеновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 502,
    "fullName": "Дундыр Анна Нестеровна",
    "birthDate": "1910",
    "village": "Воскресеновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 503,
    "fullName": "Дундыр Григорий Иванович",
    "birthDate": "1932",
    "village": "Воскресеновка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 504,
    "fullName": "Белецкий Мирослав Михайлович",
    "birthDate": "1932",
    "village": "Воскресеновка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 505,
    "fullName": "Двораковская Елена Игнатьевна",
    "birthDate": "1915",
    "village": "Воскресеновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 506,
    "fullName": "Двораковский Ростислав Иванович",
    "birthDate": "1928",
    "village": "Воскресеновка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 507,
    "fullName": "Двораковская Любомира Ивановна",
    "birthDate": "1929",
    "village": "Воскресеновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 508,
    "fullName": "Юшко Мирон Игнатьевич",
    "birthDate": "1918",
    "village": "Воскресеновка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 509,
    "fullName": "Коваль Евгения Ивановна",
    "birthDate": "1910",
    "village": "Воскресеновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 510,
    "fullName": "Коваль Владимир Михайлович",
    "birthDate": "1932",
    "village": "Воскресеновка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 511,
    "fullName": "Коваль ВАнна Михайловна",
    "birthDate": "1937",
    "village": "Воскресеновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 512,
    "fullName": "Котык Мария Григорьевна",
    "birthDate": "1912",
    "village": "Воскресеновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 513,
    "fullName": "Спиридонова Анна Григорьевна",
    "birthDate": "1880",
    "village": "Воскресеновка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 514,
    "fullName": "Спиридонов Петр Леонтьевич",
    "birthDate": "1913",
    "village": "Воскресеновка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 515,
    "fullName": "Збираль Трофим Викторович",
    "birthDate": "1914",
    "village": "Воскресеновка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 516,
    "fullName": "Корельчук Адам Максимович",
    "birthDate": "1900",
    "village": "Воскресеновка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 517,
    "fullName": "Остоиченя Семен Иванович",
    "birthDate": "1923",
    "village": "Воскресеновка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 518,
    "fullName": "Мороз Генефа Игнатьевна",
    "birthDate": "1908",
    "village": "Воскресеновка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 519,
    "fullName": "Мороз Эмма Михайловна",
    "birthDate": "1930",
    "village": "Воскресеновка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 520,
    "fullName": "Мороз Витовд Михайлович",
    "birthDate": "1932",
    "village": "Воскресеновка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 521,
    "fullName": "Пилат Станислава Ксавельевна",
    "birthDate": "1911",
    "village": "Воскресеновка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 522,
    "fullName": "Пилат Регина Иосифовна",
    "birthDate": "1938",
    "village": "Воскресеновка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 523,
    "fullName": "Унгер Фанни Вильгельмовна",
    "birthDate": "1895",
    "village": "Воскресеновка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 524,
    "fullName": "Унгер Ева Вальтеровна",
    "birthDate": "1926",
    "village": "Воскресеновка",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 525,
    "fullName": "Зевалич Каролина Станиславовна",
    "birthDate": "1903",
    "village": "Воскресеновка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 526,
    "fullName": "Зевалич Болеслав Иосифович",
    "birthDate": "1932",
    "village": "Воскресеновка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 527,
    "fullName": "Гжеськовяк Станислава Ивановна",
    "birthDate": "1906",
    "village": "Воскресеновка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 528,
    "fullName": "Гжеськовяк Кристина Иосифовна",
    "birthDate": "1931",
    "village": "Воскресеновка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 529,
    "fullName": "Гжеськовяк Эдуард Иосифовна",
    "birthDate": "1936",
    "village": "Воскресеновка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 530,
    "fullName": "Алиновская Казимира Адамовна",
    "birthDate": "1902",
    "village": "Воскресеновка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 531,
    "fullName": "Алиновская Ирина Альбиновна",
    "birthDate": "1931",
    "village": "Воскресеновка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 532,
    "fullName": "Алиновская Ядвига Альбиновна",
    "birthDate": "1935",
    "village": "Воскресеновка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 533,
    "fullName": "Алиновский Болеслав Альбинович",
    "birthDate": "1937",
    "village": "Воскресеновка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 534,
    "fullName": "Стреиняк Иосиф Юлианович",
    "birthDate": "1901",
    "village": "Воскресеновка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 535,
    "fullName": "Стреиняк Мариан Ромуальдович",
    "birthDate": "1922",
    "village": "Воскресеновка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 536,
    "fullName": "Стреиняк Зеновий Ромуальдович",
    "birthDate": "1927",
    "village": "Воскресеновка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 537,
    "fullName": "Стреиняк Генрих Ромуальдович",
    "birthDate": "1931",
    "village": "Воскресеновка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 538,
    "fullName": "Стреиняк Станислав Ромуальдович",
    "birthDate": "1934",
    "village": "Воскресеновка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 539,
    "fullName": "Алиновская Елена Францевна",
    "birthDate": "1904",
    "village": "Воскресеновка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 540,
    "fullName": "Алиновский Владеслав Семенович",
    "birthDate": "1926",
    "village": "Воскресеновка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 541,
    "fullName": "Андрухин Николай Васильевич",
    "birthDate": "1889",
    "village": "Вишневка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 542,
    "fullName": "Хруль Ефросиния",
    "birthDate": "1904",
    "village": "Вишневка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 543,
    "fullName": "Хруль Андрей Михайлович",
    "birthDate": "1922",
    "village": "Вишневка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 544,
    "fullName": "Хруль Екатерина Михайловна",
    "birthDate": "1950",
    "village": "Вишневка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 545,
    "fullName": "Кубаля Тамара Петровна",
    "birthDate": "1916",
    "village": "Вишневка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 546,
    "fullName": "Кубаля Николай Николаевич",
    "birthDate": "1942",
    "village": "Вишневка",
    "nat": "Русские",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 547,
    "fullName": "Лакомый Иосиф Иванович",
    "birthDate": "1888",
    "village": "Вишневка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 548,
    "fullName": "Паляч Нина Николаевна",
    "birthDate": "1917",
    "village": "Вишневка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 549,
    "fullName": "Брухунда Галина Кирилловна",
    "birthDate": "1901",
    "village": "Вишневка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 550,
    "fullName": "Полищук Георгий Иванович",
    "birthDate": "1937",
    "village": "Вишневка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 551,
    "fullName": "Полищук Андрей Иванович",
    "birthDate": "1940",
    "village": "Вишневка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 552,
    "fullName": "Полищук Тамара Адамовна",
    "birthDate": "1909",
    "village": "Вишневка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 553,
    "fullName": "Садовский Теодосий Васильевич",
    "birthDate": "1876",
    "village": "Вишневка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 554,
    "fullName": "Садовская Анастасия Антоновна",
    "birthDate": "1881",
    "village": "Вишневка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 555,
    "fullName": "Садовская Надежда Теодосьевна",
    "birthDate": "1920",
    "village": "Вишневка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 556,
    "fullName": "Садовская Александра Теодосьевна",
    "birthDate": "1921",
    "village": "Вишневка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 557,
    "fullName": "Зилинский Дмитрий Станиславович",
    "birthDate": "1913",
    "village": "Вишневка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 558,
    "fullName": "Багдей Иван Антонович",
    "birthDate": "1888",
    "village": "Вишневка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 559,
    "fullName": "Славинская Елена Владимировна",
    "birthDate": "1907",
    "village": "Искра",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 560,
    "fullName": "Славинский Эдмунд Петрович",
    "birthDate": "1925",
    "village": "Искра",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 561,
    "fullName": "Славинская Ванда Петровна",
    "birthDate": "1928",
    "village": "Искра",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 562,
    "fullName": "Славинский Мариан Петрович",
    "birthDate": "1958",
    "village": "Искра",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 563,
    "fullName": "Ярмолович Мария Игнатьевна",
    "birthDate": "1921",
    "village": "Искра",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 564,
    "fullName": "Ярмолович Казимир Брониславович",
    "birthDate": "1921",
    "village": "Искра",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 565,
    "fullName": "Ярмолович Мечислав Брониславович",
    "birthDate": "1926",
    "village": "Искра",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 566,
    "fullName": "Ярмолович Елена Брониславовна",
    "birthDate": "1931",
    "village": "Искра",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 567,
    "fullName": "Ярмолович Тереза Брониславовна",
    "birthDate": "1939",
    "village": "Искра",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 568,
    "fullName": "Оношко Иван Семенович",
    "birthDate": "1906",
    "village": "Искра",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 569,
    "fullName": "Оношко Мария Михайловна",
    "birthDate": "1908",
    "village": "Искра",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 570,
    "fullName": "Оношко Болеслав Юлианович",
    "birthDate": "1932",
    "village": "Искра",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 571,
    "fullName": "Оношко Бронислав Юлианович",
    "birthDate": "1933",
    "village": "Искра",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 572,
    "fullName": "Скроцкий Константин Феликсович",
    "birthDate": "1898",
    "village": "Искра",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 573,
    "fullName": "Скроцкая Тереза Ивановна",
    "birthDate": "1897",
    "village": "Искра",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 574,
    "fullName": "Скроцкая Ванда Константиновна",
    "birthDate": "1925",
    "village": "Искра",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 575,
    "fullName": "Скроцкий Владислав Константинович",
    "birthDate": "1925",
    "village": "Искра",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 576,
    "fullName": "Скроцкая Галина Константиновна",
    "birthDate": "1930",
    "village": "Искра",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 577,
    "fullName": "Сваток Клавдия Максимовна",
    "birthDate": "1903",
    "village": "Искра",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 578,
    "fullName": "Сваток Юлия Михайловна",
    "birthDate": "1927",
    "village": "Искра",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 579,
    "fullName": "Сваток Иван Михайлович",
    "birthDate": "1928",
    "village": "Искра",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 580,
    "fullName": "Сваток Лидия Михайловна",
    "birthDate": "1932",
    "village": "Искра",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 581,
    "fullName": "Сваток Ольга Михайловна",
    "birthDate": "1934",
    "village": "Искра",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 582,
    "fullName": "Сваток Екатерина Михайловна",
    "birthDate": "1938",
    "village": "Искра",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 583,
    "fullName": "Линская Юлия Исааковна",
    "birthDate": "1903",
    "village": "Искра",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 584,
    "fullName": "Линская Александра Брониславовна",
    "birthDate": "1927",
    "village": "Искра",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 585,
    "fullName": "Линская Галина Брониславовна",
    "birthDate": "1931",
    "village": "Искра",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 586,
    "fullName": "Полянин Антонина Иосифовна",
    "birthDate": "1907",
    "village": "Искра",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 587,
    "fullName": "Полянин Владислав Константинович",
    "birthDate": "1933",
    "village": "Искра",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 588,
    "fullName": "Полянин Александр Константинович",
    "birthDate": "1934",
    "village": "Искра",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 589,
    "fullName": "Полянин Анатолий Константинович",
    "birthDate": "1938",
    "village": "Искра",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 590,
    "fullName": "Шнидко Янина Владиславовна",
    "birthDate": "1915",
    "village": "Искра",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 591,
    "fullName": "Шнидко Галина Иосифовна",
    "birthDate": "1934",
    "village": "Искра",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 592,
    "fullName": "Шнидко Генрих Иосифович",
    "birthDate": "1937",
    "village": "Искра",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 593,
    "fullName": "Шнидко Янина Иосифовна",
    "birthDate": "1941",
    "village": "Искра",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 594,
    "fullName": "Шнидко Юстин Матвеевич",
    "birthDate": "1871",
    "village": "Искра",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 595,
    "fullName": "Шнидко Григорий Юстинович",
    "birthDate": "1910",
    "village": "Искра",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 596,
    "fullName": "Шнидко Екатерина Юстиновна",
    "birthDate": "1919",
    "village": "Искра",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 597,
    "fullName": "Шнидко Лилия Юстиновна",
    "birthDate": "1920",
    "village": "Искра",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 598,
    "fullName": "Тружпель Янина Ивановна",
    "birthDate": "1913",
    "village": "Искра",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 599,
    "fullName": "Тружпель Ришард Петрович",
    "birthDate": "1931",
    "village": "Искра",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 600,
    "fullName": "Матошко Ядвига Кайтановна",
    "birthDate": "1913",
    "village": "Искра",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 601,
    "fullName": "Матошко Люцина Юлиановна",
    "birthDate": "1935",
    "village": "Искра",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 602,
    "fullName": "Матошко Франциск Юлианович",
    "birthDate": "1937",
    "village": "Искра",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 603,
    "fullName": "Пуховский Николай Никифорович",
    "birthDate": "1919",
    "village": "Искра",
    "nat": "Белорусы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 604,
    "fullName": "Соколовская Мария Ивановна",
    "birthDate": "1911",
    "village": "Красный Октябрь",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 605,
    "fullName": "Наумчекова Амелия Иосифовна",
    "birthDate": "1889",
    "village": "Красный Октябрь",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 606,
    "fullName": "Барчук Франциская Ивановна",
    "birthDate": "1910",
    "village": "Красный Октябрь",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 607,
    "fullName": "Барчук Мария Михайловна",
    "birthDate": "1932",
    "village": "Красный Октябрь",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 608,
    "fullName": "Барчук Анна Михайловна",
    "birthDate": "1957",
    "village": "Красный Октябрь",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 609,
    "fullName": "Бабысюк Мария Степановна",
    "birthDate": "1880",
    "village": "Красный Октябрь",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 610,
    "fullName": "Дячук Юлия Филиповна",
    "birthDate": "1910",
    "village": "Красный Октябрь",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 611,
    "fullName": "Дячук Юлианна Григорьевна",
    "birthDate": "1880",
    "village": "Красный Октябрь",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 612,
    "fullName": "Подставка Галина Николаевна",
    "birthDate": "1927",
    "village": "Красный Октябрь",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 613,
    "fullName": "Подставка Станислава Николаевна",
    "birthDate": "1929",
    "village": "Красный Октябрь",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 614,
    "fullName": "Подставка Бронислава Николаевна",
    "birthDate": "1933",
    "village": "Красный Октябрь",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 615,
    "fullName": "Блащук Илья Иванович",
    "birthDate": "1875",
    "village": "Кондратовский питомник",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 616,
    "fullName": "Блащук Елена Степановна",
    "birthDate": "1889",
    "village": "Кондратовский питомник",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 617,
    "fullName": "Блащук Степан Ильич",
    "birthDate": "1900",
    "village": "Кондратовский питомник",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 618,
    "fullName": "Блащук Аделя Карловна",
    "birthDate": "1911",
    "village": "Кондратовский питомник",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 619,
    "fullName": "Блащук Гетруда Степановна",
    "birthDate": "1930",
    "village": "Кондратовский питомник",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 620,
    "fullName": "Блащук Чеслав Степанович",
    "birthDate": "1936",
    "village": "Кондратовский питомник",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 621,
    "fullName": "Шевчик Данута Константиновна",
    "birthDate": "1927",
    "village": "Становое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 622,
    "fullName": "Шарангович Зинаида Ивановна",
    "birthDate": "1933",
    "village": "Становое",
    "nat": "Белорусы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 623,
    "fullName": "Малевич Адальфина Адольфовна",
    "birthDate": "1909",
    "village": "Становое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 624,
    "fullName": "Ковакова Гетруда Антновна",
    "birthDate": "1907",
    "village": "Становое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 625,
    "fullName": "Ковакова Кристина Павловна",
    "birthDate": "1930",
    "village": "Становое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 626,
    "fullName": "Коваков Адам Павлович",
    "birthDate": "1931",
    "village": "Становое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 627,
    "fullName": "Ковакова Мария Павловна",
    "birthDate": "1933",
    "village": "Становое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 628,
    "fullName": "Ковакова Янина Павловна",
    "birthDate": "1935",
    "village": "Становое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 629,
    "fullName": "Дубяга Стефания Степановна",
    "birthDate": "1873",
    "village": "Становое",
    "nat": "Белорусы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 630,
    "fullName": "Дубяга Ольга Семеновна",
    "birthDate": "1907",
    "village": "Становое",
    "nat": "Белорусы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 631,
    "fullName": "Дубяга Елена Константиновна",
    "birthDate": "1936",
    "village": "Становое",
    "nat": "Белорусы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 632,
    "fullName": "Войцекова Станислава Мартиновна",
    "birthDate": "1905",
    "village": "Становое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 633,
    "fullName": "Войцеков Болеслав Иванович",
    "birthDate": "1929",
    "village": "Становое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 634,
    "fullName": "Ягеллович Ядвига Францевна",
    "birthDate": "1934",
    "village": "Становое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 635,
    "fullName": "Ягеллович Януш Францевич",
    "birthDate": "1938",
    "village": "Становое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 636,
    "fullName": "Ягеллович Александра Викентьевна",
    "birthDate": "1874",
    "village": "Становое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 637,
    "fullName": "Дзяловская Мария Иосифовна",
    "birthDate": "1911",
    "village": "Становое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 638,
    "fullName": "Дзяловская Ядвига Рудольфовна",
    "birthDate": "1932",
    "village": "Становое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 639,
    "fullName": "Дзяловский Тадеуш Рудольфович",
    "birthDate": "1935",
    "village": "Становое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 640,
    "fullName": "Дзяловский Эдуард Рудольфович",
    "birthDate": "1936",
    "village": "Становое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 641,
    "fullName": "Чернявская Мария Ивановна",
    "birthDate": "1900",
    "village": "Становое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 642,
    "fullName": "Чернявский Виктор Иванович",
    "birthDate": "1932",
    "village": "Становое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 643,
    "fullName": "Чернявский Бронислав Иванович",
    "birthDate": "1936",
    "village": "Становое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 644,
    "fullName": "Нестерович Эмилия Марковна",
    "birthDate": "1884",
    "village": "Становое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 645,
    "fullName": "Сколуцкая Стефания Антоновна",
    "birthDate": "1882",
    "village": "Становое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 646,
    "fullName": "Данкевич Юлин Романовна",
    "birthDate": "1908",
    "village": "Становое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 647,
    "fullName": "Малевич Регина Николаевна",
    "birthDate": "1930",
    "village": "Становое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 648,
    "fullName": "Малевич Эльвира Николаевна",
    "birthDate": "1932",
    "village": "Становое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 649,
    "fullName": "Левитас Семьен Давидович",
    "birthDate": "1885",
    "village": "Становое",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 650,
    "fullName": "Климович Павлина Леонтьевна",
    "birthDate": "1888",
    "village": "Становое",
    "nat": "Белорусы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 651,
    "fullName": "Климович Александр Никифорович",
    "birthDate": "1927",
    "village": "Становое",
    "nat": "Белорусы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 652,
    "fullName": "Климович Ольга Никифоровна",
    "birthDate": "1929",
    "village": "Становое",
    "nat": "Белорусы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 653,
    "fullName": "Климович Виктор Никифоровна",
    "birthDate": "1931",
    "village": "Становое",
    "nat": "Белорусы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 654,
    "fullName": "Климивич Анна Никифоровна",
    "birthDate": "1939",
    "village": "Становое",
    "nat": "Белорусы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 655,
    "fullName": "Давидович Геннадий Никифорович",
    "birthDate": "1933",
    "village": "Становое",
    "nat": "Белорусы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 656,
    "fullName": "Давидович Вадим Никифорович",
    "birthDate": "1937",
    "village": "Становое",
    "nat": "Белорусы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 657,
    "fullName": "Подковка Яков иосифович",
    "birthDate": "1918",
    "village": "Становое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 658,
    "fullName": "Сивицкий Бронислав Францевич",
    "birthDate": "1929",
    "village": "Становое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 659,
    "fullName": "Глувчик Иосиф Иванович",
    "birthDate": "1931",
    "village": "Становое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 660,
    "fullName": "Глувчик Иван Иванович",
    "birthDate": "1929",
    "village": "Становое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 661,
    "fullName": "Кузьмова Юзефа Михайловна",
    "birthDate": "1906",
    "village": "Дмитровка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 662,
    "fullName": "Кузьмова Владислав Антонович",
    "birthDate": "1934",
    "village": "Дмитровка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 663,
    "fullName": "Кузьмова Тереза Антоновна",
    "birthDate": "1934",
    "village": "Дмитровка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 664,
    "fullName": "Кузьмова Ядвига Антоновна",
    "birthDate": "1929",
    "village": "Дмитровка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 665,
    "fullName": "Котова Бронислава Антоновна",
    "birthDate": "1894",
    "village": "Дмитровка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 666,
    "fullName": "Котов Тадеуш Станиславович",
    "birthDate": "1929",
    "village": "Дмитровка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 667,
    "fullName": "Релета Емильян Иванович",
    "birthDate": "1908",
    "village": "Дмитровка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 668,
    "fullName": "Релета Софья Федоровна",
    "birthDate": "1908",
    "village": "Дмитровка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 669,
    "fullName": "Релета Емильян Емильянович",
    "birthDate": "1931",
    "village": "Дмитровка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 670,
    "fullName": "Релета Ярослав Емильянович",
    "birthDate": "1933",
    "village": "Дмитровка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 671,
    "fullName": "Релета Богдан Емильянович",
    "birthDate": "1936",
    "village": "Дмитровка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 672,
    "fullName": "Борак Федор Иванович",
    "birthDate": "1878",
    "village": "Дмитровка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 673,
    "fullName": "Борак Михалина Семьеновна",
    "birthDate": "1880",
    "village": "Дмитровка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 674,
    "fullName": "Мульк Василий Никитич",
    "birthDate": "1889",
    "village": "Дмитровка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 675,
    "fullName": "Мульк Мария Васильевна",
    "birthDate": "1891",
    "village": "Дмитровка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 676,
    "fullName": "Мульк Анна Васильевна",
    "birthDate": "1928",
    "village": "Дмитровка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 677,
    "fullName": "Боряк Мария Георгьевна",
    "birthDate": "1914",
    "village": "Дмитровка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 678,
    "fullName": "Боряк Евгения Георгьевна",
    "birthDate": "1934",
    "village": "Дмитровка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 679,
    "fullName": "Жук Владимир Сильвестрович",
    "birthDate": "1909",
    "village": "Дмитровка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 680,
    "fullName": "Комар Павлина Николаевна",
    "birthDate": "1909",
    "village": "Дмитровка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 681,
    "fullName": "Комар Ольга Николаевна",
    "birthDate": "1937",
    "village": "Дмитровка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 682,
    "fullName": "Комар Надежда Николаевна",
    "birthDate": "1940",
    "village": "Дмитровка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 683,
    "fullName": "Лукьянчук Анна Матвеевна",
    "birthDate": "1906",
    "village": "Дмитровка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 684,
    "fullName": "Лукьянчук Мария Ивановна",
    "birthDate": "1930",
    "village": "Дмитровка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 685,
    "fullName": "Лукьянчук Надежда Ивановна",
    "birthDate": "1934",
    "village": "Дмитровка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 686,
    "fullName": "Лукьянчук Иван Иванович",
    "birthDate": "1936",
    "village": "Дмитровка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 687,
    "fullName": "Лизес Рафаэль Хителевич",
    "birthDate": "1922",
    "village": "Дмитровка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 688,
    "fullName": "Барошнюк Елена Афонасьевна",
    "birthDate": "1901",
    "village": "Серебряки",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 689,
    "fullName": "Барошнюк Николай Игнатьевич",
    "birthDate": "1927",
    "village": "Серебряки",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 690,
    "fullName": "Барошнюк Семен Карпович",
    "birthDate": "1877",
    "village": "Серебряки",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 691,
    "fullName": "Барошнюк Анна Мироновна",
    "birthDate": "1876",
    "village": "Серебряки",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 692,
    "fullName": "Галимский Веслав Константинович",
    "birthDate": "1940",
    "village": "Серебряки",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 693,
    "fullName": "Добровольская Бронислава Игнатьевна",
    "birthDate": "1898",
    "village": "Серебряки",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 694,
    "fullName": "Добровольская Янина Викторовна",
    "birthDate": "1927",
    "village": "Серебряки",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 695,
    "fullName": "Добровольский Войцех Викторович",
    "birthDate": "1929",
    "village": "Серебряки",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 696,
    "fullName": "Добровольская Мария Викторовна",
    "birthDate": "1937",
    "village": "Серебряки",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 697,
    "fullName": "Добровольская Тереза Викторовна",
    "birthDate": "1939",
    "village": "Серебряки",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 698,
    "fullName": "Годзишевская Бронислава Иосифовна",
    "birthDate": "1896",
    "village": "Серебряки",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 699,
    "fullName": "Годзишевский Слава Степанович",
    "birthDate": "1920",
    "village": "Серебряки",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 700,
    "fullName": "Крачинская Янина Степановна",
    "birthDate": "1898",
    "village": "Серебряки",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 701,
    "fullName": "Каминская Антонина Константиновна",
    "birthDate": "1904",
    "village": "Серебряки",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 702,
    "fullName": "Каминский Иван Иосифович",
    "birthDate": "1927",
    "village": "Серебряки",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 703,
    "fullName": "Каминская Мария Иосифовна",
    "birthDate": "1929",
    "village": "Серебряки",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 704,
    "fullName": "Котарская Елизавета Владиславовна",
    "birthDate": "1954",
    "village": "Серебряки",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 705,
    "fullName": "Оковинская Франциска Матвеевна",
    "birthDate": "1873",
    "village": "Серебряки",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 706,
    "fullName": "Сыхова Ядвига Болеславовна",
    "birthDate": "1878",
    "village": "Серебряки",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 707,
    "fullName": "Серагчёва Тереза Фердинандовна",
    "birthDate": "1904",
    "village": "Серебряки",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 708,
    "fullName": "Лещук Кондрат Сергеевич",
    "birthDate": "1907",
    "village": "Серебряки",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 709,
    "fullName": "Лещук Александра Алексеевна",
    "birthDate": "1910",
    "village": "Серебряки",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 710,
    "fullName": "Магдыч Дмитрий Иванович",
    "birthDate": "1913",
    "village": "Серебряки",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 711,
    "fullName": "Магдыч Даминика Филиповна",
    "birthDate": "1912",
    "village": "Серебряки",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 712,
    "fullName": "Магдыч Владислав Дмитревич",
    "birthDate": "1934",
    "village": "Серебряки",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 713,
    "fullName": "Магдыч Елизавета Дмитревна",
    "birthDate": "1935",
    "village": "Серебряки",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 714,
    "fullName": "Магдыч Александра Григорьевна",
    "birthDate": "1879",
    "village": "Серебряки",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 715,
    "fullName": "Андрущук Иван Федорович",
    "birthDate": "1912",
    "village": "Серебряки",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 716,
    "fullName": "Андрущук Ирина Петровна",
    "birthDate": "1919",
    "village": "Серебряки",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 717,
    "fullName": "Сонседская Божена Фадеевна",
    "birthDate": "1936",
    "village": "Серебряки",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 718,
    "fullName": "Арабский Илья Кузьмич",
    "birthDate": "1882",
    "village": "Серебряки",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 719,
    "fullName": "Арабская Кристина Никифоровна",
    "birthDate": "1882",
    "village": "Серебряки",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 720,
    "fullName": "Арабский Борис Никитич",
    "birthDate": "1930",
    "village": "Серебряки",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 721,
    "fullName": "Арабский Петр Никитич",
    "birthDate": "1932",
    "village": "Серебряки",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 722,
    "fullName": "Антоненко Иван Никитьевич",
    "birthDate": "1875",
    "village": "Калугино",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 723,
    "fullName": "Антоненко Юлия Ивановна",
    "birthDate": "1914",
    "village": "Калугино",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 724,
    "fullName": "Антоненко Ядвига Ивановна",
    "birthDate": "1916",
    "village": "Калугино",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 725,
    "fullName": "Антоненко Аделя Антоновна",
    "birthDate": "1910",
    "village": "Калугино",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 726,
    "fullName": "Данкульский Петр Георгиевич",
    "birthDate": "1906",
    "village": "Калугино",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 727,
    "fullName": "Данкульский Саламон Иванович",
    "birthDate": "1903",
    "village": "Калугино",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 728,
    "fullName": "Данкульский Генрих Петрович",
    "birthDate": "1929",
    "village": "Калугино",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 729,
    "fullName": "Данкульская Елена Петровна",
    "birthDate": "1930",
    "village": "Калугино",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 730,
    "fullName": "Данкульский Павел Петрович",
    "birthDate": "1932",
    "village": "Калугино",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 731,
    "fullName": "Данкульский Здзислав Петрович",
    "birthDate": "1934",
    "village": "Калугино",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 732,
    "fullName": "Данкульский Леопольд Петрович",
    "birthDate": "1937",
    "village": "Калугино",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 733,
    "fullName": "Федорович Мария Эразмовна",
    "birthDate": "1892",
    "village": "Калугино",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 734,
    "fullName": "Кемпская Елена Викентьевна",
    "birthDate": "1908",
    "village": "Калугино",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 735,
    "fullName": "Кемпскаий тадеуш Марианович",
    "birthDate": "1939",
    "village": "Калугино",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 736,
    "fullName": "Намерковская Ядвига Станиславовна",
    "birthDate": "1906",
    "village": "Калугино",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 737,
    "fullName": "Намерковский Рамуальд Владиславович",
    "birthDate": "1930",
    "village": "Калугино",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 738,
    "fullName": "Намерковский  Владиславович",
    "birthDate": "1932",
    "village": "Калугино",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 739,
    "fullName": "Намерковская Елизавета Владиславовна",
    "birthDate": "1938",
    "village": "Калугино",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 740,
    "fullName": "Сальманович Анна Леоновна",
    "birthDate": "1886",
    "village": "Калугино",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 741,
    "fullName": "Гуз Исаак Авраамович",
    "birthDate": "1907",
    "village": "Калугино",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 742,
    "fullName": "Шумская Анна Константиновна",
    "birthDate": "1876",
    "village": "Калугино",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 743,
    "fullName": "Вонсовская Альдана Иосифовна",
    "birthDate": "1911",
    "village": "Калугино",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 744,
    "fullName": "Вонсовская Софья Станиславовна",
    "birthDate": "1933",
    "village": "Калугино",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 745,
    "fullName": "Вонсовская Мария Станиславовна",
    "birthDate": "1934",
    "village": "Калугино",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 746,
    "fullName": "Томашевич Степан Иванович",
    "birthDate": "1899",
    "village": "Калугино",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 747,
    "fullName": "Томашевич Вероника Иосифовна",
    "birthDate": "1902",
    "village": "Калугино",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 748,
    "fullName": "Томашевич Ванда Степановна",
    "birthDate": "1924",
    "village": "Калугино",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 749,
    "fullName": "Томашевич Ромуальд Степанович",
    "birthDate": "1927",
    "village": "Калугино",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 750,
    "fullName": "Томашевич Эдуард Степанович",
    "birthDate": "1929",
    "village": "Калугино",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 751,
    "fullName": "Томашевич Зеновий Степанович",
    "birthDate": "1930",
    "village": "Калугино",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 752,
    "fullName": "Томашевич Владислав Степанович",
    "birthDate": "1943",
    "village": "Калугино",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 753,
    "fullName": "Большакова Агрешина Макаровна",
    "birthDate": "1917",
    "village": "Совхоз 288",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 754,
    "fullName": "Большаков Федор Федорович",
    "birthDate": "1940",
    "village": "Совхоз 288",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 755,
    "fullName": "Большакова Наталья Арсентьевна",
    "birthDate": "1912",
    "village": "Совхоз 288",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 756,
    "fullName": "Большакова Анна Викентьевна",
    "birthDate": "1885",
    "village": "Совхоз 288",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 757,
    "fullName": "Шук Анна Онуфрьевна",
    "birthDate": "1880",
    "village": "Совхоз 288",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 758,
    "fullName": "Бяловус Георгий Алексеевич",
    "birthDate": "1936",
    "village": "Совхоз 288",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 759,
    "fullName": "Бяловус Софья Алексеевна",
    "birthDate": "1935",
    "village": "Совхоз 288",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 760,
    "fullName": "Деревич Антонина Адамовна",
    "birthDate": "1892",
    "village": "Совхоз 288",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 761,
    "fullName": "Деревич Богдан Иосифович",
    "birthDate": "1929",
    "village": "Совхоз 288",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 762,
    "fullName": "Колопенько Василий Иосифович",
    "birthDate": "1910",
    "village": "Совхоз 288",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 763,
    "fullName": "Росса Петр Иванович",
    "birthDate": "1940",
    "village": "Совхоз 288",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 764,
    "fullName": "Максимчук Владимир Спиридонович",
    "birthDate": "1916",
    "village": "Совхоз 288",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 765,
    "fullName": "Гжельковяк Любовь Михайловна",
    "birthDate": "1898",
    "village": "Совхоз 288",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 766,
    "fullName": "Гжельковяк Евгения Владимировна",
    "birthDate": "1926",
    "village": "Совхоз 288",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 767,
    "fullName": "Гжельковяк Елена Владимировна",
    "birthDate": "1927",
    "village": "Совхоз 288",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 768,
    "fullName": "Гжельковяк Иван Владимирович",
    "birthDate": "1929",
    "village": "Совхоз 288",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 769,
    "fullName": "Гжельклвяк Софья Владимировна",
    "birthDate": "1933",
    "village": "Совхоз 288",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 770,
    "fullName": "Собчик Мария Викентьевна",
    "birthDate": "1905",
    "village": "Совхоз 288",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 771,
    "fullName": "Собчик Иосиф Станиславович",
    "birthDate": "1936",
    "village": "Совхоз 288",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 772,
    "fullName": "Собчик Ядвига Станиславовна",
    "birthDate": "1933",
    "village": "Совхоз 288",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 773,
    "fullName": "Собчик Генрих Станиславович",
    "birthDate": "1931",
    "village": "Совхоз 288",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 774,
    "fullName": "Собчик Войцех Станиславович",
    "birthDate": "1930",
    "village": "Совхоз 288",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 775,
    "fullName": "Тимощук Захарий Климентьевич",
    "birthDate": "1910",
    "village": "Совхоз 288",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 776,
    "fullName": "Верхович Пелагея Станиславовна",
    "birthDate": "1903",
    "village": "Совхоз 288",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 777,
    "fullName": "Верхович Збигнев Михайлович",
    "birthDate": "1930",
    "village": "Совхоз 288",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 778,
    "fullName": "Верхович Тереза Михайловна",
    "birthDate": "1932",
    "village": "Совхоз 288",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 779,
    "fullName": "Верхович Фома Михайловна",
    "birthDate": "1936",
    "village": "Совхоз 288",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 780,
    "fullName": "Гуттман Левий Айяшович",
    "birthDate": "1911",
    "village": "Казанка",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 781,
    "fullName": "Герцунова Стефания Францевна",
    "birthDate": "1893",
    "village": "Казанка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 782,
    "fullName": "Камтур Андрей Георгьевич",
    "birthDate": "1873",
    "village": "Казанка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 783,
    "fullName": "Камтур Юлия Антоновна",
    "birthDate": "1876",
    "village": "Казанка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 784,
    "fullName": "Камтур Татьяна Андреевна",
    "birthDate": "1919",
    "village": "Казанка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 785,
    "fullName": "Щоглович Леонтий Войцехович",
    "birthDate": "1880",
    "village": "Казанка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 786,
    "fullName": "Пасечник Павел",
    "birthDate": "1914",
    "village": "Казанка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 787,
    "fullName": "Бабышко Янина Сильвестровна",
    "birthDate": "1903",
    "village": "Безкамышка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 788,
    "fullName": "Бабышко Лонгина Петровна",
    "birthDate": "1930",
    "village": "Безкамышка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 789,
    "fullName": "Бабышко Вячеслав Петровна",
    "birthDate": "1928",
    "village": "Безкамышка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 790,
    "fullName": "Мороз Стефания Степановна",
    "birthDate": "1909",
    "village": "Безкамышка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 791,
    "fullName": "Мороз Мария Феликсовна",
    "birthDate": "1929",
    "village": "Безкамышка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 792,
    "fullName": "Мороз Степан Феликсович",
    "birthDate": "1941",
    "village": "Безкамышка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 793,
    "fullName": "Бабышко Михалина Донатовна",
    "birthDate": "1872",
    "village": "Безкамышка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 794,
    "fullName": "Малдрык Анастасия Михайловна",
    "birthDate": "1867",
    "village": "Безкамышка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 795,
    "fullName": "Конахович Вера Антоновна",
    "birthDate": "1920",
    "village": "Безкамышка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 796,
    "fullName": "Конахович Янина Брониславовна",
    "birthDate": "1938",
    "village": "Безкамышка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 797,
    "fullName": "Ратушная Наталья Федоровна",
    "birthDate": "1919",
    "village": "Безкамышка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 798,
    "fullName": "Ратушная Владимира Федоровна",
    "birthDate": "1937",
    "village": "Безкамышка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 799,
    "fullName": "Скалецкая Михалина Степановна",
    "birthDate": "1916",
    "village": "Безкамышка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 800,
    "fullName": "Джусь Генофефа Николаевна",
    "birthDate": "1916",
    "village": "Безкамышка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 801,
    "fullName": "Джусь Софья Иосифовна",
    "birthDate": "1936",
    "village": "Безкамышка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 802,
    "fullName": "Джусь Ксения Прокопьевна",
    "birthDate": "1867",
    "village": "Безкамышка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 803,
    "fullName": "Гептинг Стефания Степановна",
    "birthDate": "1908",
    "village": "Щучье",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 804,
    "fullName": "Гептинг Мария Емильяновна",
    "birthDate": "1933",
    "village": "Щучье",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 805,
    "fullName": "Гептинг Станислав Емильянович",
    "birthDate": "1938",
    "village": "Щучье",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 806,
    "fullName": "Добротвор Петр Авсентьевич",
    "birthDate": "1882",
    "village": "Щучье",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 807,
    "fullName": "Добротвор Софья Дмитрьевна",
    "birthDate": "1886",
    "village": "Щучье",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 808,
    "fullName": "Шарская Елена Ивановна",
    "birthDate": "1861",
    "village": "Щучье",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 809,
    "fullName": "Шарский Владислав Станиславович",
    "birthDate": "1886",
    "village": "Щучье",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 810,
    "fullName": "Шарский Александр Станиславович",
    "birthDate": "1886",
    "village": "Щучье",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 811,
    "fullName": "Кравченко Ксения Венидиктович",
    "birthDate": "1902",
    "village": "Щучье",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 812,
    "fullName": "Кравченко Глафира Леонтьевна",
    "birthDate": "1929",
    "village": "Щучье",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 813,
    "fullName": "Кравченко Зинаида Леонтьевич",
    "birthDate": "1931",
    "village": "Щучье",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 814,
    "fullName": "Кравченко Валентина Леонтьевна",
    "birthDate": "1937",
    "village": "Щучье",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 815,
    "fullName": "Кравченко Татьяна Леонтьевна",
    "birthDate": "1939",
    "village": "Щучье",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 816,
    "fullName": "Дворецкая Александра Степановна",
    "birthDate": "1862",
    "village": "Щучье",
    "nat": "Белорусы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 817,
    "fullName": "Данилевич Василий Константинович",
    "birthDate": "1885",
    "village": "Щучье",
    "nat": "Белорусы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 818,
    "fullName": "Данилевич Ева Ивановна",
    "birthDate": "1888",
    "village": "Щучье",
    "nat": "Белорусы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 819,
    "fullName": "Данилевич Антон Васильевич",
    "birthDate": "1918",
    "village": "Щучье",
    "nat": "Белорусы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 820,
    "fullName": "Савчук Мария Павловна",
    "birthDate": "1886",
    "village": "Щучье",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 821,
    "fullName": "Ходачек Иван Фомич",
    "birthDate": "1921",
    "village": "Щучье",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 822,
    "fullName": "Верещак Фекла Яковлевна",
    "birthDate": "1908",
    "village": "Щучье",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 823,
    "fullName": "Верещак Любовь Петровна",
    "birthDate": "1930",
    "village": "Щучье",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 824,
    "fullName": "Верещак Мария Петровна",
    "birthDate": "1936",
    "village": "Щучье",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 825,
    "fullName": "Лысый Степан Маркович",
    "birthDate": "1878",
    "village": "Щучье",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 826,
    "fullName": "Лысая Ксения Яковлевна",
    "birthDate": "1879",
    "village": "Щучье",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 827,
    "fullName": "Лысый Северин Степанович",
    "birthDate": "1916",
    "village": "Щучье",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 828,
    "fullName": "Лысый Николай Степанович",
    "birthDate": "1917",
    "village": "Щучье",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 829,
    "fullName": "Веломоньская Мария Степановна",
    "birthDate": "1913",
    "village": "Щучье",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 830,
    "fullName": "Веломоньский Степан Владимирович",
    "birthDate": "1939",
    "village": "Щучье",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 831,
    "fullName": "Заёнчковский Игнатий Семенович",
    "birthDate": "1885",
    "village": "Щучье",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 832,
    "fullName": "Заёнчковский Мария Лукьяновна",
    "birthDate": "1889",
    "village": "Щучье",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 833,
    "fullName": "Рузик Антонина Савична",
    "birthDate": "1905",
    "village": "Безкозубово",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 834,
    "fullName": "Гловацкая Анеля Карповна",
    "birthDate": "1905",
    "village": "Безкозубово",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 835,
    "fullName": "Козловская Мария Потаповна",
    "birthDate": "1894",
    "village": "Безкозубово",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 836,
    "fullName": "Козловский Георгий Станиславович",
    "birthDate": "1933",
    "village": "Безкозубово",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 837,
    "fullName": "Козловская Ирина Станиславовна",
    "birthDate": "1939",
    "village": "Безкозубово",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 838,
    "fullName": "Шпарус Фекла Потаповна",
    "birthDate": "1879",
    "village": "Безкозубово",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 839,
    "fullName": "Ямроз Ядвига Федоровна",
    "birthDate": "1909",
    "village": "Безкозубово",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 840,
    "fullName": "Ямроз Ванда Владиславовна",
    "birthDate": "1933",
    "village": "Безкозубово",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 841,
    "fullName": "Ямроз Данута Владиславовна",
    "birthDate": "1937",
    "village": "Безкозубово",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 842,
    "fullName": "Берковская Прасковья Максимовна",
    "birthDate": "1882",
    "village": "Безкозубово",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 843,
    "fullName": "Оношко Юстин Викентьевич",
    "birthDate": "1873",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 844,
    "fullName": "Оношко Софья Юстиновна",
    "birthDate": "1899",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 845,
    "fullName": "Оношко Виктор Юстинович",
    "birthDate": "1903",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 846,
    "fullName": "Оношко Витка Юстинович",
    "birthDate": "1928",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 847,
    "fullName": "Станяк Александра Иосифовна",
    "birthDate": "1898",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 848,
    "fullName": "Станяк Ванда Фоминишна",
    "birthDate": "1928",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 849,
    "fullName": "Станяк Ирина Фоминишна",
    "birthDate": "1935",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 850,
    "fullName": "Иссаковская Мария Сигизмундовна",
    "birthDate": "1892",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 851,
    "fullName": "Иссаковский Здрислав Юлтианович",
    "birthDate": "1925",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 852,
    "fullName": "Иссаковская Алина Адольфовна",
    "birthDate": "1870",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 853,
    "fullName": "Маршалова Александра Францевна",
    "birthDate": "1885",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 854,
    "fullName": "Маршалов Сигизмунд Брониславович",
    "birthDate": "1926",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 855,
    "fullName": "Маршалов Тадеуш Брониславович",
    "birthDate": "1928",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 856,
    "fullName": "Лубневский Николай Николаевич",
    "birthDate": "1864",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 857,
    "fullName": "Лубневская Юзефа Александровна",
    "birthDate": "1910",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 858,
    "fullName": "Лубневская Альфреда Сигизмундовна",
    "birthDate": "1931",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 859,
    "fullName": "Лубневский Ромуальд Сигизмундович",
    "birthDate": "1935",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 860,
    "fullName": "Леохо Мария Иосифовна",
    "birthDate": "1904",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 861,
    "fullName": "Леохо Станислава Иосифовна",
    "birthDate": "1923",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 862,
    "fullName": "Леохо Леокардия Иосифовна",
    "birthDate": "1924",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 863,
    "fullName": "Леохо Генрих Иосифович",
    "birthDate": "1926",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 864,
    "fullName": "Леохо Эдуард Иосифович",
    "birthDate": "1929",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 865,
    "fullName": "Леохо Франциск Иосифович",
    "birthDate": "1933",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 866,
    "fullName": "Леохо Марияан Иосифович",
    "birthDate": "1939",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 867,
    "fullName": "Лодко Анастасия Феликсовна",
    "birthDate": "1870",
    "village": "Белое",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 868,
    "fullName": "Хармац Зальман Бенционович",
    "birthDate": "1914",
    "village": "Белое",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 869,
    "fullName": "Хармац Лея Хаимовна",
    "birthDate": "1905",
    "village": "Белое",
    "nat": "Евреи",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 870,
    "fullName": "Галушак Николай Викторович",
    "birthDate": "1912",
    "village": "Белое",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 871,
    "fullName": "Беляк Хоно",
    "birthDate": "1891",
    "village": "Белое",
    "nat": "Евреи",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 872,
    "fullName": "Кахменецка Климентина Павловна",
    "birthDate": "1881",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 873,
    "fullName": "Рачковский Альфонс Иосифович",
    "birthDate": "1905",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 874,
    "fullName": "Рачковская Анастасия Яковлевна",
    "birthDate": "1908",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 875,
    "fullName": "Рачковский Чеслав Альфонсович",
    "birthDate": "1929",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 876,
    "fullName": "Рачковская Доминика Альфонсовна",
    "birthDate": "1932",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 877,
    "fullName": "Бендковская Иоанна Ивановна",
    "birthDate": "1913",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 878,
    "fullName": "Бендковский Феликс Петрович",
    "birthDate": "1938",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 879,
    "fullName": "Кубяк Анеля Лаврентьевна",
    "birthDate": "1899",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 880,
    "fullName": "Козяк Мария Васильевна",
    "birthDate": "1909",
    "village": "Белое",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 881,
    "fullName": "Козяк Иван Антонович",
    "birthDate": "1933",
    "village": "Белое",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 882,
    "fullName": "Эймунд Богдан Владиславович",
    "birthDate": "1928",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 883,
    "fullName": "Казьмерчак Агнешка Антоновна",
    "birthDate": "1899",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 884,
    "fullName": "Казьмерчак Елена Степановна",
    "birthDate": "1923",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 885,
    "fullName": "Роговская Элеонора Войцеховна",
    "birthDate": "1911",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 886,
    "fullName": "Роговский Богумил Иосифович",
    "birthDate": "1933",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 887,
    "fullName": "Роговский Лех Иосифович",
    "birthDate": "1936",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 888,
    "fullName": "Спиневская Станислава Флорича",
    "birthDate": "1901",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 889,
    "fullName": "Спиневская Анна Станиславовна",
    "birthDate": "1928",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 890,
    "fullName": "Спиневская Ирина Станиславовна",
    "birthDate": "1932",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 891,
    "fullName": "Спиневский Георгий Станиславович",
    "birthDate": "1937",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 892,
    "fullName": "Охаль Аполония Казимировна",
    "birthDate": "1897",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 893,
    "fullName": "Охаль Казимира Казимировна",
    "birthDate": "1923",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 894,
    "fullName": "Охаль Клара Казимировна",
    "birthDate": "1927",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 895,
    "fullName": "Охаль Леопольда Казимировна",
    "birthDate": "1932",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 896,
    "fullName": "Шах Казимир Иванович",
    "birthDate": "1923",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 897,
    "fullName": "Шах Чеслав Иванович",
    "birthDate": "1925",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 898,
    "fullName": "Заложевская Станислава Ивановна",
    "birthDate": "1920",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 899,
    "fullName": "Окушко Людовик Александрович",
    "birthDate": "1873",
    "village": "Белое",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 900,
    "fullName": "Соловчук Афонасий Никифорович",
    "birthDate": "1914",
    "village": "Белое",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 901,
    "fullName": "Соловчук Мелания Власьевна",
    "birthDate": "1915",
    "village": "Белое",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 902,
    "fullName": "Соловчуек Ольга Афонасьевна",
    "birthDate": "1936",
    "village": "Белое",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 903,
    "fullName": "Соловчук Петр Афонасьевич",
    "birthDate": "1939",
    "village": "Белое",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 904,
    "fullName": "Древецкий Захарий Михайлович",
    "birthDate": "1883",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 905,
    "fullName": "Древецкая Анна Ивановна",
    "birthDate": "1887",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 906,
    "fullName": "Майшутович Софья Александровна",
    "birthDate": "1912",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 907,
    "fullName": "Майшутович Галина Измаиловна",
    "birthDate": "1932",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 908,
    "fullName": "Майшутович Арша Измаиловна",
    "birthDate": "1936",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 909,
    "fullName": "Майшутович Ибрагим Измаилович",
    "birthDate": "1934",
    "village": "Белое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 910,
    "fullName": "Раздеришин Алина",
    "birthDate": "1895",
    "village": "Белое",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 911,
    "fullName": "Рогульская Леонида Антоновна",
    "birthDate": "1928",
    "village": "Жагрино",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 912,
    "fullName": "Рогульский Феликс Антонович",
    "birthDate": "1935",
    "village": "Жагрино",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 913,
    "fullName": "Поилевка Иван Васильевич",
    "birthDate": "1935",
    "village": "Жагрино",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 914,
    "fullName": "Поилевка Константин Васильевич",
    "birthDate": "1936",
    "village": "Жагрино",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 915,
    "fullName": "Заблоцкий Витовд Болеславович",
    "birthDate": "1926",
    "village": "Сливное",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 916,
    "fullName": "Жирардовская Ванда Зеноновна",
    "birthDate": "1927",
    "village": "Сливное",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 917,
    "fullName": "Жирардовский Зеновий Зенонович",
    "birthDate": "1931",
    "village": "Сливное",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 918,
    "fullName": "Стапинская Мария Викентьевна",
    "birthDate": "1907",
    "village": "Сливное",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 919,
    "fullName": "Стапинская Владислава Владиславовна",
    "birthDate": "1934",
    "village": "Сливное",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 920,
    "fullName": "Стапинская Ванда Владиславовна",
    "birthDate": "1927",
    "village": "Сливное",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 921,
    "fullName": "Гапанович Кристина Григорьевна",
    "birthDate": "1877",
    "village": "Сливное",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 922,
    "fullName": "Русецкий Витовд Михайлович",
    "birthDate": "1887",
    "village": "Сливное",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 923,
    "fullName": "Русецкий Карл Витольдович",
    "birthDate": "1926",
    "village": "Сливное",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 924,
    "fullName": "Русецкая Елена Витольдовна",
    "birthDate": "1929",
    "village": "Сливное",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 925,
    "fullName": "Русецкий Константин Витольдович",
    "birthDate": "1937",
    "village": "Сливное",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 926,
    "fullName": "Пизинская Моника Казимировна",
    "birthDate": "1905",
    "village": "Сливное",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 927,
    "fullName": "Пизинская Ирина Степановна",
    "birthDate": "1927",
    "village": "Сливное",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 928,
    "fullName": "Пизиский Януш Степанович",
    "birthDate": "1931",
    "village": "Сливное",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 929,
    "fullName": "Журавский Станислав Иванович",
    "birthDate": "1878",
    "village": "Сливное",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 930,
    "fullName": "Журавская Антонина Александровна",
    "birthDate": "1882",
    "village": "Сливное",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 931,
    "fullName": "Журавская Мечуслава Адамовна",
    "birthDate": "1915",
    "village": "Сливное",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 932,
    "fullName": "Журавский Мирослав Иосифович",
    "birthDate": "1938",
    "village": "Сливное",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 933,
    "fullName": "Журавская Елена Станиславовна",
    "birthDate": "1927",
    "village": "Сливное",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 934,
    "fullName": "Березецкий Казимир Антонович",
    "birthDate": "1901",
    "village": "Чистое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 935,
    "fullName": "Березецкая Мария Викентьевна",
    "birthDate": "1911",
    "village": "Чистое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 936,
    "fullName": "Березецкая Тереза Казимировна",
    "birthDate": "1932",
    "village": "Чистое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 937,
    "fullName": "Березецкая Эльвира Казимировна",
    "birthDate": "1934",
    "village": "Чистое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 938,
    "fullName": "Березецкая Валерия Казимировна",
    "birthDate": "1937",
    "village": "Чистое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 939,
    "fullName": "Федорович Ядвига Станиславовна",
    "birthDate": "1912",
    "village": "Чистое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 940,
    "fullName": "Федорович Ядвига Антоновна",
    "birthDate": "1933",
    "village": "Чистое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 941,
    "fullName": "Федорович Тадеуш Антонович",
    "birthDate": "1934",
    "village": "Чистое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 942,
    "fullName": "Федорович Клара Антоновна",
    "birthDate": "1936",
    "village": "Чистое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 943,
    "fullName": "Федорович Ирина Антоновна",
    "birthDate": "1938",
    "village": "Чистое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 944,
    "fullName": "Гаванип Аркадий Павлович",
    "birthDate": "1927",
    "village": "Чистое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 945,
    "fullName": "Гаванип Елена Михайловна",
    "birthDate": "1896",
    "village": "Чистое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 946,
    "fullName": "Гаванип Антон Павлович",
    "birthDate": "1928",
    "village": "Чистое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 947,
    "fullName": "Гаванип Валентина Павловна",
    "birthDate": "1931",
    "village": "Чистое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 948,
    "fullName": "Гаванип Софья Павловна",
    "birthDate": "1934",
    "village": "Чистое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 949,
    "fullName": "Гаванип Евгений Павлович",
    "birthDate": "1935",
    "village": "Чистое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 950,
    "fullName": "Дашкевич Мария",
    "birthDate": "1884",
    "village": "Чистое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 951,
    "fullName": "Юзефовский Петр Павлович",
    "birthDate": "1940",
    "village": "Чистое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 952,
    "fullName": "Юзефовский Виктор Павлович",
    "birthDate": "1935",
    "village": "Чистое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 953,
    "fullName": "Юзефовская Мария Павловна",
    "birthDate": "1932",
    "village": "Чистое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 954,
    "fullName": "Кунцевич Янина Владиславовна",
    "birthDate": "1928",
    "village": "Чистое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 955,
    "fullName": "Кунцевич Тадеуш Владиславович",
    "birthDate": "1932",
    "village": "Чистое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 956,
    "fullName": "Лонько Елена Фоминишна",
    "birthDate": "1885",
    "village": "Чистое",
    "nat": "Белорусы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 957,
    "fullName": "Лонько Татьяна Михайлвна",
    "birthDate": "1927",
    "village": "Чистое",
    "nat": "Белорусы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 958,
    "fullName": "Лонько Данута Григорьевна",
    "birthDate": "1940",
    "village": "Чистое",
    "nat": "Белорусы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 959,
    "fullName": "Лонько Екатерина Павловна",
    "birthDate": "1860",
    "village": "Чистое",
    "nat": "Белорусы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 960,
    "fullName": "Машеньская Татьяна Васильевна",
    "birthDate": "1922",
    "village": "Чистое",
    "nat": "Белорусы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 961,
    "fullName": "Машеньской Иван Васильевич",
    "birthDate": "1929",
    "village": "Чистое",
    "nat": "Белорусы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 962,
    "fullName": "Машеньская Ольга Васильевна",
    "birthDate": "1931",
    "village": "Чистое",
    "nat": "Белорусы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 963,
    "fullName": "Незабытовский Константин Константинович",
    "birthDate": "1927",
    "village": "Чистое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 964,
    "fullName": "Незабытовская Елена Константиновна",
    "birthDate": "1935",
    "village": "Чистое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 965,
    "fullName": "Навайчик Софья Казимировна",
    "birthDate": "1929",
    "village": "Чистое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 966,
    "fullName": "Навайчик Ирина Казимировна",
    "birthDate": "1932",
    "village": "Чистое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 967,
    "fullName": "Навайчик Анна Казимировна",
    "birthDate": "1934",
    "village": "Чистое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 968,
    "fullName": "Ягодзинская Леокадия Карловна",
    "birthDate": "1910",
    "village": "Чистое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 969,
    "fullName": "Ягодзинская Кристина Феликсовна",
    "birthDate": "1934",
    "village": "Чистое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 970,
    "fullName": "Ягодзинский Евгений Феликсович",
    "birthDate": "1935",
    "village": "Чистое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 971,
    "fullName": "Ягодзинский Ришард Феликсович",
    "birthDate": "1937",
    "village": "Чистое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 972,
    "fullName": "Ягодзинский Евгений Феликсович",
    "birthDate": "1943",
    "village": "Чистое",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 973,
    "fullName": "Ярмакович Кристина Герасимовна",
    "birthDate": "1871",
    "village": "Чистое",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 974,
    "fullName": "Бедко Альберт Александрович",
    "birthDate": "1929",
    "village": "Коваль",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 975,
    "fullName": "Бедко Иосиф Александрович",
    "birthDate": "1931",
    "village": "Коваль",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 976,
    "fullName": "Гаек Фадей Антонович",
    "birthDate": "1927",
    "village": "Коваль",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 977,
    "fullName": "Гаек Ирина Антоновна",
    "birthDate": "1928",
    "village": "Коваль",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 978,
    "fullName": "Гаек Збигнев Антонович",
    "birthDate": "1932",
    "village": "Коваль",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 979,
    "fullName": "Грузеловский Вячеслав Адамович",
    "birthDate": "1884",
    "village": "Коваль",
    "nat": "Белорусы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 980,
    "fullName": "Грузелович Клавдия Александровна",
    "birthDate": "1889",
    "village": "Коваль",
    "nat": "Белорусы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 981,
    "fullName": "Магрин Анна Иосифовна",
    "birthDate": "1902",
    "village": "Коваль",
    "nat": "Белорусы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 982,
    "fullName": "Маркуш Лонгина Фаддеевна",
    "birthDate": "1928",
    "village": "Коваль",
    "nat": "Белорусы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 983,
    "fullName": "Шустер Вероника Францевна",
    "birthDate": "1891",
    "village": "Коваль",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 984,
    "fullName": "Шустер Регина Францевна",
    "birthDate": "1927",
    "village": "Коваль",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 985,
    "fullName": "Шустер Ванда Францевна",
    "birthDate": "1931",
    "village": "Коваль",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 986,
    "fullName": "Шустер Владислав Францевич",
    "birthDate": "1933",
    "village": "Коваль",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 987,
    "fullName": "Скалецкая Галина Владимировна",
    "birthDate": "1930",
    "village": "Коваль",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 988,
    "fullName": "Верниковская Фекла Михайловна",
    "birthDate": "1904",
    "village": "Коваль",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 989,
    "fullName": "Верниковский Ромуальд Лаврентьевич",
    "birthDate": "1924",
    "village": "Коваль",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 990,
    "fullName": "Верниковская Витовд Лаврентьевич",
    "birthDate": "1930",
    "village": "Коваль",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 991,
    "fullName": "Воронович Елена Игнатьевна",
    "birthDate": "1882",
    "village": "Коваль",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 992,
    "fullName": "Волонович Иосиф Игнатьевич",
    "birthDate": "1904",
    "village": "Коваль",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 993,
    "fullName": "Эрдман Елена Каликстовна",
    "birthDate": "1874",
    "village": "Ст.Михайловка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 994,
    "fullName": "Скуратович Августин Иванович",
    "birthDate": "1881",
    "village": "Ст.Михайловка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 995,
    "fullName": "Скуратович Мария Степоновна",
    "birthDate": "1889",
    "village": "Ст.Михайловка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 996,
    "fullName": "Калимская Альбертина Алуизовна",
    "birthDate": "1874",
    "village": "Ст.Михайловка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 997,
    "fullName": "Зеленко Ромуальда Сигиз",
    "birthDate": "1893",
    "village": "Ст.Михайловка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 998,
    "fullName": "Зеленко Ромуальд Брониславович",
    "birthDate": "1934",
    "village": "Ст.Михайловка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 999,
    "fullName": "Метелица Антонина Антоновна",
    "birthDate": "1894",
    "village": "Ст.Михайловка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 1000,
    "fullName": "Маласовцева Казимира Иосифовна",
    "birthDate": "1872",
    "village": "Ст.Михайловка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 1001,
    "fullName": "Чернявский Матвей Устинович",
    "birthDate": "1871",
    "village": "Ст.Михайловка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 1002,
    "fullName": "Чернявская Елена Ивановна",
    "birthDate": "1885",
    "village": "Ст.Михайловка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 1003,
    "fullName": "Богданович Викентий Фомич",
    "birthDate": "1881",
    "village": "Ст.Михайловка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 1004,
    "fullName": "Богданович Розалия Игнатьевна",
    "birthDate": "1884",
    "village": "Ст.Михайловка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 1005,
    "fullName": "Кальвай Мария Андреевна",
    "birthDate": "1862",
    "village": "Ст.Михайловка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 1006,
    "fullName": "Скалецкая Екатерина Игнатьевна",
    "birthDate": "1890",
    "village": "Ст.Михайловка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 1007,
    "fullName": "Скалецкая Ярослава Васильевна",
    "birthDate": "1925",
    "village": "Ст.Михайловка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 1008,
    "fullName": "Лешкович Софья Петровна",
    "birthDate": "1890",
    "village": "Ст.Михайловка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 1009,
    "fullName": "Лешкович Анна Ивановна",
    "birthDate": "1915",
    "village": "Ст.Михайловка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 1010,
    "fullName": "Лешкович Антонина Ивановна",
    "birthDate": "1920",
    "village": "Ст.Михайловка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 1011,
    "fullName": "Лешкович Розалия Ивановна",
    "birthDate": "1924",
    "village": "Ст.Михайловка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 1012,
    "fullName": "Лешкович Елена Ивановна",
    "birthDate": "1926",
    "village": "Ст.Михайловка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 1013,
    "fullName": "Лешкович Ирина Ивановна",
    "birthDate": "1930",
    "village": "Ст.Михайловка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 1014,
    "fullName": "Лешкович Янина Ивановна",
    "birthDate": "1933",
    "village": "Ст.Михайловка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 1015,
    "fullName": "Лешкович Эдуард Иванович",
    "birthDate": "1928",
    "village": "Ст.Михайловка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 1016,
    "fullName": "Маркевич Софья Романовна",
    "birthDate": "1920",
    "village": "Ст.Михайловка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 1017,
    "fullName": "Маркевич Елизавета Романовна",
    "birthDate": "1922",
    "village": "Ст.Михайловка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 1018,
    "fullName": "Маркевич Елена Романовна",
    "birthDate": "1928",
    "village": "Ст.Михайловка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 1019,
    "fullName": "Маркевич Виктор Романович",
    "birthDate": "1931",
    "village": "Ст.Михайловка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 1020,
    "fullName": "Маркевич Николай Романович",
    "birthDate": "1935",
    "village": "Ст.Михайловка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 1021,
    "fullName": "Турок Татьяна Николавна",
    "birthDate": "1890",
    "village": "Ст.Михайловка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 1022,
    "fullName": "Турок Евгения Даниловна",
    "birthDate": "1925",
    "village": "Ст.Михайловка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 1023,
    "fullName": "Турок Даниил Николаевич",
    "birthDate": "1889",
    "village": "Ст.Михайловка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 1024,
    "fullName": "Русецкий Петр Яковлевич",
    "birthDate": "1882",
    "village": "Ст.Михайловка",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 1025,
    "fullName": "Русецкая Мария Андреевна",
    "birthDate": "1880",
    "village": "Ст.Михайловка",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 1026,
    "fullName": "Шкель Мария Ильична",
    "birthDate": "1895",
    "village": "Ст.Михайловка",
    "nat": "Белорусы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 1027,
    "fullName": "Шкель Тадеуш Федорович",
    "birthDate": "1930",
    "village": "Ст.Михайловка",
    "nat": "Белорусы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 1028,
    "fullName": "Шкель Елена Федоровна",
    "birthDate": "1936",
    "village": "Ст.Михайловка",
    "nat": "Белорусы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 1029,
    "fullName": "Шкель Зинаида Федоровна",
    "birthDate": "1937",
    "village": "Ст.Михайловка",
    "nat": "Белорусы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 1030,
    "fullName": "Макогон Прасковья Петровна",
    "birthDate": "1898",
    "village": "Ст.Михайловка",
    "nat": "Украинцы",
    "gender": "female",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 1031,
    "fullName": "Макогон Зинобий Никитич",
    "birthDate": "1924",
    "village": "Ст.Михайловка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 1032,
    "fullName": "Макогон Мирослав Никитич",
    "birthDate": "1929",
    "village": "Ст.Михайловка",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "15 июля 1943",
    "archiveCode": "1383, 1, 8"
  },
  {
    "id": 1033,
    "fullName": "Белоус Анна",
    "birthDate": "1929",
    "village": "Детский приют в Мамлютке",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "",
    "archiveCode": ""
  },
  {
    "id": 1034,
    "fullName": "Бялик Ришард",
    "birthDate": "1939",
    "village": "Детский приют в Мамлютке",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "",
    "archiveCode": ""
  },
  {
    "id": 1035,
    "fullName": "Нечепка Мечислав",
    "birthDate": "1930",
    "village": "Детский приют в Мамлютке",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "",
    "archiveCode": ""
  },
  {
    "id": 1036,
    "fullName": "Нечепка Генофефа",
    "birthDate": "1940",
    "village": "Детский приют в Мамлютке",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "",
    "archiveCode": ""
  },
  {
    "id": 1037,
    "fullName": "Ступницкий Сергей",
    "birthDate": "1933",
    "village": "Детский приют в Мамлютке",
    "nat": "Украинцы",
    "gender": "male",
    "listDate": "",
    "archiveCode": ""
  },
  {
    "id": 1038,
    "fullName": "Ольшевский Вальдемар",
    "birthDate": "1936",
    "village": "Детский приют в Мамлютке",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "",
    "archiveCode": ""
  },
  {
    "id": 1039,
    "fullName": "Ольшевская Тереза",
    "birthDate": "1933",
    "village": "Детский приют в Мамлютке",
    "nat": "Поляки",
    "gender": "female",
    "listDate": "",
    "archiveCode": ""
  },
  {
    "id": 1040,
    "fullName": "Мечий Петр",
    "birthDate": "1936",
    "village": "Детский приют в Мамлютке",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "",
    "archiveCode": ""
  },
  {
    "id": 1041,
    "fullName": "Мечий Павел",
    "birthDate": "1936",
    "village": "Детский приют в Мамлютке",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "",
    "archiveCode": ""
  },
  {
    "id": 1042,
    "fullName": "Квецинский Песлав",
    "birthDate": "1929",
    "village": "Детский приют в Мамлютке",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "",
    "archiveCode": ""
  },
  {
    "id": 1043,
    "fullName": "Квецинский Георгий",
    "birthDate": "1937",
    "village": "Детский приют в Мамлютке",
    "nat": "Поляки",
    "gender": "male",
    "listDate": "",
    "archiveCode": ""
  },
  {
    "id": 1044,
    "fullName": "Саско Ярослав",
    "birthDate": "1939",
    "village": "Детский приют в Мамлютке",
    "nat": "Белорусы",
    "gender": "male",
    "listDate": "",
    "archiveCode": ""
  }
];
