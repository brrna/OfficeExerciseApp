import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NestableScrollContainer, NestableDraggableFlatList } from "react-native-draggable-flatlist"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

import Header from "./src/components/header/Header";
import Card from "./src/components/card/Card";
import exercise_data from "./src/exercise_data.json"
import MyDragAndDropList from './src/pages/MyDragAndDropList';
import Animated from 'react-native-reanimated';

function App() {

  const [data, setData] = useState(exercise_data);

  const renderExercise = ({item, index, drag, isActive, }) => {
    return(
      <TouchableOpacity
        onLongPress={drag}>
          <Animated.View>
          <Card exercise={item} />
          </Animated.View>
      </TouchableOpacity>
    )
  }

  return(
    <GestureHandlerRootView
      style={{flex: 1}}>
        <Header />
        <DraggableFlatList 
          data={data}
          renderItem={renderExercise}
          keyExtractor={(item) => item.id}/>
    </GestureHandlerRootView>
  )
}

export default App;

