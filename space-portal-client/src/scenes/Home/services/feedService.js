import { apiClient } from "../../../services/apiService";

function getAsteroidFeedUrl(startDate, endDate) {
  return `neo/feed`;
}

async function getFeed(startDate, endDate) {
  const url = getAsteroidFeedUrl(startDate, endDate);
  try {
    var response = await apiClient.get(url);
    console.log(`statusCode: ${response.statusCode}`);

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default getFeed;
