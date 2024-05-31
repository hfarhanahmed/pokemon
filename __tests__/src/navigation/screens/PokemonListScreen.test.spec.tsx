import React from 'react';
import PokemonListScreen from '../../../../src/navigation/screens/PokemonListScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// Mock the API hook
jest.mock('../../../../src/redux/apiServices/pokemonApi', () => ({
  useGetPokemonListQuery: jest.fn().mockResolvedValue({
    data: {
      count: 1302,
      next: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20',
      previous: null,
      results: [
        { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
        { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
        { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/' },
        { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
        { name: 'charmeleon', url: 'https://pokeapi.co/api/v2/pokemon/5/' },
      ],
    },
  }),
}));

// Mock Loading comonent
jest.mock('../../../../src/navigation/component/Loading', () => {
  return jest.fn().mockImplementation(({ children }) => children);
});

// Mock Error comonent
jest.mock('../../../../src/navigation/component/ErrorView', () => {
  return jest.fn().mockImplementation(({ children }) => children);
});

const mockNavigation = jest.fn();
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigate: () => ({
      navigate: mockNavigation,
    }),
  };
});

jest.mock('react-native', () => {
  return {
    SafeAreaView: jest.fn().mockImplementation(({ children }) => children),
    StyleSheet: { create: jest.fn() },
    FlatList: jest.fn(),
    Text: jest.fn(),
    TouchableOpacity: jest.fn(),
  };
});

// Todo: will continue to work on this later
describe('<PokemonListScreen />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<PokemonListScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
