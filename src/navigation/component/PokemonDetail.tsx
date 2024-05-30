import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useGetPokemonByIdQuery } from '../../redux/apiServices/pokemonApi';
import { DetailsRouteProps } from '../../dataTypes/screenNavigationPropsTypes';
import Loading from './Loading';
import ErrorView from './ErrorView';

const PokemonDetail = ({ route }: DetailsRouteProps) => {
  const { id } = route.params;

  // Call API query to fetch pokemon
  const {
    data = null,
    error = null,
    isLoading = false,
  } = useGetPokemonByIdQuery(id);

  // concat types of pokemon in a single string to show in UI
  let types: string | undefined = data?.types
    .map((item) => `${item?.type?.name}`)
    .join('\n');

  if (isLoading) return <Loading />;
  if (error) return <ErrorView />;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: data?.sprites?.front_default }}
        style={{ resizeMode: 'contain', height: 250 }}
      />
      <View style={styles.rowView}>
        <Text style={styles.headerText}>Name</Text>
        <Text style={styles.detailText}>{data?.name}</Text>
      </View>
      <View style={styles.rowView}>
        <Text style={styles.headerText}>Height</Text>
        <Text style={styles.detailText}>{data?.height}</Text>
      </View>
      <View style={styles.rowView}>
        <Text style={styles.headerText}>Weight</Text>
        <Text style={styles.detailText}>{data?.weight}</Text>
      </View>
      <View style={styles.rowView}>
        <Text style={styles.headerText}>Types</Text>
        <Text style={styles.detailText}>{types}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  rowView: {
    borderTopWidth: 1,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  },
});
export default PokemonDetail;
