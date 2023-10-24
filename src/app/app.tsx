/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { RootViewContainer } from './root-view-container';
import { Provider } from 'react-redux';
import { RootStore } from './root-store';

const App = (): JSX.Element => (
  <Provider store={RootStore}>
    <RootViewContainer />
  </Provider>
);

export { App };
