import React from 'react';
import PokemonListScreen from '../../../../src/navigation/screens/PokemonListScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// Mock the API hook
jest.mock('../../../../src/redux/apiServices/pokemonApi', () => ({
  useGetPokemonListQuery: jest
    .fn()
    .mockResolvedValue({ data: { results: [] } }),
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
