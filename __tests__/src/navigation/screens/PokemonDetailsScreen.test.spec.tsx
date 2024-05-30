import React from 'react';
import { Text } from 'react-native';
import PokemonDetailScreen from '../../../../src/navigation/screens/PokemonDetailScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { DetailsRouteProps } from '../../../../src/dataTypes/screenNavigationPropsTypes';

jest.mock('react-native', () => {
  return {
    SafeAreaView: jest.fn().mockImplementation(({ children }) => children),
    StyleSheet: { create: jest.fn().mockImplementation((styles) => styles) },
  };
});

// Mock PokemonDetail comonent
jest.mock('../../../../src/navigation/component/PokemonDetail', () => {
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
