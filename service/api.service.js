require('dotenv').config();
const NewsAPI = require('newsapi');

const newsapi = new NewsAPI(process.env.API_KEY);

const showNews = news => {
  news.forEach((article, index) => {
    console.log();
    console.log(`[${index + 1}] ${article.title}`);
    console.log((article.description || '') + '');
    console.log(article.url + '');
    console.log('---');
  });
};

const getTopNews = async (limit = 10, language = 'ru') => {
  try {
    const response = await newsapi.v2.topHeadlines({
      pageSize: limit,
      language: language,
    });
    const news = response.articles;
    console.log(`\n--- Top ${news.length} News ---\n`);
    showNews(news);
  } catch (error) {
    console.error(error);
  }
};

const getNewsByKeyword = async (keyword, limit = 10, language = '') => {
  try {
    const response = await newsapi.v2.everything({
      q: keyword,
      pageSize: limit,
      language: language,
    });
    const news = response.articles;
    showNews(news);
  } catch (error) {
    console.error(error);
  }
};

const getNewsByLanguage = async (language, limit = 10) => {
  try {
    const response = await newsapi.v2.topHeadlines({
      language: language,
      pageSize: limit,
    });
    const news = response.articles;
    showNews(news);
  } catch (error) {
    console.error(error);
  }
};

const getNewsByCategory = async (category, limit = 10, language = '') => {
  try {
    const response = await newsapi.v2.topHeadlines({
      category: category,
      pageSize: limit,
      language: language,
    });
    const news = response.articles;
    showNews(news);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getTopNews,
  getNewsByKeyword,
  getNewsByLanguage,
  getNewsByCategory,
};
