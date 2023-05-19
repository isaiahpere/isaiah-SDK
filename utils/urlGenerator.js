// Dynamic URL Generator for all "movie" endpoints
const generateMovieUrl = (baseUrl, movieId, quote) => {
  return `${baseUrl}/movie${movieId ? `/${movieId}` : ""}${
    quote ? "/quote" : ""
  }`;
};

// Dynamic URL Generator for all "quote" endpoints
const generateQuoteUrl = (baseUrl, quoteId) => {
  return `${baseUrl}/quote${quoteId ? `/${quoteId}` : ""}`;
};

// we would continue to make dynamic generators here.
// The idea would be to group as many endpoints as possible
// while keeping the SDK easy for developer to read and apply

module.exports = { generateMovieUrl, generateQuoteUrl };
