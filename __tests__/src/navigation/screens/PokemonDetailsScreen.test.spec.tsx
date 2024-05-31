import React from 'react';
import PokemonDetailScreen from '../../../../src/navigation/screens/PokemonDetailScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { DetailsRouteProps } from '../../../../src/dataTypes/screenNavigationPropsTypes';

jest.mock('react-native', () => {
  return {
    SafeAreaView: jest.fn().mockImplementation(({ children }) => children),
    StyleSheet: { create: jest.fn().mockImplementation((styles) => styles) },
    Platform: { OS: 'android' },
    Image: jest.fn().mockImplementation(({ children }) => children),
    Text: jest.fn().mockImplementation(({ children }) => children),
    View: jest.fn().mockImplementation(({ children }) => children),
  };
});

// Mock the API hook
jest.mock('../../../../src/redux/apiServices/pokemonApi', () => ({
  useGetPokemonByIdQuery: jest.fn().mockResolvedValue({
    types: [
      {
        slot: 1,
        type: { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' },
      },
      {
        slot: 2,
        type: { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' },
      },
    ],
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

const createTestProps = (props: DetailsRouteProps) => ({
  ...props,
});

// Todo: will continue to work on this later
describe('<PokemonDetailScreen />', () => {
  it('renders correctly', () => {
    const props = createTestProps({
      route: { params: { id: '', name: '' } },
    });
    const tree = renderer.create(<PokemonDetailScreen {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
