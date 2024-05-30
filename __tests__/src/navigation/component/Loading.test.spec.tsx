import React from 'react';
import Loading from '../../../../src/navigation/component/Loading';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('react-native', () => {
  return {
    StyleSheet: {
      create: jest
        .fn()
        .mockReturnValue({ rowView: {}, detailText: {}, textView: {} }),
    },
    ActivityIndicator: jest.fn(),
    View: jest.fn(),
    Text: jest.fn(),
  };
});

// Todo: will continue to work on this later
describe('<Loading />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Loading />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
