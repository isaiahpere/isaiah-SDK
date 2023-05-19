const axios = require("axios");

/**
 *  To dynamically make request to API
 *
 *  @param {String} apiKey access token to lord of the rings api
 *  @param {String} url url to api end point
 *  @returns response from api
 */
const fetchData = async (apiKey, url) => {
  // fetch data
  const res = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${apiKey}`, // let me in
    },
  });

  return res;
};

module.exports = { fetchData };
