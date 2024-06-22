import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Match } from "./match";
import { Player } from "./player";
import { Squad } from "./squad";

export type RootStackParamList = {
  HomePage: undefined;
  StandingsPage: {leagueId: number};
  TeamDetailsPage: {teamId: number};
  PlayerDetailsScreen: {player: Player};
};

// HomePage
export type HomePageRouteProp = StackNavigationProp<RootStackParamList, 'HomePage'>;
export type HomePageNavigationProp = StackNavigationProp<RootStackParamList, 'HomePage'>;
export type HomePageProps = {
  navigation: HomePageNavigationProp;
};

// League detail
export type StandingsScreenRouteProp = RouteProp<RootStackParamList, 'StandingsPage'>;
export type StandingsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'StandingsPage'>;
export type StandingsScreenNavigationRouteParams = {
  leagueId: number;
};
export type StandingsScreenProps = {
  route: StandingsScreenRouteProp;
  navigation: StandingsScreenNavigationProp;
};

export type PlayerDetailsScreenRouteProp = RouteProp<RootStackParamList, 'PlayerDetailsScreen'>;
export type PlayerDetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PlayerDetailsScreen'>;
export type PlayerDetailsScreenNavigationRouteParams = {
  player: Player;
};
export type PlayerDetailsScreenProps = {
  route: PlayerDetailsScreenRouteProp;
  navigation: PlayerDetailsScreenNavigationProp;
};

// Team detateamils screen
export type TeamDetailsRouteProp = StackNavigationProp<RootStackParamList, 'TeamDetailsPage'>;
export type TeamDetailsNavigationProp = StackNavigationProp<RootStackParamList, 'TeamDetailsPage'>;
export type TeamDetailsNavigationRouteParams = {
  teamId: number;
};
export type TeamDetailsProps = {
  route: TeamDetailsRouteProp;
  navigation: HomePageNavigationProp;
};

//standings list
export type CurrentLeagueStandingsListComponentProps = {
  leagueId: number;
}

//team details
export type TeamMatchesListComponentProps = {
  matches: Match[];
  teamId: number;
}

//team details
export type TeamPlayersListComponentProps = {
  squad: Squad;
  teamId: number;
}