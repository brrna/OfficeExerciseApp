import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import Home from "./home/Home";
import MyButton from "../components/myButton/MyButton";
import { useState } from "react";

const Neck = () => {

    const navigation = useNavigation();
    const [gifIndex, setGifIndex] = useState(0);

    const gif = [
        require("../assests/images/shoulder-circle.gif"),
        require("../assests/images/neck-circle.gif"),
        require("../assests/images/head-tilt.gif")
    ]

    return(
        <View>

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

            <Text>Neck</Text>

            <MyButton gif={gif} gifIndex={gifIndex} setGifIndex={setGifIndex} />

        </View>
    )
}

export default Neck;