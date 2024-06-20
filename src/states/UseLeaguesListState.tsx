import { useEffect, useState } from 'react';
import { League } from '../models/league';
import SportmonksService from '../services/sportmonks';

export const useLeaguesData = () => {
  const [data, setData] = useState<League[] | null>(null);

  const sportmonksService = SportmonksService.getInstance();
  useEffect(() => {
    sportmonksService.fetchData('leagues')
      .then(result => {
        setData(result.data.filter((league: any) => league.sub_type === "domestic"));
      })
      .catch(error => console.error(error));
  }, []);

  return data;
};