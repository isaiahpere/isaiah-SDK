const { generateMovieUrl, generateQuoteUrl } = require("./utils/urlGenerator");
const { fetchData } = require("./utils/axios");

const BASE_URL = "https://the-one-api.dev/v2"; // API base URL

/*
 * _NOTES_
 *
 * Ideally, for a full-blown SDK, we would have some type of configuration options where
 * we can set items such as the access token, so we don't have to pass it down to every method.
 *
 * Additionally, we would implement features such as sorting and filtering, but for the purpose
 * of this challenge, I left them out.
 */

/**
 * Depending on the arguments passed, this method will fetch either all movies,
 * a single movie, or all quotes from a single movie.
 *
 * @param {String} apiKey [required] access token to lord of the rings api
 * @param {String} movieId [optional] movie id that when provided, function will return only target movie
 * @param {String} quote [optional] quote flag taht when truthy, function will return all target movie quotes
 * @returns object of movies & quotes
 */
const getMovie = async (apiKey, movieId = "", quote = false) => {
  try {
    // generate url dynamically
    const movieUrl = generateMovieUrl(BASE_URL, movieId, quote);

    // make request
    const res = await fetchData(apiKey, movieUrl);

    // check if good response
    if ((res.status !== 200) | !res.data)
      throw new Error(`Bad Request: Failed with status code ${res.status}`);

    // return data
    return res.data;
  } catch (error) {
    // bad request log & return
    console.error(error);
    return error;
  }
};

/**
 * This function fetches quotes depending on the arguments passed.
 * It can fetch quotes from all available movies or a single quote by its ID.
 *
 * @param {String} apiKey access token to lord of the rings api
 * @param {String} quoteId id for a single quote
 * @returns an object of movie quotes or single quote
 */
const getQuote = async (apiKey, quoteId = "") => {
  try {
    // generate url dynamically
    const quoteUrl = generateQuoteUrl(BASE_URL, quoteId);

    // make request
    const res = await fetchData(apiKey, quoteUrl);

    // check if good response
    if ((res.status !== 200) | !res.data)
      throw new Error(`Bad Request: Failed with status code ${res.status}`);

    // return data
    return res.data;
  } catch (error) {
    // bad request log & return
    console.error(error);
    return error;
  }
};

module.exports = { getMovie, getQuote };
