import React from "react";
import { SafeAreaView, FlatList } from "react-native";

import Header from "./src/components/header/Header";
import Card from "./src/components/card/Card";
import exercise_data from "./src/exercise_data.json"

function App() {

    const renderExercise = ({ item }) => <Card exercize={item} />
    const keyExercise = item => item.id.toString()

    return(
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "blue",
                flexDirection: "column",
            }}>

                <Header />
                
                <FlatList
                    data={exercise_data}
                    renderItem={renderExercise}
                    keyExtractor={keyExercise}
                />

        </SafeAreaView>
    )
}

export default App;