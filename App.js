import React, { useState } from "react";
import { SafeAreaView, FlatList } from "react-native";
import DraggableFlatList from 'react-native-draggable-flatlist'

import Header from "./src/components/header/Header";
import Card from "./src/components/card/Card";
import exercise_data from "./src/exercise_data.json"

function App() {

    const [data, setData] = useState(exercise_data)

    const renderExercise = ({ item }) => <Card exercise={item} />
    const keyExercise = item => item.id.toString()

    return(
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "blue",
                flexDirection: "column",
            }}>

                <Header />
                
                <DraggableFlatList
                    data={data}
                    renderItem={renderExercise}
                    keyExtractor={keyExercise}
                />

        </SafeAreaView>
    )
}

export default App;