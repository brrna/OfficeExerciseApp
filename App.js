import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';//sarmalama

import Router from "./src/pages/router/Router"

function App() {

  return (
    <GestureHandlerRootView> 
      <Router />
    </GestureHandlerRootView>
  )
}

export default App;