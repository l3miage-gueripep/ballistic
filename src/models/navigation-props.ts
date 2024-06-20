import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  HomePage: undefined;
  StandingsPage: {leagueId: number};
};

// HomePage
export type HomePageRouteProp = StackNavigationProp<RootStackParamList, 'HomePage'>;
export type HomePageNavigationProp = StackNavigationProp<RootStackParamList, 'HomePage'>;
export type HomePageProps = {
  navigation: HomePageNavigationProp;
};

// League detail
export type StandingsPageRouteProp = RouteProp<RootStackParamList, 'StandingsPage'>;
export type StandingsPageNavigationProp = StackNavigationProp<RootStackParamList, 'StandingsPage'>;
export type StandingsPageNavigationRouteParams = {
  leagueId: number;
};
export type StandingsPageProps = {
  route: StandingsPageRouteProp;
  navigation: StandingsPageNavigationProp;
};

//standings list
export type CurrentLeagueStandingsListComponentProps = {
  leagueId: number;
}