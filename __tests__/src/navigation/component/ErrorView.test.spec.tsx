import React from 'react';
import ErrorView from '../../../../src/navigation/component/ErrorView';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('react-native', () => {
  return {
    StyleSheet: {
      create: jest
        .fn()
        .mockReturnValue({ rowView: {}, detailText: {}, textView: {} }),
    },
    View: jest.fn(),
    Text: jest.fn(),
  };
});

// Todo: will continue to work on this later
describe('<ErrorView />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ErrorView />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
