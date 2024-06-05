import dotenv from 'dotenv';
dotenv.config();

const API_URL = 'https://api.sportmonks.com/v3/football/';
const API_KEY = process.env.SPORTMONKS_API_KEY;

export const fetchData = async (endpoint: string) => {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      'Authorization': `${API_KEY}`
    }
  });
  const data = await response.json();
  return data;
};