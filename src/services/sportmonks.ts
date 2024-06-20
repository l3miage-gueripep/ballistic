import Config from 'react-native-config';

class SportmonksService {
  
  private API_URL = 'https://api.sportmonks.com/v3/football/';
  private API_KEY = Config.SPORTMONKS_API_KEY;

  //singleton
  private static instance: SportmonksService;
  private constructor() {}
  public static getInstance(): SportmonksService {
    if (!SportmonksService.instance) {
      SportmonksService.instance = new SportmonksService();
    }
    return SportmonksService.instance;
  }

  public async fetchData(endpoint: string) {
    const response = await fetch(`${this.API_URL}${endpoint}`, {
      headers: {
        'Authorization': `${this.API_KEY}`
      }
    });
    const data = await response.json();
    return data;
  }
}

export default SportmonksService;