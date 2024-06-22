import { useEffect, useState } from 'react';
import { Player } from '../models/player';
import { Squad } from '../models/squad';
import SportmonksService from '../services/sportmonks';

export const useTeamPlayers = (teamId: number) => {
  const [squad, setSquad] = useState<Squad | null>(new Squad([], [], [], []));
    const sportmonksService = SportmonksService.getInstance();
  useEffect(() => {
    const fetchTeamMatches = async () => {
      const tempSquad = new Squad([], [], [], [])
      try {
        const players = await sportmonksService.fetchData(`teams/${teamId}?include=players.player.position;players.player.nationality`);
        
        const playersData = players.data.players;
        // const player : Player = new Player(players.data.id, players.data.name, players.data.image_path, players.data.players);
        playersData.forEach((player: any) => {
          tempSquad.addPlayer(Player.fromApiData(player.player)!);
        });
        setSquad(tempSquad);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTeamMatches();
  }, []);
 
  return squad;
};
