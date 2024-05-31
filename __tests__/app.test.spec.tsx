import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('../src/navigation/containers/AppNavigator', () => () => {
  return 'RouteSwitch';
});

jest.mock('redux-persist/integration/react', () => ({
  PersistGate: (props: any) => props.children,
}));

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});

jest.mock('@react-native-async-storage/async-storage', () => {
  return {};
});

jest.mock('react-native', () => {
  return {
    NativeModules: {
      SettingsManager: { settings: { AppleLocale: 'en' } },
      I18nManager: { localeIdentifier: 'en' },
    },
    Platform: { OS: 'android' },
  };
});

jest.mock('react-redux', () => {
  return {
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn().mockImplementation(() => ({})),
    useDispatch: () => jest.fn(),
  };
});

// Todo: will continue to work on this later
describe('<App />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
