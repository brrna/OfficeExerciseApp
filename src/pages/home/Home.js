import { View } from "react-native";
import Header from "../../components/header/Header";
import DraggableFlatList from "react-native-draggable-flatlist";
import { useState } from "react";
import exercise_data from "../../exercise_data.json"
import Card from "../../components/card/Card";

function Home() {


    const [data, setData] = useState(exercise_data);

    const renderExercise = ({item, index, drag, isActive}) => {
        return(
            <Card exercise={item}  onLongPress={drag} img={img[item.id]}/>
           
        )
    }

    const img = [
        require("../../assests/images/neck.jpg"),
        require("../../assests/images/back.jpg"),
        require("../../assests/images/leg.jpg"),
        require("../../assests/images/body.jpg"),
    ]

    return(
        <View
            style={{
                flex: 1,
                backgroundColor: "#f2f2f2"
            }}>
            
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