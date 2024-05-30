import React from 'react';
import { SafeAreaView } from 'react-native';
import PokemonDetail from '../component/PokemonDetail';
import { DetailsRouteProps } from '../../dataTypes/screenNavigationPropsTypes';

const PokemonDetailScreen = ({ route }: DetailsRouteProps) => {
  return (
    <SafeAreaView>
      <PokemonDetail route={route} />
    </SafeAreaView>
  );
};

export default PokemonDetailScreen;
