import {useState, useEffect} from 'react';
import {fetchData} from '../services/Sportmonks';
import {League} from '../models/league';

export const useLeaguesData = () => {
  const [data, setData] = useState<League[] | null>(null);

  useEffect(() => {
    fetchData('leagues')
      .then(result => {
        setData(result.data);
      })
      .catch(error => console.error(error));
  }, []);

  return data;
};