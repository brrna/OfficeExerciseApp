import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import DraggableFlatList from 'react-native-draggable-flatlist';
import { createStackNavigator } from '@react-navigation/stack';

//Components
import Card from "../../components/card/Card";
import Header from "../../components/header/Header";

//json dosyasına is, title vb şeyler için liste oluşturuldu ve buraya dahil edildi
import exercise_data from "../../exercise_data.json"

//pages
import Arm from "../Arm"
import Back from "../Back";
import Leg from "../Leg";
import Neck from "../Neck";

function Router() {

    // useState ile const olarak tanımlandı.
    const [data, setData] = useState(exercise_data);

    const Stack = createStackNavigator();

    // Flatlist için her bir öge render edildi.
    const renderExercise = ({ item, index, drag, isActive }) => {
        return (
            <TouchableOpacity
                onLongPress={drag}> 
            
                <Card exercise={item} /> 
                
            </TouchableOpacity>
        )
    }
    return (
        <View>
            <Header/>
            <DraggableFlatList //Drag drop şçşn olab flatlist
                data={data}
                renderItem={renderExercise}
                keyExtractor={(item) => item.id.toString()}
                onDragEnd={({ data }) => setData(data)}
            //onDragEnd olmasaydı, ögeler yer değiştirdiğinde Card içindeki bilgiler de değişiyordu.
            //Bununla beraber sadece sıralama güncelleniyor.
            />
            <Stack.Navigator>
                <Stack.Screen name="Arm" component={Arm} />
                <Stack.Screen name="Back" component={Back} />
                <Stack.Screen name="Leg" component={Leg} />
                <Stack.Screen name="Neck" component={Neck} />
            </Stack.Navigator>
        </View>
    )
}

export default Router;