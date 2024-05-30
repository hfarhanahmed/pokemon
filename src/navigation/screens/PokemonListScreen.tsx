import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useGetPokemonListQuery } from '../../redux/apiServices/pokemonApi';
import Loading from '../component/Loading';
import ErrorView from '../component/ErrorView';

const PokemonListScreen = ({ navigation }: any) => {
  const { data, error, isLoading } = useGetPokemonListQuery();

  if (isLoading) return <Loading />;
  if (error) return <ErrorView />;

  return (
    <SafeAreaView>
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
    </SafeAreaView>
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

export default PokemonListScreen;
