import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useGetPokemonListQuery } from '../../redux/apiServices/pokemonApi';
import { DetailsNavigationProps } from '../../dataTypes/screenNavigationPropsTypes';
import { useNavigation } from '@react-navigation/native';
import Loading from './Loading';
import ErrorView from './ErrorView';

const PokemonList = () => {
  const navigation = useNavigation<DetailsNavigationProps>();

  const { data, error, isLoading } = useGetPokemonListQuery();

  if (isLoading) return <Loading />;
  if (error) return <ErrorView />;

  return (
    <FlatList
      keyExtractor={(item) => item.name}
      data={data?.results}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            const urlArray = item.url.split(
              'https://pokeapi.co/api/v2/pokemon/'
            );

            navigation.navigate('PokemonDetail', {
              id: urlArray[1],
              name: item.name,
            });
          }}
          style={styles.rowView}
        >
          <Text style={styles.detailText}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
};
const styles = StyleSheet.create({
  rowView: {
    borderTopWidth: 1,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: '#666',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  detailText: {
    fontSize: 22,
    color: '#000',
    flex: 1,
  },
});
export default PokemonList;
