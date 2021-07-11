const axios = require("axios");

function getAsteroidFeedUrl(startDate, endDate) {
  return `http://localhost:7000/neo/feed`;
}

function feedService(startDate, endDate, resolve) {
  const url = getAsteroidFeedUrl(startDate, endDate);

  return axios
    .get(url)
    .then((res) => {
      console.log(`statusCode: ${res.statusCode}`);
      return res.data;
    })
    .catch((error) => {
      console.error(error);
    });
}

export default feedService;
