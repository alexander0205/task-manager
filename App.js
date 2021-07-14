/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import type {Node} from 'react';
import Navigation from './src/navigation/index';
import {Provider} from 'react-redux';
import configureStore from './src/configureStore';
import {Container, Root} from 'native-base';
import ErrorBoundary from 'react-native-error-boundary'
const store = configureStore();
const App: () => Node = () => {
  return (
    <Root>
        <ErrorBoundary>
      <Provider store={store}>
        <Container>
          <Navigation />
        </Container>
      </Provider>
      </ErrorBoundary>
    </Root>
  );
};

export default App;
