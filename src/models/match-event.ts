import { Player } from "./player";

export class MatchEvent {
    constructor(public id : number, public type: MatchEventTypeEnum, public team_id: number, public player: Player | undefined = undefined, public minute: number, public extra_minute: number, public related_player?: Player, public addition?: string) {}
    static fromApiData(apiData: any): MatchEvent {
        return new MatchEvent(apiData.id, apiData.type.name, apiData.participant_id, Player.fromApiData(apiData.player)!, apiData.minute, apiData.extra_minute, Player.fromApiData(apiData.relatedplayer), apiData.addition);
    }

}

export enum MatchEventTypeEnum{
    Goal = "Goal",
    YellowCard = "Yellowcard",
    RedCard = "Redcard",
    Substitution = "Substitution",
    Penalty = "Penalty",
    OwnGoal = "Own Goal",
    
}