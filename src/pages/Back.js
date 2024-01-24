import { View, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Home from "./home/Home";
import MyButton from "../components/myButton/MyButton";
import { useState } from "react";

const Back = () => {

    const navigation = useNavigation();
    const [gifIndex, setGifIndex] = useState(0);

    const gif = [
        require("../assests/gifs/wall-pushup.gif"),
        require("../assests/gifs/wall-sit.gif"),
        require("../assests/gifs/sitting-spine-bending.gif")
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
            
            <MyButton gif={gif} gifIndex={gifIndex} setGifIndex={setGifIndex} />
            
        </View>
    )
}

export default Back;