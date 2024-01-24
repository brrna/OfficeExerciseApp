import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import Home from "./home/Home";
import MyButton from "../components/myButton/MyButton";
import { useState } from "react";

const Leg = () => {

    const navigation = useNavigation();
    const [gifIndex, setGifIndex] = useState(0);

    const gif = [
        require("../assests/gifs/side-lunges.gif"),
        require("../assests/gifs/calf-raises.gif"),
        require("../assests/gifs/leg-stretches.gif")
    ]

    return(
        <View>

            <Text>Leg</Text>

            <TouchableOpacity
                onPress={() => navigation.navigate(Home) }>
                <View
                    style={{
                        height: 30,
                        width: 30,
                        backgroundColor: "red"
                    }}>
                </View>
            </TouchableOpacity>
            
            <MyButton gif={gif} gifIndex={gifIndex} setGifIndex={setGifIndex} />

        </View>
    )
}

export default Leg;