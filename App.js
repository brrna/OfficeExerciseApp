import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';//sarmalama
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

//pages
import Router from "./src/pages/router/Router"
import Arm from './src/pages/Arm';
import Back from './src/pages/Back';
import Leg from './src/pages/Leg';
import Neck from './src/pages/Neck';

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <GestureHandlerRootView>
        <Stack.Navigator initialRouteName='Router' >
          <Stack.Screen name='Router' component={Router} />
          <Stack.Screen name="Arm" component={Arm} />
          <Stack.Screen name="Back" component={Back} />
          <Stack.Screen name="Leg" component={Leg} />
          <Stack.Screen name="Neck" component={Neck} />
        </Stack.Navigator>
      </GestureHandlerRootView>
    </NavigationContainer>
  )
}

export default App;