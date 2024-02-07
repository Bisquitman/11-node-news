const {
  getTopNews,
  getNewsByKeyword,
  getNewsByLanguage,
  getNewsByCategory,
} = require('./service/api.service.js');

const init = () => {
  // Парсинг аргументов командной строки
  const args = process.argv.slice(2);

  const options = {
    limit: 10,
    language: '',
    category: '',
  };

  while (args.length > 0) {
    const option = args.shift();
    const value = args.shift();

    switch (option) {
      case '-q':
        options.keyword = value;
        break;
      case '-l':
        options.language = value;
        break;
      case '-c':
        options.category = value;
        break;
      case '-s':
        options.limit = parseInt(value);
        break;
      case '-h':
        console.log(`
      -h                  |   список команд
      -q <ключевое слово> |   вывод статей с ключевым словом
      -l <код языка>      |   вывод статей на указанном языке
      -c <категория>      |   вывод статей из указанной категории
      -s <число>          |   вывод указанного количества статей на каждой странице
    `);
        process.exit(0);
      default:
        console.log(`
        Неизвестный аргумент: ${option}
        Для получения списка доступных команд
        используйте ключ -h
      `);
        process.exit(1);
    }
  }

  // Выполнение запросов в соответствии с выбранными опциями
  if (options.keyword) {
    getNewsByKeyword(options.keyword, options.limit, options.language);
  } else if (options.language) {
    if (options.category) {
      getNewsByCategory(options.category, options.limit, options.language);
    } else {
      getNewsByLanguage(options.language, options.limit);
    }
  } else {
    getTopNews(options.limit, 'ru');
  }
};
init();
