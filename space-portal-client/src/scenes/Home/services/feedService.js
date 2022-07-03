import { apiClient } from "../../../services/apiService";

function getAsteroidFeedUrl(startDate, endDate) {
  return !startDate || !endDate
    ? `neo/feed`
    : `neo/feed?start_date=${startDate.getTime()}&end_date=${endDate.getTime()}`;
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
