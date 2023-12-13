import { View } from "react-native";
import Header from "../../components/header/Header";
import DraggableFlatList from "react-native-draggable-flatlist";
import { useState } from "react";
import exercise_data from "../../exercise_data.json"
import { TouchableOpacity } from "react-native";
import Card from "../../components/card/Card";


function Home() {

    const [data, setData] = useState(exercise_data);

    const renderExercise = ({item, index, drag, isActive}) => {
        return(
            <TouchableOpacity
                onLongPress={drag}>
                    <Card exercise={item} />
            </TouchableOpacity>
        )
    }

    return(
        <View>
            <Header />

          
            <DraggableFlatList //Drag drop için olab flatlist
            data={data}
            renderItem={renderExercise}
            keyExtractor={(item) => item.id.toString()}
            onDragEnd={({data}) => setData(data)}
            //onDragEnd olmasaydı, ögeler yer değiştirdiğinde Card içindeki bilgiler de değişiyordu.
            //Bununla beraber sadece sıralama güncelleniyor.
            />
            
        </View>
    )
}

export default Home;