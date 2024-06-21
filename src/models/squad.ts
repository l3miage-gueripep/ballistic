import { Player, Position } from "./player";

export class Squad {
    constructor(public forwards: Player[], public midfielders: Player[], public defenders: Player[], public goalkeepers: Player[]) {}

    public addPlayer(player: Player) {
        switch (player.position) {
            case Position.Forward:
                this.forwards.push(player);
                break;
            case Position.Midfielder:
                this.midfielders.push(player);
                break;
            case Position.Defender:
                this.defenders.push(player);
                break;
            case Position.Goalkeeper:
                this.goalkeepers.push(player);
                break;
            default:
                break;
        }
    }
};
  