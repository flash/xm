

var rv = this.rv||{};


rv.number_rus = function(n) { // rus
	if (n%100 > 4 && n%100 < 20) return 2;
	switch (n%10) {
		case 1: return 0;
		case 2: case 3: case 4: return 1;
		};
	return 2;
	};


rv.number = function(n, a, b, c) {	var u;	if (a === u) a = 0, b = 1, c = 2;

	if (n%100>4 && n%100<20) return c	switch (n%10) {		case 1: return a;
		case 2: case 3: case 4: return b;
		};

	return c;
	};




rv.aweek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
rv.aweek_small = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
rv.month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
rv.month_of = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
rv.month_small = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"];
rv.clock = ["час", "часа", "часов"];

rv.zones = [
	{v: 'Pacific/Samoa', text: "(GMT-11:00) о.Мидуэй, Самоа"},
	{v: 'Pacific/Honolulu', text: "(GMT-10:00) Гавайи, Гонолулу, Таити"},
	{v: 'America/Anchorage', text: "(GMT-08:00) Аляска"},
	{v: 'America/Los_Angeles', text: "(GMT-07:00) Лос-Анжелес, Тихуана, Ванкувер, Уайтхорс"},
	{v: 'US/Pacific', text: "(GMT-07:00) Тихоокеанское время (США и Канада)"},
	{v: 'America/Denver', text: "(GMT-06:00) Денвер, Чихуахуа, Эдмонтон, Феникс"},
	{v: 'America/Belize', text: "(GMT-06:00) Белиз, Саскачеван"},
	{v: 'America/Guatemala', text: "(GMT-06:00) Гватемала"},
	{v: 'America/Cancun', text: "(GMT-05:00) Канкун, Чикаго, Коста Рико"},
	{v: 'America/Mexico_City', text: "(GMT-05:00) Гвадалахара, Мехико, Монтеррей (старый)"},
	{v: 'America/Monterrey', text: "(GMT-05:00) Гвадалахара, Мехико, Монтеррей (новый)"},
	{v: 'America/Bogota', text: "(GMT-05:00) Богота, Кайман, Гавана, Ямайка"},
	{v: 'America/Caracas', text: "(GMT-04:30) Каракас"},
	{v: 'America/Montreal', text: "(GMT-04:00) Монреал, Нассау, Нью Йорк, Панама"},
	{v: 'America/Anguilla', text: "(GMT-04:00) Ангилья, Антигуа, Аруба"},
	{v: 'America/Barbados', text: "(GMT-04:00) Барбадос, Доминика, Сантьяго, Гренада, Гваделупа"},
	{v: 'America/Puerto_Rico', text: "(GMT-04:00) Пуэрто Рико, Рио Бранко, Сан Доминго, Бермуды"},
	{v: 'America/Halifax', text: "(GMT-03:00) Галифакс, Манаос, Монсерат"},
	{v: 'Canada/Atlantic', text: "(GMT-03:00) Атлантическое время (Канада)"},
	{v: 'America/Argentina/Buenos_Aires', text: "(GMT-03:00) Буэнос-Айрес, Катамарка, Кордоба"},
	{v: 'America/Argentina/Mendoza', text: "(GMT-03:00) Мендоза, Рио Галлегос, Сан Ян"},
	{v: 'America/Montevideo', text: "(GMT-03:00) Монтевидео"},
	{v: 'Canada/Newfoundland', text: "(GMT-02:30) Ньюфаундленд"},
	{v: 'America/Noronha', text: "(GMT-02:00) Фернандо-Де-Норонха, Сан Пауло"},
	{v: 'Atlantic/Azores', text: "(GMT 00:00) Азорские о-ва"},
	{v: 'Africa/Abidjan', text: "(GMT 00:00) Абиджан, Аккра, Бамако, Биссау"},
	{v: 'Africa/Accra', text: "(GMT 00:00) Акра, Бамако, Биссау, Касабланка, Дакар"},
	{v: 'Atlantic/Reykjavik', text: "(GMT 00:00) Рейкьявик, Дублин, Монровия, Касабланка"},
	{v: 'Europe/London', text: "(GMT 00:00) Лондон"},
	{v: 'Africa/Algiers', text: "(GMT+01:00) Алжир, Бангуи, Киншаса, Лагос"},
	{v: 'Africa/Luanda', text: "(GMT+01:00) Луанда, Малаба, Ниамей, Тунис"},
	{v: 'Europe/Amsterdam', text: "(GMT+02:00) Амстердам, Андора, Белград, Берлин, Братислава"},
	{v: 'Europe/Brussels', text: "(GMT+02:00) Брюссель, Будапешт, Копенгаген"},
	{v: 'Europe/Gibraltar', text: "(GMT+02:00) Гибралтар, Люксембург, Мадрид, Мальта, Монако, Осло"},
	{v: 'Europe/Paris', text: "(GMT+02:00) Париж, Прага, Рим, Санмарино, Сараево, Стокгольм"},
	{v: 'Europe/Vatican', text: "(GMT+02:00) Ватикан, Вена, Варшава, Цюрих"},
	{v: 'Africa/Cairo', text: "(GMT+03:00) Каир, Йоханнесбург, Кугали, Аман"},
	{v: 'Asia/Beirut', text: "(GMT+03:00) Бейрут, Дамаск, Газа, Стамбул, Иерусалим, Афины"},
	{v: 'Europe/Bucharest', text: "(GMT+03:00) Бухарест, Хельсинки, Калининград"},
	{v: 'Europe/Kiev', text: "(GMT+03:00) Киев, Минск, Рига, София"},
	{v: 'Europe/Tallinn', text: "(GMT+03:00) Таллин, Вильнюс"},
	{v: 'Africa/Addis_Ababa', text: "(GMT+03:00) Аддис-Абаб, Асмера"},
	{v: 'Africa/Mogadishu', text: "(GMT+03:00) Могадишо, Найроби, Аден, Багдад, Бахрейн"},
	{v: 'Asia/Kuwait', text: "(GMT+03:00) Кувейт, Катар"},
	{v: 'Europe/Moscow', text: "(GMT+04:00) Москва"},
	{v: 'Asia/Tbilisi', text: "(GMT+04:00) Тбилиси, Ереван, Самара"},
	{v: 'Asia/Tehran', text: "(GMT+04:30) Тегеран, Баку, Дубаи"},
	{v: 'Asia/Kabul', text: "(GMT+04:30) Кабул, Ашхабад, Душанбе, Карачи, Орал"},
	{v: 'Indian/Maldives', text: "(GMT+05:00) Мальдивы, Калькута"},
	{v: 'Asia/Colombo', text: "(GMT+05:30) Коломбо"},
	{v: 'Asia/Katmandu', text: "(GMT+05:45) Катманду"},
	{v: 'Asia/Yekaterinburg', text: "(GMT+06:00) Екатеринбург"},
	{v: 'Asia/Almaty', text: "(GMT+06:00) Алма-Ата, Бишкек"},
	{v: 'Asia/Rangoon', text: "(GMT+06:30) Рангун, Кокос"},
	{v: 'Asia/Novosibirsk', text: "(GMT+07:00) Новосибирск, Омск"},
	{v: 'Asia/Bangkok', text: "(GMT+07:00) Бангкок, Джакарта"},
	{v: 'Asia/Krasnoyarsk', text: "(GMT+08:00) Красноярск"},
	{v: 'Asia/Brunei', text: "(GMT+08:00) Брунеи, Гонконг"},
	{v: 'Asia/Kuala_Lumpur', text: "(GMT+08:00) Куала-Лумпур, Макао, Манило"},
	{v: 'Asia/Shanghai', text: "(GMT+08:00) Шанхай, Сингапур, Тайпей"},
	{v: 'Asia/Ulaanbaatar', text: "(GMT+08:00) Улан-Батор"},
	{v: 'Asia/Irkutsk', text: "(GMT+09:00) Иркутск"},
	{v: 'Asia/Seoul', text: "(GMT+09:00) Сеул, Токио"},
	{v: 'Australia/Adelaide', text: "(GMT+09:30) Аделаида"},
	{v: 'Asia/Yakutsk', text: "(GMT+10:00) Якутск"},
	{v: 'Australia/Brisbane', text: "(GMT+10:00) Брисбен, Гуам, Порт-Морсби, Сайпан"},
	{v: 'Australia/Canberra', text: "(GMT+10:00) Канберра, Хобарт, Мельбурн, Сидней"},
	{v: 'Asia/Vladivostok', text: "(GMT+11:00) Владивосток"},
	{v: 'Pacific/Kosrae', text: "(GMT+11:00) Косрае, Понапе"},
	{v: 'Pacific/Norfolk', text: "(GMT+11:30) Норфолк"},
	{v: 'Pacific/Funafuti', text: "(GMT+12:00)Фунафути, Науру"},
	{v: 'Pacific/Auckland', text: "(GMT+12:00) Окленд,Фиджи"},
	{v: 'Asia/Magadan', text: "(GMT+12:00) Магадан"},
	{v: 'Asia/Anadyr', text: "(GMT+13:00) Анадырь, Камчатка"}
	];

rv['zone: Europe/Moscow'] = {	w: -180,
	s: -240,
	d: []
	};
