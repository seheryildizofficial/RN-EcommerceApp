import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/store';
import StackNavigator from './src/routes/stackNavigator';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ApplicationProvider {...eva} theme={eva.light}>
          <StackNavigator />
        </ApplicationProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
