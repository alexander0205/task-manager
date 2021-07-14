import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabBoardScreen from './tabBoardScreen';
import AddTask from '../pages/AddTask';
import {NAVIGATION_SCREENS} from '../entities/enums/index';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={NAVIGATION_SCREENS.BOARD}
          component={TabBoardScreen}
        />
        <Stack.Screen name={NAVIGATION_SCREENS.ADD_TASK} component={AddTask} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
