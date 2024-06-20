import Config from 'react-native-config';

const API_URL = 'https://api.sportmonks.com/v3/football/';
const API_KEY = Config.SPORTMONKS_API_KEY;

export const fetchData = async (endpoint: string) => {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      'Authorization': `${API_KEY}`
    }
  });
  const data = await response.json();
  return data;
};