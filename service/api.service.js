require('dotenv').config();
const NewsAPI = require('newsapi');

const newsapi = new NewsAPI(process.env.API_KEY);

const getTopNews = async (limit = 10, language = '') => {
  try {
    const response = await newsapi.v2.topHeadlines({
      pageSize: limit,
      language: language,
    });
    const news = response.articles;
    news.forEach(article => {
      console.log();
      console.log(article.title);
      console.log(article.description);
      console.log('---');
    });
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
    news.forEach(article => {
      console.log();
      console.log(article.title);
      console.log(article.description);
      console.log('---');
    });
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
    news.forEach(article => {
      console.log();
      console.log(article.title);
      console.log(article.description);
      console.log('---');
    });
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
    news.forEach(article => {
      console.log();
      console.log(article.title);
      console.log(article.description);
      console.log('---');
    });
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
