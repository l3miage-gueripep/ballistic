export class Player {
    constructor(public id: number, public firstname: string, public lastname: string, public display_name: string, public face_image: string, public position: Position, public country_flag: string, public date_of_birth: string) { 
        this.face_image = face_image ? face_image : Player.defaultPlayerImage;
    }
    
    public static fromApiData(apiData: any): Player | undefined{
        return apiData ? new Player(apiData.id, apiData.firstname, apiData.lastname, apiData.display_name, apiData.image_path, apiData.position?.name ?? apiData.position, apiData.nationality?.image_path ?? apiData.country_flag, apiData.date_of_birth) : undefined;
    }

    public static defaultPlayerImage: string = "https://cdn.sportmonks.com/images/soccer/placeholder.png";
    
    
    public getAge(): number {
        const today = new Date();
        const birthDate = new Date(this.date_of_birth);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
};



export enum Position {
    Goalkeeper = "Goalkeeper",
    Defender = "Defender",
    Midfielder = "Midfielder",
    Forward = "Attacker"
};