import { View } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import exercise from "../../exercise_data.json"
import { useState } from "react";
import MyCard from "../myCard/MyCard";

const MyList = () => {

    const [data, setData] = useState(exercise);

    const renderExercise = ({item, index, drag, isActive}) => {
        return(
            <MyCard exercise={item} onLongPress={drag} img={img[item.id]} />
        )
    }

    const img = [
        require("../../assests/images/neck.jpg"),
        require("../../assests/images/back.jpg"),
        require("../../assests/images/leg.jpg"),
        require("../../assests/images/body.jpg"),
    ]

    return(
        <View style={{flex: 1}}>
            <DraggableFlatList
                data={data}
                renderItem={renderExercise}
                keyExtractor={(item) => item.id.toString()}
                onDragEnd={({data}) => setData(data)} />
        </View>
    )
}

export default MyList;