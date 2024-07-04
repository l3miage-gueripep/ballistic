import { useEffect, useState } from "react";
import { MatchEvent } from "../models/match-event";
import SportmonksService from "../services/sportmonks";

export const useMatchEventsList = (matchId: number) => {
    const [events, setEvents] = useState<MatchEvent[] | null>([]);
    const sportmonksService = SportmonksService.getInstance();
    useEffect(() => {
        const fetchTeamMatches = async () => {
            const tempEvents : MatchEvent[] = [];
            try {
                const data = await sportmonksService.fetchData(`fixtures/${matchId}?include=events.player;events.type;events.player.position;events.player.nationality;events.relatedPlayer.position;events.relatedPlayer.nationality`);
                data.data.events.forEach((event: any) => {
                    if(event.type.code === "VAR") return;
                    tempEvents.push(MatchEvent.fromApiData(event))
                });
                setEvents(tempEvents.sort((a, b) => b.minute - a.minute || b.extra_minute - a.extra_minute));
            } catch (error) {
                console.error(error);
            }
        };
        fetchTeamMatches();
    }, []);

    return events;
};