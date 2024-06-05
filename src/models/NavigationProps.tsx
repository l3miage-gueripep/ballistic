import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  HomePage: undefined;
  LeagueDetail: {leagueId: number};
};

// HomePage
export type HomePageRouteProp = StackNavigationProp<RootStackParamList, 'HomePage'>;
export type HomePageNavigationProp = StackNavigationProp<RootStackParamList, 'HomePage'>;
export type HomePageProps = {
  navigation: HomePageNavigationProp;
};

// League detail
export type LeagueDetailsPageRouteProp = RouteProp<RootStackParamList, 'LeagueDetail'>;
export type LeagueDetailsPageNavigationProp = StackNavigationProp<RootStackParamList, 'LeagueDetail'>;
export type LeagueDetailsPageProps = {
  route: LeagueDetailsPageRouteProp;
  navigation: LeagueDetailsPageNavigationProp;
};