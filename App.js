import React, { useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NestableScrollContainer, NestableDraggableFlatList } from "react-native-draggable-flatlist"

import Header from "./src/components/header/Header";
import Card from "./src/components/card/Card";
import exercise_data from "./src/exercise_data.json"

function App() {
  const [data, setData] = useState(exercise_data);

  const renderItem = ({ item, index, drag, isActive }) => {
    return (
      <Card
        exercise={item}
        onLongPress={drag}
      />
    );
  };

  return (
    <GestureHandlerRootView>
      <NestableScrollContainer
        style={{
          flex: 1,
          backgroundColor: "blue",
          flexDirection: "column",
        }} >

        <Header />

        <NestableDraggableFlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => `draggable-item-${item.id}`}
          onDragEnd={({ data }) => setData(data)}
        />

      </NestableScrollContainer>
    </GestureHandlerRootView>

  );
}

export default App;

