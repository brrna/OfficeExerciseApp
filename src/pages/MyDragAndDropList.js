import React, { useState } from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import DraggableFlatList from 'react-native-draggable-flatlist';

const MyDragAndDropList = () => {
  const [data, setData] = useState([
    { id: '1', text: 'Item 1' },
    { id: '2', text: 'Item 2' },
    { id: '3', text: 'Item 3' },
    // ... diğer öğeler
  ]);

  const renderItem = ({ item, index, drag, isActive }) => {
    return (
      <TouchableOpacity onLongPress={drag}>
        <Animated.View
          style={{
            backgroundColor: isActive ? 'lightgreen' : 'red',
            padding: 16,
            marginVertical: 8,
            borderRadius: 8,
          }}
        >
          <Text>{item.text} </Text>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  return (
    <DraggableFlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default MyDragAndDropList;
