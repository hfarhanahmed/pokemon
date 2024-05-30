import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type StackParamList = {
  PokemonList: undefined;
  PokemonDetail: { id: string; name: string };
};

export type DetailsNavigationProps = StackNavigationProp<any>;
export type DetailsRouteProps = {
  route: RouteProp<StackParamList, 'PokemonDetail'>;
};
