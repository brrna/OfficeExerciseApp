import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


import Header from "./src/components/header/Header";
import Card from "./src/components/card/Card";
//json dosyasına is, title vb şeyler için liste oluşturuldu ve buraya dahil edildi
import exercise_data from "./src/exercise_data.json" 


function App() {

// useState ile const olarak tanımlandı.
  const [data, setData] = useState(exercise_data);

// Flatlist için her bir öge render edildi.
  const renderExercise = ({item, index, drag, isActive }) => {
    return(
      <TouchableOpacity
        onLongPress={drag} //ögeye uzun süre basıldığında sürüklenmeye hazır hale getirir
        > 
          <Card exercise={item} //props kullanımı
          /> 
      </TouchableOpacity>
    )
  }

  return(
    <GestureHandlerRootView //drag drop için sarmalama
      style={{flex: 1}}>
        <Header />
        <DraggableFlatList //Drag drop şçşn olab flatlist
          data={data}
          renderItem={renderExercise}
          keyExtractor={(item) => item.id.toString()}
          onDragEnd={({data}) => setData(data) }
          //onDragEnd olmasaydı, ögeler yer değiştirdiğinde Card içindeki bilgiler de değişiyordu.
          //Bununla beraber sadece sıralama güncelleniyor.
          />
    </GestureHandlerRootView>
  )
}

export default App;