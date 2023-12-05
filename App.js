import React, { useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NestableScrollContainer, NestableDraggableFlatList } from "react-native-draggable-flatlist"

import Header from "./src/components/header/Header";
import Card from "./src/components/card/Card";
import exercise_data from "./src/exercise_data.json"
import MyDragAndDropList from './src/pages/MyDragAndDropList';

function App() {
  return(
    <GestureHandlerRootView
      style={{flex: 1}}>
        <Header />
        <MyDragAndDropList />
    </GestureHandlerRootView>
  )
}

export default App;

